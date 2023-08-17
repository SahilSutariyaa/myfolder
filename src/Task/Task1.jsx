import React, { useState } from 'react'


const Task1 = () => {
    const [password, setPassword] = useState()
    const [checkpassword, setChekpassword] = useState(false)

    const clickPassword = (e) => {
        setPassword(e.target.value)
    }
    const clickPasswordcheck = () => {
        setChekpassword(!checkpassword)

    }

    return (
        <>
            <label htmlFor="">
                password::::
                <input
                    onChange={ clickPassword }
                    type={ checkpassword ? 'text' : 'password' }
                    value={ password }
                />
            </label>
            <input
                onChange={ clickPasswordcheck }
                type="checkbox"
                value={ 'checked' }
            />




        </>
    )
}

export default Task1
