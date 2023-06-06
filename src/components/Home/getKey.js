import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

import { useNavigate } from 'react-router-dom'


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