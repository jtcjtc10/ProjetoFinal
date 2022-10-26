import React, { useState, useEffect } from "react";
import "../Cadastro/Cad.css";
import "./Carrinho.css";
import { BsFillTrashFill } from "react-icons/bs";
import { VscTrash } from "react-icons/vsc";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";

const MySwal = withReactContent(Swal);

export default function Cadastro() {
    const [logado, setLogado] = useState();
    const [arrayProdutos, setArrayProdutos] = useState([]);
    const [total, setTotal] = useState();
    const [endereco, setEndereco] = useState("")
    const [cupom, setCupom] = useState("")
    let idUsuario = window.localStorage.getItem("idUsuario");
    let objProduto = {};  
    let arrayBanco = [];
    let soma = 0

    const changeLogado = (props) => {
        if (props === 0) {
            console.log("changeLogado igual a 0")
            setLogado(0)
        }
    }

    const forNosTenis = (data) => {
        for (let i = 0; i < data.length; i++) {
            objProduto = {
                codigoProduto: data[i][0],
                nomeProduto: data[i][1],
                tamanhoProduto: data[i][2],
                precoProduto: data[i][3],
                quantidadeProduto: data[i][4],
                imagemProduto: data[i][5]
            }
            arrayBanco.push(objProduto);
        }
        setArrayProdutos(arrayBanco);        
    }

    const puxarProdutos = () => {
        axios.get("http://localhost:8080/produtoCarrinho/" + idUsuario)
            .then((response) => {                
                forNosTenis(response.data)  
                subtotal()              
            }).catch((error) => {
                console.log(error);
            })
    }

    const subtotal = () => {
        for (let i=0; i< arrayProdutos.length; i++){           
            soma = soma + parseFloat(arrayProdutos[i].precoProduto) * parseFloat(arrayProdutos[i].quantidadeProduto);            
        }
        setTotal(soma.toFixed(2));
    }

    useEffect(() => {
        if (window.localStorage.getItem("logado") == "true") {
            setLogado(1)
        } else if (window.localStorage.getItem("logado") == "false") {
            setLogado(0)
        }
    }, [])

    useEffect(() => {
        puxarProdutos();
    })

    const excluirItem = (idProduto) => {
        axios.delete("http://localhost:8080/deletar/" + idUsuario + "/" + idProduto)
        .then(() => {                
            MySwal.fire({
                title: 'Atenção!',
                text: 'Produto excluido com sucesso!',
                icon: 'success'
            });
            puxarProdutos();    
        }).catch((error) => {
            console.log(error);
        })
    }

    const finalizarCompra = () => {
        if(endereco == ""){
            MySwal.fire({
                title: 'Atenção!',
                text: 'Você deve preencher o endereço de entrega!',
                icon: 'warning'
            });
        } else if(endereco !== "" && cupom == ""){  
            MySwal.fire({
                title: 'Uhuuu!',
                text: 'Agradecemos pela compra. Volte Sempre!',
                icon: 'success'
            });
            setCupom("")            
        } else if(endereco !== "" && cupom !== ""){
            MySwal.fire({
                title: 'Que pena!',
                text: 'O cupom inserido é inválido!',
                icon: 'warning'
            })  
            setCupom("")            
        } else{
            MySwal.fire({
                title: 'Uhuuu!',
                text: 'Agradecemos pela compra. Volte Sempre!',
                icon: 'success'
            });
        }       
    }

    return (
        <>
            <div className="container-fluid bg-carrinho">
                <div className="row justify-content-center">
                    <Header login={logado} logadoFunc={changeLogado} />
                    <div className="row section-carrinho justify-content-center">
                        <div className="row col-sm-12">
                            <h1 className="titulo-carrinho">Meu Carrinho</h1>
                        </div>
                        <div className="row col-sm-12 col-md-12 col-lg-7 my-2 mx-1 d-grid gap-2 justify-content-center">
                            {arrayProdutos.map((produto, index) => {
                                return (
                                    <div className="modal-carrinho d-block">
                                        <div className="row justify-content-around my-1 mx-1">
                                            <div className="col-4 ms-1 mt-2 imagem-carrinho">
                                                <img className="imagem-carrinho" src={produto.imagemProduto} />
                                            </div>
                                            <div key={index} className="col-sm-8 col-md-8 col-lg-8 dados-carrinho">
                                                <div className="row">
                                                    <div className="col-11">
                                                        <p className="carrinho-titulo">{produto.nomeProduto}</p>
                                                    </div>
                                                    <div className="col-1">
                                                        <VscTrash className="trashIcon" size={26} color="black" onClick={() => { excluirItem(produto.codigoProduto) }} />
                                                    </div>
                                                </div>
                                                <p className="carrinho-desc">Tênis espetacular desenvolvido com a melhor tecnologia do mercado, utilizando couro de cabra cega.</p>
                                                <div className="mb-1">
                                                    <span className="span-carrinho-normal">Tamanho: {produto.tamanhoProduto}</span>                                                    
                                                </div>
                                                <span className="span-carrinho-normal">Quantidade: {produto.quantidadeProduto}</span>                                                
                                                <div className="row justify-content-end">
                                                    <div className="col-sm-5 text-end">
                                                        <span className="carrinho-titulo">R$ {(parseFloat(produto.precoProduto) * parseInt(produto.quantidadeProduto)).toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="row col-sm-12 col-md-12 col-lg-4 my-2 mx-1 justify-content-center">
                            <div className="modal-carrinhoDados">
                                <p className="p-carrinho my-1">Endereço de entrega</p>
                                <div className="col-sm-12">
                                    <input type="text" value={endereco} onChange={(e) => {setEndereco(e.target.value)}} className="form-control input-carrinho mb-3" />
                                </div>
                                <p className="p-carrinho mb-1">Observações</p>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control input-carrinho mb-1" />
                                </div>
                                <hr />
                                <div className="row justify-content-center">
                                    <div className="col-sm-12 row">
                                        <div className="col-sm-6">
                                            <p className="p-div-carrinho mb-0">Subtotal</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="p-div-carrinho">R$ {total}</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 row">
                                        <div className="col-sm-6">
                                            <p className="p-div-carrinho mb-0">Descontos</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="p-div-carrinho">{"R$ 0,00"}</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 row">
                                        <div className="col-sm-6">
                                            <p className="p-div-carrinho mb-0">Cupom</p>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-lg-6">
                                            <input placeholder="Insira seu cupom" maxLength={8} value={cupom} onChange={(e) => {setCupom(e.target.value)}} className="form-control input-carrinho2 mb-3" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 row">
                                        <div className="col-sm-6">
                                            <p className="p-div-carrinho mb-0">Valor Total</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="p-div-carrinho">R$ {total}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row justify-content-center text-center">
                                    <div className="col-sm-8 col-md-6 col-lg-8">
                                        <button type="submit" className="btn-finalizar col-sm-12" onClick={() => {finalizarCompra()}}>
                                            <span className="span-btn-finalizar">FINALIZAR</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="row text-center my-3">
                                    <a href="/" className="voltar-carrinho">VOLTAR PARA AS COMPRAS</a>
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