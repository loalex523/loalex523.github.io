import React from 'react'
import './Pages.css'
function ProjectsComponents(props){
    return(
        <div>
            <a href={props.url}>
                <img alt = "logo192.png" src={props.image} className='projects-1-image'></img>
                    <div className="overlay"> 
                    <div className="overlay-text"> {props.description} </div>
                </div>
            </a>
        </div>
    )
}
export default ProjectsComponents;