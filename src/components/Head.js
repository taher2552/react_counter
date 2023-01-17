import React from 'react';
// import PropTypes from 'prop-types';

export function Button(props){
    // function function1(){
    //     alert(props.data)
    // }
    return(
        <>
    <button onClick={props.click}>{props.text}</button>
    </>
    )

    //scenario 2


}

function click1(){
    alert("click on button 1")
}
function click2(){
    alert("click on button 2")
}



export default function Head(){
    return(
        <>
    <p>hello world</p>
    <Button click={click1}  text={"Home"} data={"hello"}></Button>
    <Button  click={click2} text={"Product"} data={"bye"}></Button>
    </>
    )
}