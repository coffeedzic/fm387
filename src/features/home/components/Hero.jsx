import React from 'react'
import { Link } from 'react-router-dom'

import heroImage from '../../../assets/images/hero.jpg'
import fmLogo from '../../../assets/images/fm22logo.png'

import '../styles/Hero.css'

const Hero = () => {
  const heroImageStyle = {
    background: `url(${heroImage})`
  }
  return(
    <div 
      className="hero"
      style={heroImageStyle}
    >
      <div className="hero-wrap">
        <div className="content">
          <span className="sub-title">
            Najbolje urađena bh. liga!
          </span>
          <div className="heading">
            Prvi veliki update naše zajednice
          </div>
          <p>
            Ukoliko želite da budete dio ovog projekta i da doprinesete u njegovom razvoju pozivamo vas da se pridružite našem discordu.
          </p>
        </div>
        <div className="content content-alt">
          <img src={fmLogo} alt="Football Manager logo" />
          <div className="download-btn">            
            <a href="https://forum.fm387.com/viewtopic.php?f=18&t=14">
              Preuzmi dodatak!
            </a>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero