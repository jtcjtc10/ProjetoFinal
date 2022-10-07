import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Login/Login';
import Cadastro from './Cadastro/Cadastro';


function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas;