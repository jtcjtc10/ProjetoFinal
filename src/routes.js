import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './home/home';
import Login from './Login/Login';
import Cadastro from './Cadastro/Cadastro';
import DadosPedidos from "./Dados&Pedidos/DadosPedidos";
import Carrinho from "./Carrinho/Carrinho";


function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/home" exact element={<Home/>}></Route>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/cadastro" exact element={<Cadastro/>}></Route>
                <Route path="/dados_pedidos" exact element={<DadosPedidos/>}></Route>
                <Route path="/carrinho" exact element={<Carrinho/>}></Route>               
            </Routes>
        </Router>
    )
}

export default Rotas;