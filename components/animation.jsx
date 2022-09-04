import React, { FC,useRef,useEffect } from 'react'
import gsap from 'gsap'

export const Animation = () => {
    
const boxRef = useRef();
useEffect(() => {
  gsap.to(boxRef.current, { rotation: "+=360" });
},[]);

// DOM to render
return (
<div className='flex justify-end items-center absolute right-2 top-2 '> 
  <p className="box inline " ref={boxRef}>Hello</p>
</div>
)
}

