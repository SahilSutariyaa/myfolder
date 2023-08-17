import React from 'react'
import PropsPassing2 from './PropsPassing2'
// import { useState } from 'react'

const PropsPassing = () => {

    let data = {
        name: "sahil",
        age: "21"
    }

    return (
        <>

            <PropsPassing2
                name={ data }
            />
        </>
    )
}

export default PropsPassing
