import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './home/home';
import Login from './Login/Login';
import LoginADM from './LoginADM/LoginADM';
import Cadastro from './Cadastro/Cadastro';
import CadastroProduto from './CadastroProduto/CadastroProduto';
import DadosPedidos from "./Dados&Pedidos/DadosPedidos";
import Carrinho from "./Carrinho/Carrinho";
import Relatorio from "./Relatorio/Relatorio";

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/loginADM" exact element={<LoginADM/>}></Route>
                <Route path="/cadastro" exact element={<Cadastro/>}></Route>
                <Route path="/dados_pedidos" exact element={<DadosPedidos/>}></Route>
<<<<<<< HEAD
                <Route path="/Relatorio" exact element={<Relatorio/>}></Route>
                <Route path="/carrinho" exact element={<Carrinho/>}></Route>               
=======
                <Route path="/TelaADM" exact element={<TelaADM/>}></Route>
                <Route path="/carrinho" exact element={<Carrinho/>}></Route>
                <Route path="/cadastroProduto" exact element={<CadastroProduto/>}></Route>

>>>>>>> 7b488207a114e6eee6c8c105157cf77f14f178f9
            </Routes>
        </Router>
    )
}

export default Rotas;