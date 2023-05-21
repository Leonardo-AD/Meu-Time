import React from "react"
import { MagnifyingGlass, SoccerBall } from "phosphor-react"
import { field } from "../../assets/export"
import './home.css'

export const Home = () => {
    return(
        <div className="my-team__container">
            <div className="my-team__container-main">

                <p> <SoccerBall size={24} color="#272727" weight="duotone"/> </p>
                
                <h1>Obrigado por fazer parte do Meu Time!</h1>
                
                <div className="my-team__container-main-search">
                    <input type="text" placeholder="Insira sua chave de acesso"/>

                    <button> <MagnifyingGlass size={24} color="#272727" weight="light"/> </button>
                </div>

            </div>
        </div>
    )
}