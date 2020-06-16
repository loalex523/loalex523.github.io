import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


function Navbar(){
    return(
        <div className='navbar-container'>
            <Link to="./projects">
                <motion.a whileHover={{opacity: 0.3}} whileTap={{scale: 0.9}} className='navButton'> Projects </motion.a>  
            </Link>
            <Link to="./about">
                <motion.a whileHover={{opacity: 0.3}} whileTap={{scale: 0.9}} className='navButton'> About Me </motion.a>
            </Link>
            <Link to="./contact">
                <motion.a whileHover={{opacity: 0.3}} whileTap={{scale: 0.9}} className='navButton'> Contact </motion.a>            
            </Link>
        </div>      
    )
}
export default Navbar;

