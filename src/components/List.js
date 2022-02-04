import React,{useState} from 'react';
import { useEffect } from 'react';

function List({getitems}) {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        setItems(getitems);
        console.log("updating items");
    },[getitems])
    return (
        <div className='d-flex justify-content-evenly'>
            {items.map((val,index)=>{
                return <h1 key={index}>{val}</h1>;
            })}
        </div>
    );
}

export default List;