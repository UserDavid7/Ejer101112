import React, { useState, useEffect } from 'react'

const Rectangulo = () => {

    const [color, setColor] = useState('black');
    const [intervalId, setIntervalId] = useState(null);

    function handleMouseEnter() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const newColor = `rgb(${r}, ${g}, ${b})`;
        setColor(newColor);
      }
    
     function handleMouseOver() {
        if (!intervalId) {
          const id = setInterval(handleMouseEnter, 300);
          setIntervalId(id);
        }
      }
    
      function handleMouseOut() {
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      }

      function stopColor(){
        clearInterval(intervalId);
          setIntervalId(null);
      }
    
      return (
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onDoubleClick={stopColor}
          style={{ backgroundColor: color }}
          className='rectangulo'
        >
          Mouse over me to change my color every second!
        </div>
      );
    }

    
    
export default Rectangulo
