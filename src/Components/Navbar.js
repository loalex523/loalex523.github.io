import React from 'react'
import './Components.css'
import { Link, NavLink, Redirect } from 'react-router-dom'
import { motion } from "framer-motion"

function Navbar(){
    return(
        <div className='navbar-container'>
            <NavLink  to="./" exact activeClassName='nav-active'>
                <motion.button whileHover={{opacity: .5}} whileTap={{scale: 0.9}} className='navButton'>  Projects </motion.button>  
            </NavLink>
            <NavLink to="./about" exact activeClassName='nav-active'>
                <motion.button whileHover={{opacity: .5}} whileTap={{scale: 0.9}} className='navButton'> About Me </motion.button>
            </NavLink>
            <NavLink to="./contact" activeClassName='nav-active'>
                <motion.button whileHover={{opacity: .5}} whileTap={{scale: 0.9}} className='navButton'> Contact </motion.button>            
            </NavLink>
        </div>      
    )
}
export default Navbar;

