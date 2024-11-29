import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'signals',
      fileName: (format) => `main.${format}.js`,
    },
  },
});
