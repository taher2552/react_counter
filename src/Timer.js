import React from "react";


export function DisplayTimer(props){
    return(
        <>
        <p>{props.time}</p>
        </>
    )
}

export default function Timer(){
    let [time,setTime] = React.useState(0);
    //  console.log("normal")
    // React.useEffect(()=>{
    // //   console.log("use effect")
    //   setInterval(()=>{
    //       setTime((time)=>time+1);
    //     },1000)
    // },[])

  
      

        // function update(){
        //     setTime(time+1)
        // }

        let interval;

        function start(){
           interval= setInterval(()=>{
                      setTime((time)=>time+1);
                    },1000)

            const startButton = document.querySelector('.start');
            startButton.setAttribute('disabled', true)

             const pauseButton = document.querySelector('.pause');
             pauseButton.addEventListener('click',()=>{
                clearInterval(interval);
                startButton.removeAttribute('disabled')
                
             })       
             const stopButton = document.querySelector('.stop');
             stopButton.addEventListener('click',()=>{
                clearInterval(interval)
                setTime(0)
                startButton.removeAttribute('disabled')
             })       
        }

    

    return(
        <>
        <p>This is timer</p>
        <DisplayTimer time={time}></DisplayTimer>
        <button onClick={start} className={'start'}>Start</button>
        <button className={'pause'}>Pause</button>
        <button className={'stop'}>Stop</button>
        </>
    )
}