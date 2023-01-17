import {useState} from "react";


function CountShow(props){
    return(
  <p className={"count_show"}>{props.count}</p>
    )
}
let arr=[]
export default function Counter(){
    let [count,setCount]=useState(10);
  
    function concat(){
    
     setCount(count+1);
     arr.push(count);
    }

    return(
        <>
        <CountShow count={arr} ></CountShow>
        <button onClick={concat} style={{color:"green", backgroundColor:"red"}}>Click</button>
        </>
    )

}