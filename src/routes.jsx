import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Team } from './components'

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/team" element={ <Team /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}