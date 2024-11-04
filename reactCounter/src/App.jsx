import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(10)
  if (count <= 0 || count >= 20) {
    count = 0
  }

  const incremant = () => {
   count = count + 1  
   setCount(count)
    console.log(count)
  }

  const decrement = () => {
     count = count - 1
     setCount(count)
    console.log(count)
  }

  return (
    <>
      <h1>Hello counter</h1>
      <h2>Count: {count}</h2>
      <button onClick= {incremant} >Increment:{count}</button>
      <br />
      <button onClick={decrement}>Decrement {count}</button>
    </>
  )
}

export default App
