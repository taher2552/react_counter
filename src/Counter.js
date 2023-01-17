import {useState, useEffect} from "react";
import './Counter.css';

function CountShow(props){
    return(
  <p className={"count_show"}>{props.count}</p>
    )
}

export default function Counter(){
   let [count,setCount]=useState(0);
   let [disabled,setDisabled]=useState(false);

   useEffect(()=>{
    if(count==0){
        setDisabled(true);
    }
     
   },[])

   useEffect(()=>{
    if(count!==0){
        setDisabled(false);
    }
     
   },[count])



    function increament(){
        setCount(count+1);
    }

    function decrement(){
        if(count==0){
            setDisabled(true);
        }else{
            setDisabled(false);
            setCount(count-1);
         
        }

      
        
    }

    function reset(){
        setCount(0);
    }


return(
    <>
    <button onClick={increament} className={"btn"}>Increament</button>
    <CountShow count={count} ></CountShow>
    <button onClick={decrement} className={"btn"} disabled={disabled}>Decrement</button>
    <button onClick={reset} className={"btn"}>Reset</button>
    </>
)
}