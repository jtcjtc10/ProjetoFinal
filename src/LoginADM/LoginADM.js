import React from "react";
import './loginadm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import HeaderADM from "../Header/HeaderADM";
import Footer from "../Footer/Footer";

export default function LoginADM() {
    const [tLogin, setTxtLogin] = React.useState("");
    const [tPassword, setTxtPassword] = React.useState("");

    const form = {        
        email_usuario: tLogin,        
        senha_usuario: tPassword
    }

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
        axios.post("http://localhost:8080/api/loginadm", {tLogin, tPassword})
            .then((response) => {                
                if(response.data){
                    window.location.href="/relatorio"                    
                    window.localStorage.setItem("logado", true)    
                    window.localStorage.setItem("idUsuario", response.data)                                  
                }else if(!response.data){
                    MySwal.fire({
                        title: 'Atenção!',
                        text: 'Os dados inseridos estão incorretos!',
                        icon: 'error'
                    });
                    window.localStorage.removeItem("logado")
                    window.localStorage.removeItem("idUsuario") 
                }
            })     
            .catch((error) => {
                console.log(error)
        })          
    }

    return (
        <>
            <div className="container-fluid bg-login-adm">
                <div className="row justify-content-center">
                    <HeaderADM />                    
                    <div className="row justify-content-center align-items-center section-login-adm">
                        <div className="col-sm-8 col-md-6 col-lg-5 modal-login1 text-center">
                            <h1 className="titulo-login">LOGIN ADMINISTRATIVO</h1>
                            <form id="login_conta">
                                <div className="row mb-3 mt-3 justify-content-center">
                                    <label for="login" className="col-sm-10 col-form-label label-login">Usuário</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control input-login1" id="login"
                                            onChange={(e) => setTxtLogin(e.target.value)} value={tLogin} placeholder="E-mail" />
                                    </div>
                                </div>
                                <div className="row mb-3 justify-content-center">
                                    <label for="senha" className="col-sm-10 col-form-label label-login">Senha</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control input-login1" id="senha"
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
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}