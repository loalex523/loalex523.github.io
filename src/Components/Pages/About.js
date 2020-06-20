import React from 'react'
import './Pages.css'
function About(){
    return(
        <div className='about-container'>
            <div className='about-header'>
                Welcome to my portfolio
            </div>
            <div className='about-me'>
                    I'm an aspiring software engineer based in the Dallas-Fort Worth area. Currently, I'm a junior majoring in software engineering at the University of Texas at Dallas. I enjoy creating applications for the sake of improving people's lives, whether that'd be 
                    through an app, website, or any other medium of development. During my free time, I enjoy playing sports, hanging out with friends, watching movies and TV shows, traveling, and reading books. Feel free to connect with me!
            </div>
            <div className='about-skills-header'>
                Skills
            </div>
            <ul className='skills-languages'>
                    <li> Java </li>
                    <li> C++ </li>
                    <li> JavaScript </li>
                    <li> Dart </li>
                    <li> HTML </li>
                    <li> CSS </li>
            </ul>
            <ul className='skills-languages'>
                    <li> React </li>
                    <li> Flutter </li>
                    <li> Node.js </li>
            </ul>
            
        </div>
    )
}
export default About;

