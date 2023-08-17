import React from 'react'
import { useState } from 'react';
import Style from './PasswordHideandShow.module.css'


const PasswordHideandShow = () => {
    const [checkbox, setCheckbox] = useState(false)
    const setPass = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    const changeToRadio = (e) => {
        console.log(e.target.value);
        console.log(e.target.checked);
    }
    const clickTocheched = (e) => {
        console.log(e.target.value);
        console.log(e.target.checked);
        setCheckbox(!checkbox)
    }

    const [password, setPassword] = useState()
    const [passwordcheck, setPasswordcheck] = useState(false)

    const changesetbox = (e) => {
        setPassword(e.target.value)
    }
    const changesetcheckbox = () => {
        setPasswordcheck(!passwordcheck)
    }
    return (

        <>
            <input type="text" onChange={ setPass } value={ checkbox } />

            Male:  <input
                onChange={ changeToRadio }
                type="radio"
                name='gender'
                value={ 'male' } />

            Female: <input
                onChange={ changeToRadio }
                type="radio"
                name='gender'
                value={ 'female' } />


            sahil:   <input
                onChange={ clickTocheched }
                type="checkbox"
                value={ 'sahil' }
            />
            ashish : <input
                onChange={ clickTocheched }
                type="checkbox"
                value={ 'ashish' }
            />
            abhay: <input
                onChange={ clickTocheched }
                type="checkbox"
                value={ 'abhay' }

            />
            <div className={ Style.box }>


                <label
                    className={ Style.label }
                >
                    password:
                    <input
                        onChange={ changesetbox }
                        type={ passwordcheck ? 'text' : 'password' }
                        value={ password }
                    />
                </label>
                <div className={ Style.check }>
                    <input
                        onChange={ changesetcheckbox }
                        type="checkbox"
                        checked={ passwordcheck }
                    />
                    <i class="fa-sharp fa-regular fa-eye"></i>
                </div>
                {/* <input type="password" name="password" id="" /> */ }
            </div>
        </>
    )
}

export default PasswordHideandShow
