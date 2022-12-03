import React from 'react'
import './Pages.css'
import ProjectsComponents from './ProjectsComponents'

function Projects(){
    return(
        <div className='projects-container'>
            <div className='projects-header'> Projects </div>
            <ProjectsComponents title="French Press" link="https://github.com/acm-projects/French-Press" />
            <div className='projects-1-container'>
            <div className='projects-1'>
                {/* <ProjectsComponents 
                    overlay="overlay"
                    url="https://github.com/acm-projects/French-Press" 
                    image="French Press Cover for Website.png" 
                    overlayText="
                    Built using Flutter, Firebase, Google Maps API, and Android Studio
                    ">
                </ProjectsComponents>  */}
            </div>
            <div className='projects-description'>
                This was a mobile application that I worked on alongside four other student developers during my Spring 2020 semester at UT Dallas. The application provides information regarding local coffee shops surrounding the UT Dallas area using technologies such as Flutter and Firebase.
            </div>
            </div>
            {/* <div className='projects-header'> More Projects Coming Soon! </div> */}
        </div>
    )
}

export default Projects;

