import React,{useState} from 'react';

function Roggler(props) {
    const [name,setName]=useState("dheeman");
    function toggle(){
        if(name==="dheeman"){
            setName("sayan");
        }else if(name==="sayan"){
            setName("dheeman");
        }
    }
    return (
        <div className='container'>
            <div className='card'>
            <h1>{name}</h1>
            <button className='btn' onClick={toggle}>click</button>
            </div>

        </div>
    );
}

export default Roggler;