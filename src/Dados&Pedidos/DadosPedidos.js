import React, { useState } from "react";
import "./DadosPedidos.css";
import "../Cadastro/Cad.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Cadastro() {
    const [tNome, setTxtNome] = React.useState("");
    const [tCpf, setTxtCpf] = React.useState("");
    const [tRg, setTxtRg] = React.useState("");
    const [tEndereco, setTxtEndereco] = React.useState("");
    const [tEmail, setTxtEmail] = React.useState("");
    const [tTelefone, setTxtTelefone] = React.useState("");
    const [tSenha, setTxtSenha] = React.useState("");
    const [tConfirmSenha, setTxtConfirmSenha] = React.useState("");

    const MySwal = withReactContent(Swal);

    const verificaCadastro = (e) => {
        e.preventDefault();
        console.log(tNome, tCpf, tRg, tEndereco, tEmail, tTelefone, tSenha, tConfirmSenha);

        if (tNome === "" || tCpf === "" || tRg === "" || tEndereco === "" || tEmail === "" || tTelefone === "" || tSenha === "" || tConfirmSenha === "") {
            MySwal.fire({
                title: 'Atenção!',
                text: 'Você deve preencher todos os campos.',
                icon: 'error'
            });
        } else if (tSenha != tConfirmSenha) {
            MySwal.fire({
                title: 'Atenção!',
                text: 'Senhas diferentes. Tente novamente!',
                icon: 'warning'
            });
        } else {
            MySwal.fire({
                title: 'Usuário cadastrado!',
                text: 'Credenciais verificadas com sucesso.',
                icon: 'success',
                allowEscapeKey: false,
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "login.html";
                }
            });
        }

    }
    return (
        <>

            <div className="container-fluid body-cadastro">
                <div className="row justify-content-center">
                    <Header/>
                    <div className="row justify-content-center align-items-center section-cadastro">
                        <div className="col-lg-5 col-md-6 col-sm-10 modal-cadastro">
                            <h1 className="titulo-login2">Meus Dados</h1>
                            {/* <p>Por favor, preencha os dados abaixo para completar seu cadastro!</p> */}
                            <form id="registro">
                                <div className="row col-sm-12 ms-1 mb-3 justify-content-center">
                                    <div className="row col-sm-6 justify-content-center">
                                        <div className="row mb-2 mt-3 justify-content-center">
                                            <label for="nome" className="col-sm-12 col-form-label label-cadastro">Nome</label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-cadastro" id="nome"
                                                    onChange={(e) => setTxtNome(e.target.value)} value={tNome} placeholder="Nome" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="cpf" className="col-sm-12 col-form-label label-cadastro">CPF</label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-cadastro" id="cpf"
                                                    onChange={(e) => setTxtCpf(e.target.value)} value={tCpf} placeholder="CPF" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="rg" className="col-sm-12 col-form-label label-cadastro">RG</label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-cadastro" id="rg"
                                                    onChange={(e) => setTxtRg(e.target.value)} value={tRg} placeholder="RG" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-sm-6 justify-content-center">
                                        <div className="row mb-2 mt-3 justify-content-center">
                                            <label for="email" className="col-sm-12 col-form-label label-cadastro">E-mail</label>
                                            <div className="col-sm-12">
                                                <input type="email" className="form-control input-cadastro" id="email"
                                                    onChange={(e) => setTxtEmail(e.target.value)} value={tEmail} placeholder="E-mail" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="endereco" className="col-sm-12 col-form-label label-cadastro">Endereço</label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-cadastro" id="endereco"
                                                    onChange={(e) => setTxtEndereco(e.target.value)} value={tEndereco} placeholder="Endereço" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="telefone" className="col-sm-12 col-form-label label-cadastro">Telefone</label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-cadastro" id="telefone"
                                                    onChange={(e) => setTxtTelefone(e.target.value)} value={tTelefone} placeholder="Telefone" />
                                            </div>
                                        </div>
                                        {/* <div className="row mb-2 justify-content-center">
                                            <label for="senha" className="col-sm-12 col-form-label label-cadastro">Senha</label>
                                            <div className="col-sm-12">
                                                <input type="password" className="form-control input-cadastro" id="senha"
                                                    onChange={(e) => setTxtSenha(e.target.value)} value={tSenha} placeholder="Senha" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="confirmarSenha" className="col-sm-12 col-form-label label-cadastro">Confirmar
                                                Senha</label>
                                            <div className="col-sm-12">
                                                <input type="password" className="form-control input-cadastro" id="confirmarSenha"
                                                    onChange={(e) => setTxtConfirmSenha(e.target.value)} value={tConfirmSenha} placeholder="Confirmar senha" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-sm-6">
                                        <button type="submit" className="mt-3 btn-login col-sm-12" onClick={verificaCadastro}>
                                            <span className="btn-cadastrar">ATUALIZAR DADOS</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-10 modal-cadastro">
                            <h1 className="titulo-login2">Meus Pedidos</h1>                            
                            <div className="container ">
                                <div className="row rowPedidos">
                                    <div className="col-sm">
                                        <p className="pPedidos">Pedido: <small>{123456}</small></p>
                                    </div>   
                                    <div className="col-sm">
                                        <p className="pPedidos">Nº itens: <small>{2}</small></p>                                        
                                    </div>   
                                    <div className="col-sm">
                                        <p className="pPedidos">Status: <small className="tagSmall">Aprovado</small></p>
                                    </div>   
                                </div>
                                <div className="row rowPedidos">
                                    <div className="col-sm">
                                        <p className="pPedidos">Entrega: <small>A caminho</small></p>
                                    </div>                                      
                                    <div className="col-sm">
                                        <p className="pPedidos">Endereço: <small>Rua das Mercês, 856, Prado, Belo Horizonte, MG</small></p>
                                    </div>   
                                </div>
                                <hr></hr>                                
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}