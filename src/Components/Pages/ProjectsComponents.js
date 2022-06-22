import React from 'react'
import './Pages.css'
import { motion } from "framer-motion"

function ProjectsComponents(props){
    return(
        <motion.a 
                    whileHover={{opacity: .5}}
                    style={{ textDecoration: 'none', color: 'black', paddingRight: 100 }} 
                    href={props.link} 
                    className='projects-subheader'> 
                    {props.title}
        </motion.a>
    )
}
export default ProjectsComponents;