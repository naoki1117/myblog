import React, { useRef,useEffect } from 'react'
import gsap from 'gsap'

const test = () => {
    
const boxRef = useRef();
useEffect(() => {
  gsap.to(boxRef.current, { rotation: "+=360" });
},[]);

// DOM to render
return (
<div className='text-center flex justify-center items-center h-screen w-screen'> 
  <p className="box inline" ref={boxRef}>Hello</p>
</div>
)
}

export default test
