import React from 'react';
import  './Hero.css'
import hand_icon from '../Assests/Images/hand_icon.png'
import banner_three from '../Assests/Images/banner_three.png'
const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <i class="ri-arrow-right-line"></i>
                </div>
            </div>
            <div className="hero-right">
                <img src={banner_three} alt="" />
            </div>
        </div>
    );
}

export default Hero;