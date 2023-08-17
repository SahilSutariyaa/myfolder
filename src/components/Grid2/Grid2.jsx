import React from 'react'
import Style from './Grid2.module.css'
import Gride2Img1 from '../img/tv.png';
import Gride2Img2 from '../img/drgree.png';
import Gride2Img3 from '../img/voice.png';


const Grid2 = () => {
    return (
        <>
            <div className={ Style.box }>
                <div className={ Style.inbox }>
                    <img lazy src={ Gride2Img1 } alt="" />
                    <h3>Get the most out
                        of your meetings</h3>
                    <div className={ Style.text }>
                        <p>Otter empowers everyone to engage and be  more productive in meetings with real time  automated notes and
                            audio transcription.</p>
                    </div>
                    <button>Try Otter.ai for Business</button>
                </div>
                <div className={ Style.inbox }>
                    <img lazy src={ Gride2Img2 } alt="" />
                    <h3>Help students and faculty  succeed</h3>
                    <div className={ Style.text }>
                        <p>Otter empowers everyone to engage and be  more productive in meetings with real time  automated notes and
                            audio transcription.</p>
                    </div>
                    <button>Try Otter.ai for Education</button>
                </div>
                <div className={ Style.inbox }>
                    <img lazy src={ Gride2Img3 } alt="" />
                    <h3>For all
                        your needs</h3>
                    <div className={ Style.text }>
                        <p>Otter empowers everyone to engage and be  more productive in meetings with real time  automated notes and
                            audio transcription.</p>
                    </div>
                    <button>Try Otter.ai Free</button>
                </div>

            </div >

        </>
    )
}

export default Grid2
