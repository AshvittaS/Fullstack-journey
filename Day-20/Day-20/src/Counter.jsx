import React, { useEffect } from 'react'
import { useState } from 'react' ;
function Counter() {
  const [count,setCount]=useState(0);
  function inc(){
    setCount(count +1);
  }
  useEffect(()=>{
    console.log(count);
    set
},[count])
  return (
    <div>
        <h2 className='m-5'>{count}</h2>
        <button onClick={inc} className='mx-5'>Up</button>
    </div>
  )
}

export default Counter