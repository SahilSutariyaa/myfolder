import React from 'react'
import Style from './Zoom2.module.css'


const Zoom2 = () => {
    return (
        <>
            <div className={ Style.zoom }>

                <div className={ Style.text }>
                    <div className={ Style.copy }>
                        <h1>Keep everyone aligned with  Automated Summary
                        </h1>
                    </div>
                    <div className={ Style.copy }>
                        <p>Collaborate with teammates in the live transcript, by adding comments, highlighting key points, and
                            assigning action items.
                        </p>
                    </div>
                </div>
                <div className={ Style.picture }>
                    <img src="https://avatars.mds.yandex.net/i?id=5f7f6f791473cc6e04d9ab3c39e69497cf394f89-8206955-images-thumbs&n=13" alt="" />
                </div>
            </div>

        </>
    )
}

export default Zoom2
