import React from 'react'
import './team.css'
import { Link } from 'react-router-dom' 

export function Team(){
    return(
        <div className="my-team__container">
            <div className="my-team__container-main team-selection__container">
                <h1>Selecione seu time</h1>
                <Link to="/">Home</Link>
            </div>
        </div> 
    )
}