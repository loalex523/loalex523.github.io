import React from 'react'
import './Components.css'

function Socials(props){
    return(
        <div>
            <a href={props.url}>
                <img alt = "logo192.png" src={props.image} className={props.size}></img>
            </a>
        </div>
    )
}
export default Socials;