import React from 'react'
import { useState } from 'react';


const Count = () => {
    const [count, setCount] = useState(0);
    const clickTOPlus = () => {
        setCount(count + 1)

    }
    const clickTOMinus = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div>
                <button onClick={ clickTOPlus } disabled={ count >= 10 } id='increment'>increment </button>
                <h1 >{ count }</h1>
                <button onClick={ clickTOMinus } disabled={ count <= 0 } id='decrement'>decrement </button>
            </div >
        </>
    )
}

export default Count
