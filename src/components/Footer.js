import "./footer.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"white", marginRight:"2rem", marginTop: "0.5rem"}}/>
                        <div>
                            <p>123 Housing Society.</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                            1-2323-343-23
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                            dummy@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About The Company</h4>
                    <p>Emmet is an awesome tool. The lorem generator is nice but it’s code completing functionality makes it indispensable. Once you learn the syntax you can code a whole wireframe with just a few keystrokes.</p>
                    <div className="socials">
                    <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color:"white", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer