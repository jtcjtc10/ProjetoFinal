import React, { useState } from "react";
// import "../DadosPedidos.css";
import "../Cadastro/Cad.css";
import "./Carrinho.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Cadastro() {
    return (
        <>
            <div className="container-fluid body-cadastro telaCarrinho">
                <div className="row justify-content-center">
                    <Header />
                    <div className="container">
                        <div className="row section-cadastro">
                            <div className="col-sm ">
                                <p className="pNomeCarrinho1">Meu Carrinho</p>
                                <div className="modal-cadastroCarrinho d-block">
                                    <div className="row">
                                        <div className="col-4 imagem">
                                            <img></img>
                                        </div>
                                        <div className="col-8 dadosCarrinho">
                                            <p className="pDadosCarrinho">Nike Jordan Fly Black Edition</p>
                                            <p className="pDadosCarrinho">Tênis espetacular desenvolvido com a melhor tecnologia do mercado, utilizando couro de cabra cega.</p>
                                            <div className="mb-1">
                                                <span className="spanTamanho">Tamanho: </span>
                                                <select name="tamanho">
                                                    <option value={36}>36</option>
                                                    <option value={37}>37</option>
                                                    <option value={38}>38</option>
                                                    <option value={39}>39</option>
                                                    <option value={40}>40</option>
                                                    <option value={41}>41</option>
                                                    <option value={42}>42</option>
                                                    <option value={43}>43</option>
                                                    <option value={44}>44</option>
                                                    <option value={45}>45</option>
                                                </select>
                                            </div>
                                            <span className="spanTamanho">Quantidade: </span>
                                            <input size={1}></input>
                                            <div className="container mt-2">
                                                <div className="row">
                                                    <div className="col-sm"></div>
                                                    <div className="col-sm"></div>
                                                    <div className="col-sm">
                                                        <span className="spanTamanho">R$ {"1.998,90"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <p className="pNomeCarrinho1"></p>
                                <div className="modal-cadastroCarrinho1">
                                    <div className="container">
                                        <p className="tagPCarrinho mb-1">Endereço de entrega</p>
                                        <input className="inputEnderecoCarrinho mb-1"></input>
                                        <p className="tagPCarrinho mb-1">Observações</p>
                                        <input className="inputEnderecoCarrinho mb-1"></input>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm row teste">
                                                <p className="tagPDivCarrinho">Subtotal</p>
                                                <p className="tagPDivCarrinho">Descontos</p>
                                                <p className="tagPDivCarrinho">Cupom</p>
                                                <p className="tagPDivCarrinho">Valor Total</p>
                                            </div>
                                            <div className="col-sm row ">
                                                <p className="tagPDivCarrinho">{"R$ 0,00"}</p>
                                                <p className="tagPDivCarrinho">{"R$ 0,00"}</p>
                                                <p><input className="inputEnderecoCarrinho2"></input></p>
                                                <p className="tagPDivCarrinho">{"R$ 0,00"}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-center">
                                            <div className="col-sm-6">
                                                <button type="submit" className="mt-3 btn-login col-sm-12" onClick={""}>
                                                    <span className="btn-cadastrarCarrinho">FINALIZAR</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row text-center mt-3">
                                            <div className="col-sm-12">
                                                <a href="/home" className="spanCadastrarCarrinho">VOLTAR PARA AS COMPRAS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}