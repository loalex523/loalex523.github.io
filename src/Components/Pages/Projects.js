import React from 'react'
import './Pages.css'
import ProjectsComponents from './ProjectsComponents'
function Projects(){
    return(
        <div className='projects-container'>
            <div className='projects-header'> Projects </div>
            <div className='projects-subheader'> French Press </div>
            <div className='projects-1-container'>
            <div className='projects-1'>
                <ProjectsComponents 
                    overlay="overlay"
                    url="https://github.com/acm-projects/French-Press" 
                    image="French Press Cover for Website.png" 
                    overlayText="
                    Built using Flutter, Firebase, Google Maps API, and Android Studio
                    ">
                </ProjectsComponents> 
            </div>
            <div className='projects-description'>
                A sleek mobile application that presents information from local coffee shops around the UT Dallas campus
            </div>
            </div>
            {/* <div className='projects-header'> More Projects Coming Soon! </div> */}
        </div>
    )
}

export default Projects;

