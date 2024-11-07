import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Passward, setPassward] = useState('');

  const passwordGenerator = useCallback(() => {
    })
  return (
    <>  
    <h1 className='text-4xl text-white'>Passward Generator</h1>
    </> 
  )
}

export default App
