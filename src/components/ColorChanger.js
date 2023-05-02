import React from 'react'
import { useState } from 'react';

const ColorChanger = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors=["blue","red","white","grey"];

  const handleButtonClick=()=>{
    setColorIndex((colorIndex + 1) % colors.length);
  }
  
  
  return (
    <div style={{ backgroundColor:colors[colorIndex] }}>
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  )
}

export default ColorChanger;
