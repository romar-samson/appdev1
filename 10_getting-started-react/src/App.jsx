import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p><strong>Name:</strong> Romar S. Samson</p>
    <p><strong>Course & Year:</strong> 3rd Year BS in Information Technology</p>
    <p><strong>Fun Fact:</strong> I easily pick up new sports and currently enjoy playing several different ones.</p>
    <p><strong>Reason for Learning React:</strong> I want to build my own personal website and create a portfolio powered by React.</p>
    </>
  )
}

export default App
