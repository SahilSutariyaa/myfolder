import React from 'react'
import { useState } from 'react'
import Style from './Task3.module.css'

const Task4 = () => {
    const [abc, setAbc] = useState('')
    const [sahil, setSahil] = useState([])
    const [first, setFirst] = useState("")

    const setData = (e) => {
        setAbc(e.target.value)
        // console.log(e.target.value);
    }

    const setDown = (e) => {
        console.log(e.key);
        if (e.key === 'Enter' && first !== "") {
            console.log(abc);
            sahil[first] = abc
            setAbc('')
            setFirst()

        } else if (e.key == 'Enter') {
            setSahil([...sahil, abc])
            setAbc('')
        }
    }
    console.log(sahil);
    const clearDta = (id) => {
        const delet = sahil.filter((ele, index) => {
            return index != id
        })
        setSahil(delet)
    }
    const editdta = (id) => {
        setAbc(sahil[id])
        setFirst(id)
    }

    return (
        <>
            Name:
            <input
                value={ abc }
                type="text"
                name='name'
                id='name'
                onChange={ setData }
                onKeyDown={ setDown }
            />
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>value</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sahil.map((ele, index) => {
                            return (
                                <tr key={ index }>
                                    <th>{ index + 1 }</th>
                                    <th>{ ele }</th>
                                    <th>
                                        <button
                                            onClick={ () => clearDta(index) }
                                        >
                                            deletData
                                        </button>
                                        <button

                                            onClick={ () => editdta(index) }
                                        >
                                            editData
                                        </button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Task4
