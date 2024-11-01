import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 class='bg-red-500 rounded-lg p-4 mb-4'>Tailwind test</h1>
    <Card  name="asim"/>
    <Card  name="khan"/>
    </>
  )
}

export default App
