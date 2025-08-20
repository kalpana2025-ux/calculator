import React,{useState} from 'react';
import {evaluate} from "mathjs";
function Cal1()
{
    const[value,setvalue]=useState('');
  const handleClick=(num)=>{
    if(num==='AC'){
    setvalue('');
  }
      else if (num==='DE')
  {
    setvalue(value.slice(0,-1));
  }
  else{
    setvalue(value+num);
  }
};
    const evaluateExpression = () => {
  try {
    setvalue(evaluate(value).toString());
  } catch {
    setvalue("Error");
  }
};
return(
    <div className="page1">
    <div className="demo">
    <input type="text" value={value}/>
    <br/>
    <button onClick={()=>handleClick(7)}>7</button>
    <button onClick={()=>handleClick(8)}>8</button>
  <button onClick={()=>handleClick(9)}>9</button>
    <button onClick={()=>handleClick('+')}>+</button><br>
    </br>
<button onClick={()=>handleClick(4)}>4</button>
    <button onClick={()=>handleClick(5)}>5</button>
    <button onClick={()=>handleClick(6)}>6</button>
<button onClick={()=>handleClick('-')}>-</button>
<br></br>
<button onClick={()=>handleClick(1)}>1</button>
    <button onClick={()=>handleClick(2)}>2</button>
    <button onClick={()=>handleClick(3)}>3</button>
<button onClick={()=>handleClick('/')}>/</button>
<br>
</br>
<button onClick={()=>handleClick(0)}>0</button>
    <button onClick={()=>handleClick('AC')}>AC</button>
    <button onClick={()=>handleClick('DE')}>DE</button>
<button onClick={() => evaluateExpression()}>=</button>
<br></br>
<button onClick={()=>handleClick('*')}>*</button>
    <button onClick={()=>handleClick('.')}>.</button>
    <button onClick={()=>handleClick('%')}>%</button>
<button onClick={()=>handleClick(',')}>,</button>
</div>
</div>
);
}
export default Cal1;