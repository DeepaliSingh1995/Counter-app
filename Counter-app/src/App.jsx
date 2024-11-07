import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count + 1)
  }

  const decrement = () =>{
    setCount(count - 1 )
  }

  const reset = () =>{
    setCount(0)
  }

  return (
<div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat py-3">
<div className="w-full"> 
  <h1>Count : {count}</h1>
  <button onClick={decrement} > - </button>
  <button onClick={reset} > Reset </button>
    <button onClick={increment} > + </button>
  </div>

 
  
</div>
  )
}

export default App
