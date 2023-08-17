import React from 'react'
import Style from './Team.module.css'
const Team = () => {
    return (
        <>
            <div className={ Style.team }>
                <div className={ Style.picture }>
                    <img src="https://avatars.mds.yandex.net/i?id=8008f543643e1e075f0ca64843cdf863f6fe4988-5131517-images-thumbs&n=13" alt="" />
                </div>
                <div className={ Style.text }>
                    <div className={ Style.copy }>
                        <h1>Write Notes and Summarize  Meetings 30x faster</h1>
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

export default Team
