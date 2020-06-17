import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


function Navbar(){
    return(
        <div className='navbar-container'>
            <Link to="./projects">
                <motion.button whileHover={{opacity: 0.3}} whileTap={{scale: 0.9}} className='navButton'> Projects </motion.button>  
            </Link>
            <Link to="./about">
                <motion.button whileHover={{opacity: 0.3}} whileTap={{scale: 0.9}} className='navButton'> About Me </motion.button>
            </Link>
            <Link to="./contact">
                <motion.button whileHover={{opacity: 0.3}} whileTap={{scale: 0.9}} className='navButton'> Contact </motion.button>            
            </Link>
        </div>      
    )
}
export default Navbar;

