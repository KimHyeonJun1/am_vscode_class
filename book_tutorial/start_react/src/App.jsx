import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const helloFunc = () => {
    alert('hello')
  }
  return (

    <>
    <h1>헬로 월드</h1>
      <button onClick={() => alert('hello')}>버튼</button>
    </>
  )
}

export default App
