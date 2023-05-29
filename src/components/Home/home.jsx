import React, { useState } from 'react'
import { MagnifyingGlass, SoccerBall } from 'phosphor-react'
import { field } from '../../assets/export'
import './home.css'

import Swal from 'sweetalert2'

export const Home = () => {

    const [input, setInput] = useState('')

    function getKeyValue(){
        
        if(input === ""){

            Swal.fire({
                title: "Tente Novamente",
                text : "Por favor, insira sua chave de acesso.",
                icon : "error"
            })
        }
        else{

            fetch("https://v3.football.api-sports.io/teams?id=33", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": input
                }
            })
            .then(response => response.json())
            .then(json => {  
                console.log(json.response[0].team.name)
            })
            .catch(error => console.log(error))
        }
    }


    return(
        <div className="my-team__container">
            <div className="my-team__container-main">

                <p> <SoccerBall size={24} color="#272727" weight="duotone"/> </p>
                
                <h1>Obrigado por fazer parte do Meu Time!</h1>
                
                <div className="my-team__container-main-search">
                    <input 
                        type="text" 
                        onChange={ (event) => setInput(event.target.value) } 
                        placeholder="Insira sua chave de acesso" id="apiKey"
                    />

                    <button id="search" onClick={ getKeyValue }> 
                        <MagnifyingGlass size={24} color="#272727" weight="light"/> 
                    </button>
                </div>

            </div>
        </div>
    )
}