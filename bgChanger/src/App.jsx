import { useState } from 'react'

function App() {
  const [color, setColor] = useState('green')

  return (
    <div className='w-full h-screen'
      style= {{backgroundColor: color}}
      >
      <div className='fixes flex-wrap justify-center bottom-12 inset-x-0 px-2 border-red-600'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-3 py-1 rounded-full text-white shadow-lg bg-red-600'
          style={{backgroundColor: 'red'}}
          onClick={() => setColor('red')}
          >Red</button>
          <button className='outline-none px-3 py-1 rounded-full text-white shadow-lg bg-red-600'
          style={{backgroundColor: 'green'}}
          onClick={() => setColor('green')}
          >Green</button>
          <button className='outline-none px-3 py-1 rounded-full text-white shadow-lg bg-red-600'
          style={{backgroundColor: 'blue'}}
          onClick={() => setColor('blue')}
          >blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
