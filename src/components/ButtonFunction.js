import React from "react";
export function Button(props){

    // function handleClick(){
    //     alert("hello")
    //  }

    //agar function ne direct yaha se access karwu che to yaha define karwu parse . agar as a prop pass karwu che to wone niche main component ma define karwu parse
   
    return(
    // <button onClick={handleClick}>{props.text}</button>
    <button onClick={props.handle}>{props.text}</button>
    )
}
export default function Counter(props){
// [count, setCount] = React.useState(0);
function handleClick(){
    alert("hello")
 }


    return(
    <>
    <p>{props.text}</p>
     <Button text={'click button'} handle={handleClick} ></Button>
    
    </>
    )
}