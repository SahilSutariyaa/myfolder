import React from 'react'

const PropsPassing2 = ({ name }) => {
    console.log(name);
    return (
        <>
            { name.name }
            { name.age }
        </>
    )
}

export default PropsPassing2
