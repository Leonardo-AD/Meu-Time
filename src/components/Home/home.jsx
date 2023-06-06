import React, { useState, useEffect } from 'react'
import { MagnifyingGlass, SoccerBall } from 'phosphor-react'
import './home.css'

import { useNavigate } from 'react-router-dom'

export const Home = () => {
    
    return(
        <div className="my-team__container">
            <div className="my-team__container-main">

                <h1>Selecione uma modalidade</h1>
                
                <div className="my-team__container-main-choice">
                    {/* <input 
                        type="text" 
                        onChange={ (event) => setInput(event.target.value) } 
                        placeholder="Insira sua chave de acesso" id="apiKey"
                    /> */}
                    {/* put this section on components */}
                    <span> <SoccerBall size={24} color="#272727" weight="duotone"/></span><button id="search">Futebol</button>
                    <span> <SoccerBall size={24} color="#272727" weight="duotone"/></span><button id="search">Fórmula 1</button>
                </div>

            </div>
        </div>
    )
}