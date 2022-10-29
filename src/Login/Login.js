import React from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axios from "axios";

export default function Login() {
    const [tLogin, setTxtLogin] = React.useState("");
    const [tPassword, setTxtPassword] = React.useState("");   

    const MySwal = withReactContent(Swal);

    const verificaEntrada = (e) => {
        e.preventDefault();
       
        if (tLogin === "" || tPassword === "") {
            MySwal.fire({
                title: 'Atenção!',
                text: 'Você deve preencher todos os campos.',
                icon: 'error'
            });
        } else {
            entrar();
        }        
    }

    const entrar = () => {
        axios.post("http://localhost:8080/api/login", {tLogin, tPassword})
        .then((response) => {
            if(response.data){
                window.location.href="/"                    
                window.localStorage.setItem("logado", true)    
                window.localStorage.setItem("idUsuario", response.data)                                  
            }else if(!response.data){
                MySwal.fire({
                    title: 'Atenção!',
                    text: 'Os dados inseridos estão incorretos!',
                    icon: 'error'
                });
                setTxtPassword("")
                window.localStorage.removeItem("logado")
                window.localStorage.removeItem("idUsuario") 
            }
        }).catch((error) => {
            console.log(error)
        })          
    }

    return (
        <>
            <div className="container-fluid bg-login">
                <div className="row justify-content-center">
                    <Header />
                    <div className="row justify-content-center align-items-center section-login">
                        <div className="col-sm-8 col-md-6 col-lg-5 modal-login text-center">
                            <h1 className="titulo-login">LOGIN</h1>
                            <form id="login_conta">
                                <div className="row mb-3 mt-3 justify-content-center">
                                    <label for="login" className="col-sm-10 col-form-label label-login">Usuário</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control input-login" id="login"
                                            onChange={(e) => setTxtLogin(e.target.value)} value={tLogin} placeholder="E-mail" />
                                    </div>
                                </div>
                                <div className="row mb-3 justify-content-center">
                                    <label for="senha" className="col-sm-10 col-form-label label-login">Senha</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control input-login" id="senha"
                                            onChange={(e) => setTxtPassword(e.target.value)} value={tPassword} placeholder="Senha" />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-sm-10">
                                        <button type="button" className="mt-3 btn-login col-sm-12" onClick={verificaEntrada}>
                                            <span className="btn-texto-login">ENTRAR</span>                                            
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <a href="#" className="esqueci-senha-login">Esqueci minha senha</a>
                            <a href="http://localhost:3000/cadastro" className="cadastre-se-login">Não tem uma conta? Cadastre-se já!</a>
                            <a href="http://localhost:3000/loginADM" className="cadastre-se-login">É um Administrador? Clique Aqui.</a>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}