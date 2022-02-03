import React,{useState,useEffect} from 'react';
function ScreenResizer(props) {
    const[width,setWidth]=useState(`${window.screen.width}x${window.screen.height}`);
    const resizeScreen=()=>{
        setWidth(`${window.innerWidth}x${window.innerHeight}`)
    }
    useEffect(()=>{
        window.addEventListener("resize",resizeScreen)
        return ()=>{
            window.removeEventListener("resize",resizeScreen)
        }
    })
    return (
        <>

            <div style={{marginTop:"200px",textAlign:"center"}}>
            <h1 >secrren size</h1>
            <h2>{width}</h2>
            </div>
        </>
    );
}

export default ScreenResizer;