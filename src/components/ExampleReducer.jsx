import React,{useReducer} from 'react';

const initialState=0;

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            state+=1;
            break;
        case "DECREMENT":
            state-=1;
            break;    
    }
    return state;
}


function ExampleReducer(props) {

    const[state,dispatch]=useReducer(reducer,initialState);

    return (
        <div className='container text-center'>
           <div className='card p-5 shadow'>
               <h1 className='text-primary my-3'>{state}</h1>
               <button className='btn btn-primary mb-1' onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
               <button className='btn btn-warning' onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
           </div>
        </div>
    );
}

export default ExampleReducer;