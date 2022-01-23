import React, { useState } from 'react';
import './lightcomp.css';

const Light = () => {
    var[color,setColor] = useState('grey')
    var[blbtn,setSwitch]=useState('ON')
    var click = () =>{
        setColor(color==='orange'?'grey':'orange');
        setSwitch(blbtn==='ON'?'OFF':'ON');
    }
  
    return (
  <div className="container">
      
      <div className="light">
      <button style={{background:color}}> </button>
      </div>
      <div className="onoff">
          <button onClick={click}>{blbtn}</button>
      </div>
     
  </div>
  
)};

export default Light;
