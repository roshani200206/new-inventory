import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Multiply() {
  const [count, setCount]=useState(1)

  function handleMultiply (){
    setCount(count*2);
  }

  
  return (
    <>
     <h1>Roshani</h1>
     {count}
     <button onClick={handleMultiply}>multiply by 2</button>
      
    </>
  );
}

export default Multiply;

