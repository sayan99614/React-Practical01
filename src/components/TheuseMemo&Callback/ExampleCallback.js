import React,{useState,useCallback,useEffect} from 'react';
import List from '../List';

function ExampleCallback(props) {
    const[dark,setDark]=useState(false);
    const[input,setInput]=useState(0);

    useEffect(()=>{
        console.log("changing")
        document.body.style.backgroundColor= dark?`#181818`:`#009688`;
        document.body.style.color=dark?`white`:`black`;
    })

    const getItems=useCallback(()=>{
        return [input,input+1,input+2];
    },[input]);

    return (
       <>
        <div style={{marginTop:"200px"}} className='container text-center'>
           <h1>Enter some input</h1>
           <input type="number" value={input} onChange={(event)=>{
               setInput(parseInt(event.target.value))
           }} className='mx-auto form-control shadow w-50' /> 
           <button style={{backgroundColor:"#159987"}} onClick={()=>setDark(!dark)} className='btn mt-3 shadow-lg text-white'>Chabge Theme</button>
        </div>
        <List getitems={getItems}/>
       </>
    );
}

export default ExampleCallback;