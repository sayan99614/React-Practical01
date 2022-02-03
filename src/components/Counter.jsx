import React,{useState,useEffect} from 'react';
import '../css/style.css'
const Counter = () => {
    const [counter,setCounter]=useState(0);
    function increment(){
        return setCounter(counter+1);
    }
    function decrement(){
        return setCounter(counter-1);
    }

    useEffect(()=>{
        document.title=`Counter`
    })

    return (
        <>
        <div className='container'>
        <div className='card'>
            <h3>functional</h3>
            <h1>{counter}</h1>
            <div className='btndiv'>
                <button className='btn' onClick={increment}>increment</button>
                <button className='btn' onClick={decrement}>decrement</button>
            </div>
        </div>
        </div>
        </>
    );
};

export default Counter;
