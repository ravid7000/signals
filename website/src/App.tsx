import { useState, Suspense } from 'react'
import LazyPosts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <Suspense fallback={<p>Loading all posts...</p>}>
        <LazyPosts count={count} />
      </Suspense>
    </>
  )
}

export default App
