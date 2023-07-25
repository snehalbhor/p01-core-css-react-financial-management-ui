import React, { useState } from 'react'
import "./Header.css"
import OutsideClickHandler from 'react-outside-click-handler'; 

import {BiAlignRight} from 'react-icons/bi'
const Header = () => {
  const [menuOpened,setMenuOpened]=useState(false)
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth <=800)
    {console.log({right : !menuOpened && "-100%"})
      return {right : !menuOpened && "-100%"}}

  }
  return (
    <section className="h-wrapper">
      
      <div className="flexCenter paddings innerWidth h-container">
        <img src="F-logo-removebg-preview.png" alt="logo" width={200} height={80} />
        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuOpened(false)
        }}>
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
        {/* <div className="flexCenter h-menu" style={{right:false}}> */}
          <a href="/" className='i-menu' >About</a>
          <a href="/" className='i-menu'>Values</a>
          <a href="/" className='i-menu'>Contact US</a>
          <a href="/" className='i-menu'>Get Started</a>
          <button className='button'>
          <a href="/" className='i-menu' >Contact</a>

          </button>
         
          
        </div>
        </OutsideClickHandler>
      
      <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiAlignRight size={30} />
      </div>
      </div>
    </section>


  )
}

export default Header
