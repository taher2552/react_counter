import React from "react";

export function Change(props){
return(

 <p>{props.text}</p>
)
}



export default function ChangeText(){
    
  let [text, setText]= React.useState("This text to be changed");

    function handleClick(){
      setText("Text changed")
    }

    return(
        <>
         <Change text={text}></Change>
    <button onClick={handleClick}>Click me to change</button>
    </>
    )
}