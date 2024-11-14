// // Write a counter app. Also disable the button after once clicked. The number should auto increment when clicked + and it should auto decrement when clicked - 


// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   const increment = () =>{
//     setCount(count + 1)
//   }

//   const decrement = () =>{
//     setCount(count - 1 )
//   }

//   const reset = () =>{
//     setCount(0)
//   }

//   return (
// <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat py-3">
// <div className="w-full"> 
//   <h1>Count : {count}</h1>
//   <button onClick={decrement} > - </button>
//   <button onClick={reset} > Reset </button>
//     <button onClick={increment} > + </button>
//   </div>

 
  
// </div>
//   )
// }

// export default App

import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [incrementDisabled, setIncrementDisabled] = useState(false);
  const [decrementDisabled, setDecrementDisabled] = useState(false);
  const intervalRef = useRef(null);

  const increment = () => {
    setIncrementDisabled(true);
    intervalRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, [1000]);
  };

  const decrement = () => {
    setDecrementDisabled(true);
    intervalRef.current = setInterval(() => {
      setCount((count) => count - 1);
    }, [1000]);
  };

  const clearInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current(null);
    }
  };

  const reset = () => {
    setCount(0);
    clearInterval();
    setIncrementDisabled(false);
    setDecrementDisabled(false);
  };

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={decrement} disabled={decrementDisabled}>
        -
      </button>
      <button onClick={reset}> Reset </button>
      <button onClick={increment} disabled={incrementDisabled}>
        {" "}
        +{" "}
      </button>
    </>
  );
}

export default App;
