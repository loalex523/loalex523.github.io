import React from 'react'
import './Pages.css'
import graduated from '../icons/avatar.png'
function About(){  
    const imageStyles = { width: 500, height: 300 };

    return(
        <div className='container'>
        <img  className='about-image' src={graduated}></img>
        <div className='about-container'>
            <div className='about-header'>
                Welcome to my website!
            </div>                
            <div className='about-me'>
                    I recently graduated from the University of Texas at Dallas with a degree in Software Engineering! During my free time, I enjoy playing sports, hanging out with friends, watching movies and TV shows, traveling, and reading books. 
                    Starting in late-July, I will be starting my full-time position at Goldman Sachs where I'll be working as a software engineer. 
            </div>
            
            <div className='about-skills-header'>
                Relevant Technical Skills
            </div>
            <ul className='skills-languages'>
                    <li> Java </li>
                    <li> C++ </li>
                    <li> JavaScript </li>
                    <li> Dart </li>
                    <li> HTML </li>
                    <li> CSS </li>
                    <li> React </li>
                    <li> Flutter </li>
                    <li> Node.js </li>
            </ul>
            
            <div className='about-skills-header'>
                Relevant Coursework
            </div>
            <ul className='skills-languages'>
                    <li> Programming Fundamentals </li>
                    <li> Computer Science I & II </li>
                    <li> Discrete Math I & II </li>
                    <li> C & C++ Programing in a UNIX Environment </li>
                    <li> Programming Fundamentals </li>
                    <li> Computer Science I & II </li>
                    <li> Discrete Math I & II </li>
                    <li> Probability and Statistics for Computer Scientists   </li>
                    <li> Computer Architecture </li>
                    <li> Software Engineering </li>
                    <li> Data Structures & Algorithms </li>
            </ul>

        </div>
        </div>
       
    )
}
export default About;

