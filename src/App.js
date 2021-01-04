import logo from './logo.svg';
import './css/app.css';

import Username from './Username';
import { useState } from "react";
function App({name,age}) {
  let [num,setNumber]=useState(0);
  
  return (
    <div>
      <input type="number" id="textBox"/>
      <input type="submit" className="btn" onClick={()=>{setNumber(document.getElementById("textBox").value)}}/>
      <Username number={num}></Username>
    </div>
  );
}
export default App;
