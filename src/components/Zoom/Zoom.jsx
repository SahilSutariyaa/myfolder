import React from 'react'
import Style from './Zoom.module.css'


const Zoom = () => {
    return (
        <>
            <div className={ Style.zoom }>


                <div className={ Style.picture }>
                    <img src="https://avatars.mds.yandex.net/i?id=b2ff56823970c56d3f6a3aa115ce1d98aebdcb7e-9225904-images-thumbs&n=13" alt="" />
                </div>
                <div className={ Style.text }>
                    <div className={ Style.copy }>
                        <h1>Save time with Automated Meeting Notes
                        </h1>
                    </div>
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

export default Zoom
