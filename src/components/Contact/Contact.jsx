import React from 'react'
import "./Contact.css"

import { MdPhone } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import {FcVideoCall} from 'react-icons/fc'
const Contact = () => {
    return (
        <section className="c-wrapper">

            <div className="paddings innerWidth flexCenter c-container">

                <div className="flexColStart c-left">

                    <span className='red-text'>Our Contact</span>
                    <span className='primary-text'>+91-8208937591</span>
                    <span className='second-text'>Call Us</span>

                    <div className="flexCenter contactModes">
                        {/* first Row */}
                        <div className="flexColStart row">

                            <div className="flexColCenter mode">
                                <div className="flexCenter ">
                                    <div className="flexCenter icon" >
                                        <MdPhone size={25} />

                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primayText'>Call</span>
                                        <span>+91 12 211 21 121</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">call now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexCenter ">
                                    <div className="flexCenter icon" >
                                        <BsFillChatDotsFill size={25} />

                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primayText'>chat</span>
                                        <span>+91 12 211 21 121</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">chat now</div>
                            </div>

                        </div>

                        {/* second row */}

                        <div className="flexColStart row">

                            <div className="flexColCenter mode">
                                <div className="flexCenter ">
                                    <div className="flexCenter icon" >
                                        <FcVideoCall size={25} />

                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primayText'>Video call</span>
                                        <span>+91 12 211 21 121</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video call now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexCenter ">
                                    <div className="flexCenter icon" >
                                        <HiChatBubbleBottomCenter size={25} />

                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primayText'>Message</span>
                                        <span>+91 12 211 21 121</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message now</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <div className="image-container">
                        <img src="FM3.jpg" alt="" />
                    </div>

                </div>


            </div>

        </section>
    )
}

export default Contact
