import React from 'react'
import Style from './Footer.module.css'
import FooterImg from '../img/logo.png';

const Footer = () => {
    return (
        <>
            <div className={ Style.footer }>
                <div className={ Style.infooter }>
                    <div className={ Style.photo }><img lazy src={ FooterImg } alt="" /></div>
                    <div className={ Style.details }>
                        <div>
                            <p>why otter.ai</p>
                            <ul>
                                <li>Otter for Business</li>
                                <li>Otter for Education</li>
                                <li>Otter for Individuals</li>
                                <li>Otter for Transcription</li>
                                <li>Otter AI Chat</li>
                                <li>Pricing</li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <p>Download</p>
                            <ul>
                                <li>All Apps</li>
                                <li>for iOS</li>
                                <li>for iOS</li>
                                <li>Chrome Extension</li>
                                <li></li>
                                <li></li>
                                <li></li>

                            </ul>
                        </div>
                        <div>
                            <p>Resources</p>
                            <ul>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>Help & Support</li>
                                <li>Media Kit</li>
                                <li>Affiliate</li>
                                <li>Privacy & Security</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={ Style.last }>
                    <div className={ Style.condition }>
                        <p>© 2023 Otter.ai</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>JP</p>
                        <p>Zoom</p>
                    </div>
                    <div className={ Style.icon }>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Footer
