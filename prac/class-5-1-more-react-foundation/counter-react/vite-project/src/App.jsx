import React from "react";
import {useState} from 'React';



function App() {

  const [count, setCount] = useState(0);

  

  return (
      <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>      
      <CustomButton count={count - 1} setCount={setCount}></CustomButton>      
      <CustomButton count={count * 100} setCount={setCount}></CustomButton>      
      </div>
  )
}


// componentf
function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count+1)
  }

 return <button onClick={onClickHandler}>
  Counter {props.count}
 </button>
 }
export default App
