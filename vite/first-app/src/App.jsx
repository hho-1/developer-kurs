import { useState } from 'react'
import './App.css'
import CardComp from './Card'


function App() {
  const [count, setCount] = useState(0)
  const url = import.meta.env.VITE_APP_BASE
  console.log(url);

  return (
    <>
      <CardComp/>
    </>
  )
}

export default App
