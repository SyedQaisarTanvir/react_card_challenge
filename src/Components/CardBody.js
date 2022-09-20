import React from "react";
import Mail from '../Images/Mail (1).png';
import Linkedin from '../Images/linkedin.png';


export default function CardBody() {
    return (
        <div className="container">
            <div className="personal-info">
                <h1>Laura Smith</h1>
                <h4>Frontend Developer</h4>
                <h5>laurasmith.website</h5>
            </div>
            <div className="buttons">
                <div className="mail-button">
                    <img src={Mail} alt='Mail Icon'></img>
                
                    <button type="submit">Email</button>
                </div>
                <div className="linkedin-button">
                    <img src={Linkedin} alt='Linkedin logo'></img>
                    <button type="submit">Linkedin</button>
                </div>
            </div>

            <div className="personal-section">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}