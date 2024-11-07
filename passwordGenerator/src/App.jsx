import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Passward, setPassword] = useState('');

  // useRef use to select the password element
  const passwordRef = useRef(null) 

  // usecallback store the refrence of the function in cacha
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let number = '0123456789';
    let char = "!@#$%^&*()_+{}|:<>?/.,";

    if(numberAllowed) str += number
    if(charAllowed) str += char;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)

    },[ length, numberAllowed, charAllowed, setPassword]);

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0, 99); // for selection of password 0-99 elements
      window.navigator.clipboard.writeText(Passward);
    }, [Passward])

// if useEffect see any changes in [length, numberAllowed, charAllowed] then it will call passwordGenerator 
    useEffect(() => {
      passwordGenerator();
    }, [length, numberAllowed, charAllowed]);

  return (
    <>  
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 border border-gray-600">
        <h1 className='text-white font-bold my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden my-3'>
          <input
          type='text'
          value={Passward}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-600 px-3 py-2 text-white' 
          onClick={copyPasswordToClipboard}>copy</button>    
        </div>
        <div className=" flex text-sm gap-x-2 text-orange-400">
          <div className="flex  item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              // className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Numbers: {length}</label>
          </div>
          <div className="flex  item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {setNumberAllowed((prev) => !prev)}} // reverse value true to false and false to true 
            />
            <label>Numbers</label>
          </div>
          <div className="flex  item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='numberInput'
              onChange={() => {setCharAllowed((prev) => !prev)}} // reverse value true to false and false to true 
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </> 
  )
}

export default App
