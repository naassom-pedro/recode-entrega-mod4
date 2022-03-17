import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import { Welcome } from "./components/Welcome";
import { Contato } from "./pages/Contato";
import { Destinos } from "./pages/Destinos";
import { Promocoes } from "./pages/Promocoes";


export function AppRoutes() {
    return (
        <Router>
            <Routes>

            <Route path='/' element={<Welcome />}/>
            <Route path='/destinos' element={<Destinos />}/>
            <Route path='/promocoes' element={<Promocoes />}/>
            <Route path='/contato' element={<Contato />}/>

            </Routes>
        </Router>
    );
}