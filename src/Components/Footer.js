import React from 'react'
import './Components.css'
import Socials from './Socials'
import git from './icons/github.png'
import insta from './icons/insta.png'
import linkedin from './icons/linkedin.png'
import email from './icons/email.png'
function Footer(){

    return(
        <div className='footer'>
            <div className='footer-text'> Let's build something together! </div>
            <div className='footer-socials'> 
            <Socials url='https://github.com/loalex523' image={git} size='footer-size'/>
                    <Socials url='https://www.linkedin.com/in/alex-j-lo/' image={linkedin} size='footer-size'/>
                    <Socials url='https://www.instagram.com/alexjlo_/?hl=en' image={insta} size='footer-size'/>
                    <Socials url='mailto:loalex523@gmail.com' image={email} size='footer-size'/>
            </div>
            <div className='footer-bottom'> Coded & designed by Alex Lo </div>
        </div>
    )
}
export default Footer;