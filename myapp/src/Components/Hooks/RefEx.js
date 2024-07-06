import React, { useRef } from 'react'

const RefEx = () => {
    let qtyRef = useRef();
    const qtyIncrement = ()=>{
        qtyRef.current.value++;
        qtyRef.current.focus();
    }
  return (
    <div className='container p-5'>
        <input type='text' ref={qtyRef}/>
        <button onClick={qtyIncrement}>+</button>
    </div>
  )
}

export default RefEx