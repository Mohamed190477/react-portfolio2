import React from 'react';
import "./navbarStyles.css";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {

    const [isNavShowing, setIsNavShowing] = useState(false);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor)

    return (
        <div className={!color ?'header' : 'header header-bg'} >
            <Link to="/" >
                <h1 style={{userSelect: "none"}} className='navbar-logo'>Portfolio</h1>
            </Link>
            <ul className={isNavShowing ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul> 
            <div className='hamburger' onClick={() => {setIsNavShowing(prev =>!prev)}} >
                {!isNavShowing ? <FaBars size={20} style={{ color:"#fff" }} /> : <FaTimes size={20} style={{ color:"#fff" }} />}
            </div>
        </div>
    )
}

export default Navbar