import React from 'react'
import "./Top.css"
import { ImLocation } from "react-icons/im";
import CountUp from 'react-countup';
import { motion } from "framer-motion"

const Top = () => {
    return (
        <div>
            <section className="top-wrapper">
                <div className="paddings innerWidth flexCenter top-container">
                    <div className="flexColStart top-left">

                        <div className="t-title">
                            <div className="orange-circle" />
                            <motion.h1 
                            initial={{y:"2rem",opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={{duration:2,type:"spring"}}
                            >
                                Prime Solution For <br />Wealth Management
                            </motion.h1>
                        </div>

                        <div className="flexColStart t-desc">
                            <span>
                                Best Website Worldwide To Manage The Wealth
                            </span>

                        </div>

                        <div className="flexCenter search-bar">

                            <ImLocation color='var(--blue)' size={30} />
                            <input type='text' />
                            <button className="button">search </button>

                        </div>

                        <div className="flexCenter stats">

                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={8800} end={9000} duration={4} />

                                    <span>+</span>
                                </span>
                                <span className='second-text'>Achievements</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={8400} end={8900} duration={4} />

                                    <span>+</span></span>
                                <span className='second-text'>Happy People</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={80} end={99} duration={4} />

                                    <span>+</span></span>
                                <span className='second-text'>Awards</span>
                            </div>
                        </div>

                    </div>

                    <div className="top-right">
                        <motion.div
                            initial={{x:"7rem",opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:2,type:"spring"}} className="image-container">
                            <img src="FM.jpg" alt="logo2" />
                        </motion.div>


                    </div>


                </div>


            </section>

        </div>
    )
}

export default Top
