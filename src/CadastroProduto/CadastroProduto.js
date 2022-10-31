import React from "react";
import "../CadastroProduto/CadProdut.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

import HeaderADM from "../Header/HeaderADM";
import Footer from "../Footer/Footer";

export default function CadastroProduto() {
    const [tNomeProduto, setTxtNomeProduto] = React.useState("");
    const [tTipoProduto, setTxtTipoProduto] = React.useState("");
    const [tDescricao, setTxtDescricao] = React.useState("");
    const [tPreco, setTxtPreco] = React.useState("");
    const [tTamanho, setTxtTamanho] = React.useState("");
    const [tQuantidade, setTxtQuantidade] = React.useState("");
    const [tImagem, setTxtImagem] = React.useState("");


    const form = {
        nome: tNomeProduto,
        tipo: tTipoProduto,
        descricao: tDescricao,
        preco: tPreco,
        tamanho: tTamanho,
        quantidade: tQuantidade,
        imagem: tImagem
    }

    const MySwal = withReactContent(Swal);

    const cadastrarProduto = (e) => {
        e.preventDefault();

        if (tNomeProduto === "" || tTipoProduto === "" || tDescricao === "" || tPreco === "" || tTamanho === "" || tQuantidade === "" || tImagem === "") {
            MySwal.fire({
                title: 'Atenção!',
                text: 'Você deve preencher todos os campos.',
                icon: 'error',
                allowEscapeKey: false,
                allowOutsideClick: false
            });
        } else {
            axios.post("http://localhost:8080/api/cadastroProduto", form)
                .then((response) => {
                    console.log(response.data)
                    if (response.data === true) {
                        MySwal.fire({
                            title: 'Produto cadastrado!',
                            icon: 'success',
                            allowEscapeKey: false,
                            allowOutsideClick: false
                        })
                    } else if (response.data === false) {
                        MySwal.fire({
                            title: 'Atenção!',
                            text: 'Esse produto já existe!',
                            icon: 'error'
                        });
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            // }
            // });
        }

    }
    return (
        <>
            <div className="container-fluid body-cadastro1">
                <div className="row justify-content-center">
                    <HeaderADM />
                    <div className="row justify-content-center align-items-center section-cadastro">
                        <div className="col-lg-6 col-md-8 col-sm-10 modal-cadastro1 text-center">
                            <h1 className="titulo-login">Cadastro de Produto</h1>
                            <p>Cadastre aqui o prduto desejado</p>
                            <form id="registro">
                                <div className="row col-sm-12 ms-1 mb-3 justify-content-center">
                                    <div className="row col-sm-6 justify-content-center">
                                        <div className="row mb-2 mt-3 justify-content-center">
                                            <label for="nomeProduto" className="col-sm-12 col-form-label label-cadastro1">Produto</label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-cadastro1" id="nomeProduto"
                                                    onChange={(e) => setTxtNomeProduto(e.target.value)} value={tNomeProduto} placeholder="Nome" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="tipoProduto" className="col-sm-12 col-form-label label-cadastro1">Tipo</label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-cadastro1" id="tipoProduto"
                                                    onChange={(e) => setTxtTipoProduto(e.target.value)} value={tTipoProduto} placeholder="Tipo" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="quantidade" className="col-sm-12 col-form-label label-cadastro1">Quantidade</label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-cadastro1" id="quanidade"
                                                    onChange={(e) => setTxtQuantidade(e.target.value)} value={tQuantidade} placeholder="Quantidade" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="descricao" className="col-sm-12 col-form-label label-cadastro1">Descrição </label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-cadastro1" id="descricao"
                                                    onChange={(e) => setTxtDescricao(e.target.value)} value={tDescricao} placeholder="Descrição" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row col-sm-6 justify-content-center">
                                        <div className="row mb-2 mt-3 justify-content-center">
                                            <label for="Preco" className="col-sm-12 col-form-label label-cadastro">Preço</label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-cadastro1" id="Preco"
                                                    onChange={(e) => setTxtPreco(e.target.value)} value={tPreco} placeholder="Preço" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="tamanho" className="col-sm-12 col-form-label label-cadastro1">Tamanho</label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-cadastro1" id="tamanho"
                                                    onChange={(e) => setTxtTamanho(e.target.value)} value={tTamanho} placeholder="Tamanho" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="tamanho" className="col-sm-12 col-form-label label-cadastro1">Imagem</label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-cadastro1" id="tamanho"
                                                    onChange={(e) => setTxtImagem(e.target.value)} value={tImagem} placeholder="URL da Imagem" />
                                            </div>
                                        </div>
                                        
            
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-sm-6">
                                        <button type="submit" className="mt-3 btn-login col-sm-12" onClick={() => {cadastrarProduto()}}>
                                            <span className="btn-cadastrar1">REGISTRAR PRODUTO</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}