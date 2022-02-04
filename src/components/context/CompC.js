import React from 'react';
import { nameContext } from './CompA';
function CompC(props) {

    const context=React.useContext(nameContext);

    return (
        <>
        <h1 className='mt-5 text-center text-white shadow-sm mx-5'>Hi i am {context.name}</h1>
        </>
    );
}

export default CompC;