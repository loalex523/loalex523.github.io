import React from 'react'
import './Pages.css'
import ProjectsComponents from './ProjectsComponents'
function Projects(){
    return(
        <div className='projects-container'>
            <div className='projects-header'> Projects </div>
            <div className='projects-subheader'> French Press | Mobile Application </div>
            <div className='projects-1'>
                <ProjectsComponents 
                    overlay="overlay"
                    url="https://github.com/acm-projects/French-Press" 
                    image="French Press Cover for Website.png" 
                    description="A sleek mobile application that presents information about local coffee shops around Dallas-Fort-Worth metroplex. 
                    French Press uses Google's Firebase as a database and
                    a user authenticator along with Flutter for UI/UX purposes. ">
                </ProjectsComponents>
            </div>
            <div className='projects-header'> More Projects Coming Soon! </div>

        </div>
    )
}

export default Projects;

