import React, { useState } from 'react';
import './colortheme.css';
 
const Colortheme = () => {
 
  const [colorIndex, setColorIndex] = useState(0);
 
 
  const colors = ['white', 'black'];
 
 
  const changeColor = () => {
   
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };
 
  return (
    <div className="container" style={{ backgroundColor: colors[colorIndex],color:colors[colorIndex-1] }}>
      <h1>Click the button to change the background color</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}
 
export default Colortheme;