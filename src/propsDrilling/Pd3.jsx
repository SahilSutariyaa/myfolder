/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Style from './Pd3.module.css'


const Pd3 = (props) => {
    return (
        <>
            <div className={ Style.main }>
                <ul>
                    <li>{ props.sutariya.obj }</li>
                    <li>{ props.sutariya.obj1 }</li>
                    <li>{ props.sutariya.obj2 }</li>
                    <li>{ props.sutariya.obj3 }</li>
                    <li>{ props.sutariya.obj4 }</li>
                </ul>
            </div>
        </>
    )
}

export default Pd3
