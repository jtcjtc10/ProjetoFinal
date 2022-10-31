import React, { useState, useEffect } from "react";
import "./DadosPedidos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";

export default function DadosPedidos() {
    
    const [tNome, setTxtNome] = React.useState("");
    const [tCpf, setTxtCpf] = React.useState("");
    const [tRg, setTxtRg] = React.useState("");
    const [tEndereco, setTxtEndereco] = React.useState("");
    const [tEmail, setTxtEmail] = React.useState("");
    const [tTelefone, setTxtTelefone] = React.useState("");
    const [arrayPedidos, setArrayPedidos] = useState([]);
    let objPedido = {};  
    let arrayBanco = [];

    const [logado, setLogado] = useState();

    const changeLogado = (props) => {
        if(props === 0){
            console.log("changeLogado igual a 0")
            setLogado(0)
        }
    }

    useEffect(() => {    
        if (window.localStorage.getItem("logado") == "true") {
            setLogado(1)
        } else if(window.localStorage.getItem("logado") == "false"){
            setLogado(0)
        }
    }, [])

    const MySwal = withReactContent(Swal);
    
    const form = {
        nome_usuario: tNome,
        cpf_usuario: tCpf,
        rg_usuario: tRg,
        email_usuario: tEmail,
        endereco_usuario: tEndereco,
        telefone_usuario: tTelefone
    };
    const [dados, setDados] = React.useState("");


    React.useEffect(() => {
        axios.get("http://localhost:8080/api/dados/"+window.localStorage.getItem("idUsuario"))
        .then((response) => {
            setDados(response.data); 
        }).catch((error) =>{ 
            console.log(error) 
        });
    }, []); 

  
    React.useEffect(() => {
        axios.get("http://localhost:8080/api/dadospedido/"+window.localStorage.getItem("idUsuario"))
        .then((response) => {
            meuspedidos(response.data)                                
        }).catch((error) =>{ 
            console.log(error) 
        });
    }); 

    const meuspedidos = (data) => {
        for (let i = 0; i < data.length; i++) {
            objPedido = {
                codigoPedido: data[i][0],
                numeroPedido: data[i][1],
                idUsario: data[i][2],
                quantPedido: data[i][3],
                endPedido: data[i][4],
                valorPedido: data[i][5],
                dataPedido: data[i][6]                
            }         
            arrayBanco.push(objPedido);
        }           
        setArrayPedidos(arrayBanco);  
    }

    const verificaDados = (e) => {
        e.preventDefault();
        
        if (tNome == "" || tEndereco == "" || tEmail == "" || tTelefone == "") {            
            MySwal.fire({
                title: 'Atenção!',
                text: 'Você deve preencher todos os campos.',
                icon: 'error'
            });
        } else if(tNome === dados.nome_usuario && tEndereco === dados.endereco_usuario && tEmail === dados.email_usuario && tTelefone === dados.telefone_usuario){
            MySwal.fire({
                title: 'Atenção!',
                text: 'Os dados permareceram os mesmos.',
                icon: 'warning'
            });
        } else{
            axios.put("http://localhost:8080/api/alteracao/"+window.localStorage.getItem("idUsuario"),form)
            .then((response) => {
                console.log(response.data);
                if(response.data === true){
                    MySwal.fire({
                        title: 'Dados alterados!',
                        text: 'Credenciais verificadas com sucesso.',
                        icon: 'success',
                        allowEscapeKey: false,
                        allowOutsideClick: false
                    }).then((result) => {
                        if(result.isConfirmed){
                            window.location.href= "http://localhost:3000/dados_pedidos";
                        }
                    });         
                }else{
                    MySwal.fire({
                        title: 'Email inválido!',
                        text: 'O email inserido já se encontra sendo utilizado!',
                        icon: 'error',
                        allowEscapeKey: false,
                        allowOutsideClick: false
                    })                }
            }).catch((error) =>{
                console.log(error)
            });
        }
    } 

    return (
        <> 
            <div className="container-fluid bg-meus-dados">
                <div className="row justify-content-center">
                    <Header login={logado} logadoFunc={changeLogado}/>
                    <div className="row justify-content-center section-meus-dados">
                        <div className="col-lg-5 col-md-8 col-sm-10 modal-meus-dados">
                            <h1 className="titulo-meus-dados">Meus Dados</h1>                            
                            <form id="registro">
                                <div className="row col-sm-12 ms-1 mb-3 justify-content-center">
                                    <div className="row col-sm-6 justify-content-center">
                                        <div className="row mb-2 mt-3 justify-content-center">
                                            <label for="nome" className="col-sm-12 col-form-label label-meus-dados">Nome</label>
                                            <h6>{dados.nome_usuario}</h6>
                                            <div className="col-sm-12">  
                                                <input type="text" className="form-control input-meus-dados" id="nome"
                                                onChange={(e) => setTxtNome(e.target.value)} value={tNome} placeholder="Alterar nome" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="cpf" className="col-sm-12 col-form-label label-meus-dados">CPF</label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-meus-dados" id="cpf"
                                                    onChange={(e) => setTxtCpf(e.target.value)} value={dados.cpf_usuario} placeholder="CPF" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="rg" className="col-sm-12 col-form-label label-meus-dados">RG</label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-meus-dados" id="rg"
                                                    onChange={(e) => setTxtRg(e.target.value)} value={dados.rg_usuario} placeholder="RG" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-sm-6 justify-content-center">
                                        <div className="row mb-2 mt-3 justify-content-center">
                                            <label for="email" className="col-sm-12 col-form-label label-meus-dados">E-mail</label>
                                            <h6>{dados.email_usuario}</h6>
                                            <div className="col-sm-12">
                                                <input type="email" className="form-control input-meus-dados" id="email"
                                                    onChange={(e) => setTxtEmail(e.target.value)} value={tEmail} placeholder="Alterar e-mail" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="endereco" className="col-sm-12 col-form-label label-meus-dados">Endereço Residencial</label>
                                            <h6> {dados.endereco_usuario}</h6>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control input-meus-dados" id="endereco"
                                                    onChange={(e) => setTxtEndereco(e.target.value)} value={tEndereco} placeholder="Alterar endereço" />
                                            </div>
                                        </div>
                                        <div className="row mb-2 justify-content-center">
                                            <label for="telefone" className="col-sm-12 col-form-label label-meus-dados">Telefone</label>
                                            <h6> {dados.telefone_usuario}</h6>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control input-meus-dados" id="telefone"
                                                    onChange={(e) => setTxtTelefone(e.target.value)} value={tTelefone} placeholder="Alterar telefone" />
                                            </div>
                                        </div>                                        
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
                        <h1  className="titulo-meus-dados">Meus Pedidos</h1> 
                        {arrayPedidos.map((Pedido, index) => {
                            return  (
                            <div key={index}>                                                    
                                <div className="row rowPedidos">
                                    <div className="col-sm">
                                        <p className="tPedidos">Pedido: <small className="pPedidos">{Pedido.numeroPedido}</small></p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="tPedidos">Nº itens: <small className="pPedidos">{Pedido.quantPedido}</small></p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="tPedidos">Status: <small className="tagSmall">Aprovado</small></p>
                                    </div>
                                </div>
                                <div className="row rowPedidos">
                                    <div className="col-sm-4">
                                        <p className="tPedidos">Entrega: <small className="pPedidos">A caminho</small></p>
                                    </div>
                                    <div className="col-sm">
                                        <p className="tPedidos">Endereço de Entrega: <small className="pPedidos">{Pedido.endPedido}</small></p>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}