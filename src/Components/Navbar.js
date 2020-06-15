import React from 'react'
import './Components.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { motion } from "framer-motion"
import About from './Pages/About'
import Contact from './Pages/Contact'


function Navbar(){
    return(
        <Router>
            <div className='navbar-container'>
                <motion.button whileHover={{opacity: 0.3}} whileTap={{scale: 0.9}} className='navButton' exact to='/' activeClassName="active"> Projects </motion.button>
                <Switch>
                    <Route path="/about" component={ About }/>
                    <Route path="/contact" component={ Contact }/>
                </Switch>
                
            </div>
        </Router>
        
    )
}
export default Navbar;

{/* <motion.button whileHover={{opacity: 0.3}} whileTap={{scale: 0.9}} className='navButton'> About Me </motion.button>
           <motion.button whileHover={{opacity: 0.3}} whileTap={{scale: 0.9}} className='navButton'> Contact </motion.button> */}