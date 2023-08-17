import React, { useState } from 'react'
import Style from './CC.module.css'
import chip from '../Credit card/img/png-transparent-integrated-circuit-smart-card-card-chip-electronics-text-rectangle-thumbnail-removebg-preview.png'

const CC = () => {
    const [allData, setAllData] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [cvc, setCvc] = useState("")
    const [ok, setOk] = useState(true)
    // const [back, setBack] = useState(false)



    const clickTochange = (event) => {
        setAllData(event.target.value)
    }
    const clickTonumber = (event) => {
        setNumber(event.target.value)
    }
    const clickTodate = (event) => {
        setDate(event.target.value)
    }
    const clickTocvc = (event) => {
        setCvc(event.target.value)
    }

    return (
        <>


            {



                <div>
                    {
                        ok ?
                            <div className={ Style.card }>
                                <div className={ Style.phto }>
                                    <img lazy src={ chip } alt="" />

                                    <h3>Bank of Baroda</h3>
                                </div>
                                <div className={ Style.rccs__number }>{ number === '' ? "•••• •••• •••• ••••" : number }</div>
                                <div className={ Style.name }>
                                    <div>{ allData === '' ? "Enter your Name" : allData }</div>
                                    <div>
                                        <div>valid thru</div>
                                        <div >{ date === '' ? "••/••" : date }</div>
                                    </div>
                                </div>
                            </div >
                            :
                            <div className={ Style.back }>
                                <div className={ Style.inback }></div>
                                <div className={ Style.outback }>
                                    <h4>{ cvc.length === 3 ? cvc : "cvc " }</h4>
                                </div>
                            </div>
                    }
                </div >
            }






            <center>
                <div className={ Style.main }>
                    <form action="">
                        <div className={ Style.valid }>

                            <label htmlFor="">
                                Name on card:
                                <input
                                    value={ allData }
                                    onChange={ clickTochange }
                                    required
                                    type="text"
                                    placeholder='Enter your Name' />

                            </label>

                        </div>
                        <div className={ Style.valid }>

                            <label htmlFor="">
                                Card Number:
                                <input
                                    value={ number }
                                    onChange={ clickTonumber }
                                    required
                                    type="text"
                                    placeholder='EnterCard Number' />

                            </label>
                        </div>
                        <div className={ Style.valid }>

                            <label htmlFor="">
                                Expiration Date:
                                <input
                                    value={ date }
                                    onChange={ clickTodate }
                                    required
                                    type="month"
                                    placeholder='Valid Thru' />

                            </label>
                        </div>
                        <div className={ Style.valid }>
                            <label htmlFor="name" >
                                CVC:
                                <input
                                    onChange={ clickTocvc }
                                    // onBlur={ () => setBack(true) }
                                    onFocus={ () => setOk(!ok) }
                                    value={ cvc }
                                    required
                                    type="text"
                                    placeholder='CVC' />
                            </label>
                            <div className={ Style.valid }>
                                <input type="submit" />

                            </div>
                        </div>
                    </form>
                </div>
            </center>
        </>
    )
}

export default CC
