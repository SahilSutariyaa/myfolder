import React from 'react'
import Count2 from './Count2'
import { useState } from 'react'

const Count1 = () => {
    const [count, setCount] = useState(0);

    const clickTOPlus = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const clickTOMinus = () => {
        if (count > 0) {
            setCount(count - 1)

        }

    }
    return (
        <>
            <h1>{ count }</h1>
            <Count2
                sahil={ clickTOPlus }
                sutariya={ clickTOMinus }
            />

        </>
    )
}

export default Count1
