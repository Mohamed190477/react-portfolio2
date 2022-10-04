import React from 'react';
import './heroImage.css';
import IntroIMage from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const HeroImage = () => {
    return (
        <div className='hero' >
            <div className='mask' >
                <img className='intro-image' src={IntroIMage} alt='Intro Pic' />
            </div>
            <div className='content'>
                <p>Hi, I'M A FREELANCER</p>
                <h1>React Developer</h1>
                <div>
                    <Link to="/project" className='btn'>Project</Link>
                    <Link to="/contact" className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage