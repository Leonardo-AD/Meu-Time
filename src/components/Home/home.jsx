import React, { useState } from 'react'
import { MagnifyingGlass, SoccerBall } from 'phosphor-react'
import './home.css'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

import { useNavigate } from 'react-router-dom'


export const Home = () => {
    
    let navigate = useNavigate()
    const [input, setInput] = useState('')

    function getKeyValue(){
        
        if(input === ""){

            MySwal.fire({
                title: "Tente Novamente",
                text : "Por favor, insira sua chave de acesso.",
                icon : "error"
            })
        }
        else{

            fetch("https://v3.football.api-sports.io/leagues", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": input,
                    "x-apisports-key": input
                }
            })
            .then(response => response.json())
            .then(json => {
                if(json.errors == 0){
                    navigate("/team", { replace: true })
                }
                else{
                    MySwal.fire({
                        title: "Chave Inválida",
                        text : "Por favor, insira uma chave de acesso válida.",
                        icon : "error"
                    })
                }
                console.log(json)
            })
            .catch(error => {
                MySwal.fire({
                    title: "Erro ao Buscar",
                    text : "Por favor, verifique sua chave de acesso.",
                    icon : "error"
                })
                console.log(error)
            })
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