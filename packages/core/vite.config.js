import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    // Tell Vite to build a library
    lib: {
      // Specify the entry point for your library
      entry: resolve(__dirname, 'src/main.ts'), // Adjust 'src/main.ts' to your library's entry file

      // Define the output formats (ESM and CJS)
      formats: ['es', 'cjs'],

      // Define the base name for the output files
      // - For 'es' format, it will produce 'my-library.mjs' (or .js depending on package.json type)
      // - For 'cjs' format, it will produce 'my-library.cjs' (or .js depending on package.json type)
      // See Step 4 about package.json type and extensions
      fileName: (format) => `main.${format === 'es' ? 'mjs' : 'cjs'}`,

      // Optional: Define the UMD global name if you were building for UMD/IIFE
      name: 'signals',
    },
  },
  plugins: [
    // Use the vite-plugin-dts plugin to generate declaration files
    dts({
      // Specify the directory to output the declaration files
      // Defaults to `build.outDir` ('dist' in this case)
      // outputDir: 'dist/types',

      // Automatically insert the 'types' entry into package.json
      // Points to the main declaration file (e.g., dist/main.d.ts)
      insertTypesEntry: true,

      // Optional: Specify the tsconfig file to use for declaration generation
      // tsconfigPath: 'tsconfig.build.json',
    })
  ],
});