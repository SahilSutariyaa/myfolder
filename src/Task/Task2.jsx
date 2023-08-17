import React from 'react'
import { useState } from 'react'

const Task2 = () => {
    const [count, setCount] = useState([])

    const [first, setfirst] = useState(null)


    const addToinput = (e) => {

        const data = {
            name: "",
            email: "",
            disname: false,
            disemail: false

        }


        setfirst(count.length)
        setCount([...count, data])
        console.log(data);
    }
    const clickTodiaseble = () => {

        count.map((item, i) => {
            let name = document.getElementById(`name${i}`).value;
            let email = document.getElementById(`email${i}`).value;
            if (name || email) {
                item.name = name
                item.email = email
            }
            if (name) {
                item.disname = true
            }
            if (email) {
                item.disemail = true
            }

        })
        let ans = [...count]
        setCount(ans)
    }



    return (
        <>
            <button className='m-5' onClick={ addToinput }>Add+</button>
            {
                count.map((sahil, index) => {
                    return (
                        <tr key={ index } >
                            { console.log(sahil) }
                            <th >{ index + 1 }.</th>
                            <label htmlFor="" className='m-3'> name: <input type="text" id={ `name${index}` } disabled={ sahil.disname ? "diaseble" : null } /></label>
                            <label htmlFor="" className='m-3'> email: <input type="text" id={ `email${index}` } disabled={ sahil.disemail ? "diaseble" : null } /></label>
                        </tr>
                    )
                })
            }
            <button
                className='m-3'
                onClick={ clickTodiaseble }
            >
                Save
            </button>

        </>
    )
}

export default Task2
