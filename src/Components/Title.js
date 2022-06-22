import React from 'react'
import './Components.css'
// import Socials from './Socials'
// import git from './icons/github.png'
// import insta from './icons/insta.png'
// import linkedin from './icons/linkedin.png'
// import email from './icons/email.png'

function Title(){
    return(
        <div>
            <div className='title-container'>
                <div className='name'> Alex Lo </div>
                <div className='title'> Student @ UT Dallas </div>
                <div className='goal'>Software Engineer </div>
                {/* <div className='socials'>
                    <Socials url='https://github.com/loalex523' image={git} size='footer-size'/>
                    <Socials url='https://www.linkedin.com/in/alex-j-lo/' image={linkedin} size='footer-size'/>
                    <Socials url='https://www.instagram.com/alexjlo_/?hl=en' image={insta} size='footer-size'/>
                    <Socials url='mailto:loalex523@gmail.com' image={email} size='footer-size'/>
                </div> */}
            </div>
        </div>
    )
}

export default Title;