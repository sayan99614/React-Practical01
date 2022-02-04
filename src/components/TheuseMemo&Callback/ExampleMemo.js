import React,{useState,useMemo} from 'react';
import { useEffect } from 'react';

function ExampleMemo(props) {
    const[dark,setDark]=useState(false);
    const[input,setInput]=useState(0);
    const res=useMemo(()=>{
        return slowFunction(input);
    },[input]);
    const theme={
        backgroundColor:dark?`#181818`:`#009688`,
        color:dark?`white`:`black`
    }
    useEffect(()=>{
        console.log("changing")
        document.body.style.backgroundColor= dark?`#181818`:`#009688`;
        document.body.style.color=dark?`white`:`black`;
    })
    return (
        <div style={{marginTop:"200px"}} className='container text-center'>
           <h1>Enter some input</h1>
           <input type="number" value={input} onChange={(event)=>{
               setInput(event.target.value)
           }} className='mx-auto form-control shadow w-50' /> 
           <button style={{backgroundColor:"#159987"}} onClick={()=>setDark(!dark)} className='btn mt-3 shadow-lg text-white'>Chabge Theme</button>
           <h1>{res}</h1>
        </div>
    );
}

export default ExampleMemo;

function slowFunction(number){
    console.log("calling slow function");
    // for(let i=0;i<1000000000;i++){}
    return number*2;
}