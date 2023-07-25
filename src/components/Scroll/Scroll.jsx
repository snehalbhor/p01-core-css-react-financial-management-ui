import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import "./Scroll.css"
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common'

const Scroll = () => {
    return (
        <section className="s-wrapper">
            <div className="paddings innerWidth  s-container">

                <div className=" flexColStart s-head">

                    <span className='red-text'>Our Sites</span>
                    <span className='primary-text'>With  Vision</span>
                </div>

                {/* <Swiper spaceBetween={30} slidesPerView={3}> */}
                <Swiper {...sliderSettings}>
                    <SlideButtons/>
                    {
                        data.map((card,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart s-card">
                                    <img className="card-img" src={card.image} alt="home" />
                                    <span className="secondaryText s-price">
                                        <span style={{color:"orange"}}>$</span>
                                        <span>{card.fees}</span>
                                    </span>
                                    <span className='primary-text'>{card.name}</span>
                                    <span className='primary-text'>{card.details}</span>

                                </div>

                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Scroll

const SlideButtons =()=>{
    const swipe=useSwiper()
    return(
        <div className="flexCenter s-button">
            <button onClick={()=>{swipe.slidePrev()}}>&lt;</button>
            <button onClick={()=>{swipe.slideNext()}}>&gt;</button>
        </div>
    )
}
