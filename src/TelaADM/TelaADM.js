import React, { useState, useEffect } from "react";
import "./TelaADM.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";

export default function TelaADM() {
    
    const [tNome, setTxtNome] = React.useState("");
    const [tCpf, setTxtCpf] = React.useState("");
    const [tRg, setTxtRg] = React.useState("");
    const [tEndereco, setTxtEndereco] = React.useState("");
    const [tEmail, setTxtEmail] = React.useState("");
    const [tTelefone, setTxtTelefone] = React.useState("");
    const [tSenha, setTxtSenha] = React.useState("");
    const [tConfirmSenha, setTxtConfirmSenha] = React.useState("");

    const [logado, setLogado] = useState();

    const changeLogado = (props) => {
        if(props === 0){
            console.log("changeLogado igual a 0")
            setLogado(0)
        }
    }

    useEffect(() => {    
        console.log("testando useeffect")    
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
        axios.get("http://localhost:8080/dados/"+window.localStorage.getItem("idUsuario"))
            .then((response) => {
                setDados(response.data); 
            }).catch((error) =>{ 
                console.log(error) 
            });
            // setTxtNome(dados.nome_usuario);
            // setTxtCpf(dados.cpf_usuario);
            // setTxtRg(dados.rg_usuario);
            // setTxtEmail(dados.email_usuario);
            // setTxtEndereco(dados.endereco_usuario);
            // setTxtTelefone(dados.telefone_usuario);
        
    }, []); 

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
            axios.put("http://localhost:8080/alteracao/"+window.localStorage.getItem("idUsuario"),form)
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
                }
            }).catch((error) =>{
                console.log(error)
            });
        }
    }
 

    return (
        <> 
            <div className="container-fluid bg-meus-dados2">
                <div className="row justify-content-center">              
                    <div className="row justify-content-center section-meus-dados">
                        <div className="col-lg-5 col-md-8 col-sm-10 modal-meus-dados">
                        <h1 className="titulo-meus-dados2">Relatorio De Vendas</h1>                            
                            <form id="registro">
                                <div className="row col-sm-12 ms-1 mb-3 justify-content-center">                                                                                                      
                                    <div>
                                    <h1 className="titulo-meus-dados2">Selecione o periodo</h1>
                                    <input className="form-control" type="date"/>
                                    </div>
                                    <div className="in2" Style="margin-top: 2%">
                                    <h1 className="titulo-meus-dados2">Selecione o periodo</h1>
                                    <input className="form-control" type="date"/>
                                    </div>
                               
                                </div>
                                <div className="row justify-content-center text-center">
                                    <div className="col-sm-6">
                                        <button type="submit" className="mt-3 btn-atualizar-dados col-sm-12" onClick={verificaDados}>
                                            <span className="btn-texto-atualizar-dados">Gerar Relatorio</span>
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