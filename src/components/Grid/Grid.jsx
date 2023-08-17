import React from 'react'
import Style from './Grid.module.css'

const Grid = () => {
    return (
        <>
            <div className={ Style.grid }>
                <div className={ Style.ingrid }><img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554c972551243919f425_dropbox-logo.svg" alt="" /></div>
                <div className={ Style.ingrid }><img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554bfd5fedfcdfb0aaad_zoom-logo.svg" alt="" /></div>
                <div className={ Style.ingrid }><img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554b86ff2cd5e536307b_ibm-logo.svg" alt="" /></div>
                <div className={ Style.ingrid }><img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554c9725510cdd19f424_docomo-logo.svg" alt="" /></div>
                <div className={ Style.ingrid }><img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554bd4a8140c51c94f26_ucla-logo.svg" alt="" /></div>
                <div className={ Style.ingrid }><img src="https://assets-global.website-files.com/618e9316785b3582a5178502/61f1554b472c7ddf37f41372_rakuten-logo.svg" alt="" /></div>
            </div>

        </>
    )
}

export default Grid
