import React from 'react'
import './Pages.css'
function About(){
    return(
        <div className='about-container'>
            <div className='about-header'>
                Welcome to my website!
            </div>
            <div className='about-me'>
                    I'm an aspiring software engineer based in the Dallas-Fort Worth area. Currently, I'm a junior majoring in software engineering at The University of Texas at Dallas. I enjoy creating applications for the sake of improving people's lives, whether that'd be 
                    through an app, website, or any other medium of development. During my free time, I enjoy playing sports, hanging out with friends, watching movies and TV shows, traveling, and reading books. 
                    I will be an intern at Goldman Sachs for the summer of 2021! 
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
    )
}
export default About;

