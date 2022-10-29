import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './home/home';
import Login from './Login/Login';
import LoginADM from './LoginADM/LoginADM';
import Cadastro from './Cadastro/Cadastro';
import DadosPedidos from "./Dados&Pedidos/DadosPedidos";
import Carrinho from "./Carrinho/Carrinho";
import TelaADM from "./TelaADM/TelaADM";

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/loginADM" exact element={<LoginADM/>}></Route>
                <Route path="/cadastro" exact element={<Cadastro/>}></Route>
                <Route path="/dados_pedidos" exact element={<DadosPedidos/>}></Route>
                <Route path="/TelaADM" exact element={<TelaADM/>}></Route>
                <Route path="/carrinho" exact element={<Carrinho/>}></Route>               
            </Routes>
        </Router>
    )
}

export default Rotas;