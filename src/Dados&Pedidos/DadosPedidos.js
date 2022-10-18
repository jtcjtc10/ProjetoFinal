import React, { useState } from "react";
import "./DadosPedidos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function DadosPedidos() {
    const [tNome, setTxtNome] = React.useState("");
    const [tCpf, setTxtCpf] = React.useState("");
    const [tRg, setTxtRg] = React.useState("");
    const [tEndereco, setTxtEndereco] = React.useState("");
    const [tEmail, setTxtEmail] = React.useState("");
    const [tTelefone, setTxtTelefone] = React.useState("");
    const [tSenha, setTxtSenha] = React.useState("");
    const [tConfirmSenha, setTxtConfirmSenha] = React.useState("");

    const MySwal = withReactContent(Swal);

    const verificaDados = (e) => {
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

            <div className="container-fluid bg-meus-dados">
                <div className="row justify-content-center">
                    <Header />
                    <div className="row justify-content-center section-meus-dados">
                        <div className="col-lg-5 col-md-8 col-sm-10 modal-meus-dados">
                            <h1 className="titulo-meus-dados">Meus Dados</h1>
                            {/* <p>Por favor, preencha os dados abaixo para completar seu cadastro!</p> */}
                            <form id="registro">
                                <div className="row col-sm-12 ms-1 mb-3 justify-content-center">
                                    <div className="row col-sm-6 justify-content-center">
                                        <div className="row mb-2 mt-3 justify-content-center">
                                            <label for="nome" className="col-sm-12 col-form-label label-meus-dados">Nome</label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-meus-dados" id="nome"
                                                    onChange={(e) => setTxtNome(e.target.value)} value={tNome} placeholder="Nome" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="cpf" className="col-sm-12 col-form-label label-meus-dados">CPF</label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-meus-dados" id="cpf"
                                                    onChange={(e) => setTxtCpf(e.target.value)} value={tCpf} placeholder="CPF" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="rg" className="col-sm-12 col-form-label label-meus-dados">RG</label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-meus-dados" id="rg"
                                                    onChange={(e) => setTxtRg(e.target.value)} value={tRg} placeholder="RG" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-sm-6 justify-content-center">
                                        <div className="row mb-2 mt-3 justify-content-center">
                                            <label for="email" className="col-sm-12 col-form-label label-meus-dados">E-mail</label>
                                            <div className="col-sm-12">
                                                <input type="email" className="form-control input-meus-dados" id="email"
                                                    onChange={(e) => setTxtEmail(e.target.value)} value={tEmail} placeholder="E-mail" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="endereco" className="col-sm-12 col-form-label label-meus-dados">Endereço</label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-meus-dados" id="endereco"
                                                    onChange={(e) => setTxtEndereco(e.target.value)} value={tEndereco} placeholder="Endereço" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="telefone" className="col-sm-12 col-form-label label-meus-dados">Telefone</label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-meus-dados" id="telefone"
                                                    onChange={(e) => setTxtTelefone(e.target.value)} value={tTelefone} placeholder="Telefone" />
                                            </div>
                                        </div>
                                        {/* <div className="row mb-2 justify-content-center">
                                            <label for="senha" className="col-sm-12 col-form-label label-meus-dados">Senha</label>
                                            <div className="col-sm-12">
                                                <input type="password" className="form-control input-meus-dados" id="senha"
                                                    onChange={(e) => setTxtSenha(e.target.value)} value={tSenha} placeholder="Senha" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="confirmarSenha" className="col-sm-12 col-form-label label-meus-dados">Confirmar
                                                Senha</label>
                                            <div className="col-sm-12">
                                                <input type="password" className="form-control input-meus-dados" id="confirmarSenha"
                                                    onChange={(e) => setTxtConfirmSenha(e.target.value)} value={tConfirmSenha} placeholder="Confirmar senha" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="row justify-content-center text-center">
                                    <div className="col-sm-6">
                                        <button type="submit" className="mt-3 btn-atualizar-dados col-sm-12" onClick={verificaDados}>
                                            <span className="btn-texto-atualizar-dados">ATUALIZAR DADOS</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 col-md-8 col-sm-10 modal-meus-dados">
                            <h1 className="titulo-meus-dados">Meus Pedidos</h1>
                            <div className="row rowPedidos">
                                <div className="col-sm">
                                    <p className="tPedidos">Pedido: <small className="pPedidos">{123456}</small></p>
                                </div>
                                <div className="col-sm">
                                    <p className="tPedidos">Nº itens: <small className="pPedidos">{2}</small></p>
                                </div>
                                <div className="col-sm">
                                    <p className="tPedidos">Status: <small className="tagSmall">Aprovado</small></p>
                                </div>
                            </div>
                            <div className="row rowPedidos">
                                <div className="col-sm">
                                    <p className="tPedidos">Entrega: <small className="pPedidos">A caminho</small></p>
                                </div>
                                <div className="col-sm">
                                    <p className="tPedidos">Endereço: <small className="pPedidos">Rua das Mercês, 856, Prado, Belo Horizonte, MG</small></p>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}