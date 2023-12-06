import { usePosts } from './api/posts/hooks/usePosts'
import { useTestStore } from './store/testStore'

const App = () => {
  const { test, setTest } = useTestStore((state) => ({
    test: state.test,
    setTest: state.setTest,
  }))
  const { data: posts, isPending } = usePosts()
  if (isPending) return <div>Loading...</div>
  console.log('posts', posts)

  return (
    <>
      <div className='font-semibold text-5xl text-blue-500'>{test}</div>
      <input onChange={(event) => setTest(event.target.value)} />

      <div className='mt-10'>
        <div className='text-3xl font-semibold'>Posts</div>
        <div className='mt-2'>
          {posts?.map((post) => (
            <div key={post.id} className='border p-2 flex flex-col items-center align-center'>
              <div className='text-xl font-semibold'>{post.title}</div>
              <div className='text-gray-500'>by {post.author}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
