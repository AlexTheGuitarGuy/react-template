import { useTestStore } from './store/testStore'

const App = () => {
  const { test, setTest } = useTestStore((state) => ({
    test: state.test,
    setTest: state.setTest,
  }))

  return (
    <>
      <div className='font-semibold text-5xl text-blue-500'>{test}</div>
      <input onChange={(event) => setTest(event.target.value)} />
    </>
  )
}

export default App
