import React from 'react'
import { useState } from 'react'

const InputChange = () => {


    const data = ['sahil', 'Abhay', 'bhargav', 'tejas']
    const [name, setName] = useState(data[0])
    const [number, setNumber] = useState(0)
    const cliktochange = () => {
        if (number === data.length - 1) {
            setName(data[0])
            setNumber(0)
        } else {
            setName(data[number + 1])
            setNumber(number + 1)
        }

    }
    return (
        <>

            <label htmlFor="">Name: <input type="text" value={ name } /></label> <br /><br />
            <button onClick={ cliktochange }>ClickToChange</button>
        </>
    )
}

export default InputChange
