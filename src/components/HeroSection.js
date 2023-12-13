import React from 'react';
import { Button } from './button';
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
            <h1>BARDA WILD LIFE SANCTUARY</h1>
            <p>Jamnagar, Gujarat</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection