import React from 'react'
import Style from './Rember.module.css'


const Rember = () => {
    return (
        <>

            <div className={ Style.zoom }>
                <div className={ Style.picture }>
                    <img src="https://sun9-73.userapi.com/impg/imPlyIBylzY0SEGjwntsgT-2TI9BpF0gqO0IBg/ZzG_dkP7Xhw.jpg?size=1000x1000&quality=95&sign=28d5df85bab9d3c78730d64b8289f542&c_uniq_tag=7IkQNX45QCtw7dAtfTaDDBWKygJUmtbZnzBgISFsSio&type=album" alt="" />
                </div>
                <div className={ Style.text }>
                    <div className={ Style.copy }>
                        <h1>Remember key details with  Automated Slide Capture
                        </h1></div>
                    <div className={ Style.copy }>
                        <p>Collaborate with teammates in the live transcript, by adding comments, highlighting key points, and
                            assigning action items.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rember
