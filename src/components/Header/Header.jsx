import React from 'react'
import Style from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={ Style.header }>
                <div className={ Style.header1 }>
                    <div className={ Style.written }>
                        <h2>Goodbye manual notes. Hello  OtterPilot™</h2>
                    </div>
                    <div className={ Style.written }>
                        <p >Get an AI meeting assistant that records audio, writes  notes, automatically captures slides, and
                            generates  summaries.</p>
                    </div>
                    <div className={ Style.btn }><button>Start for Free</button></div>
                </div>
                <div className={ Style.header2 }>
                    <img src="https://i.pinimg.com/originals/da/ee/f3/daeef34471e0dcfe9ac295b7b5a8f5be.png" alt="" />
                </div>
            </div>

        </>
    )
}

export default Header
