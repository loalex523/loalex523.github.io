import React from 'react'
import './Components.css'
import { motion } from "framer-motion"

function Socials(props){
    return(
            <motion.a href={props.url} whileTap={{ scale: 0.9}} whileHover={{ scale: 1.2 }}>
                <img alt = "logo192.png" src={props.image} className={props.size} ></img>
            </motion.a>
    )
}
export default Socials;