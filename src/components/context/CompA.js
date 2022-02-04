import React from 'react';
import CompB from './CompB';

const nameContext=React.createContext();

function CompA(props) {
    return (
       <nameContext.Provider value={{name:"sayan pati"}}>
            <CompB/>
       </nameContext.Provider>
    );
}

export default CompA;
export {nameContext};