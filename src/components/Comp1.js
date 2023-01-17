import React from "react";

export function CompText(props){
    return(
        <>
     <p>{props.text}</p>
   
</>
    )
}


export function CountIncrease(props){
    return(
        <>
     <p>{props.count}</p>
   
</>
    )
}



export default function Comp1 () {
    let [para, setPara] = React.useState("Hello from comp1");

    let [Count, setIncrease] = React.useState(0);


    function handleClick(){
        setPara("good bye")

    }
    function countIncrease(){
        setIncrease(Count)

    }


    return(
        <>
         
         <button onClick={handleClick}>Change text</button>
         <button onClick={countIncrease}>Count increase</button>

        <CompText text={para}></CompText>
        <CountIncrease count={Count++}></CountIncrease>
        </>
    )
}