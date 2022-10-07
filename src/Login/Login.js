import React from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Login() {
    const [tLogin, setTxtLogin] = React.useState("");
    const [tPassword, setTxtPassword] = React.useState("");

    const MySwal = withReactContent(Swal);
    
    const verificaEntrada = (e) => { 
        e.preventDefault();
        console.log(tLogin, tPassword);

        if (tLogin === "" || tPassword === "") {
            MySwal.fire({
                title: 'Atenção!',
                text: 'Você deve preencher todos os campos.',
                icon: 'error'
            });
        } else if (tLogin != "gizpitta@gmail.com" || tPassword != "gizpitta") {
            MySwal.fire({
                title: 'Atenção!',
                text: 'Credenciais inválidas.',
                icon: 'warning'
            });
        } else {
            MySwal.fire({
                title: 'Bem vindo de volta!',
                text: 'Credenciais verificadas com sucesso.',
                icon: 'success',
                allowEscapeKey: false,
                allowOutsideClick: false
            }).then((result) => {
                if(result.isConfirmed){
                    window.location.href = "principal.html";
                }
            });
        }
        /*MySwal.fire({
        title: <p>Hello World</p>,
        didOpen: () => {
            // `MySwal` is a subclass of `Swal` with all the same instance & static methods
            MySwal.showLoading()
        },
        }).then(() => {
        return MySwal.fire(<p>Shorthand works too</p>)
        })*/
    }

    const entrar = () => {
        let formData = new FormData();
        formData.append('txtLogin', tLogin.replace(/ /g, ''));
        formData.append('txtPassword', tPassword.replace(/ /g, ''));

        fetch("link com a verificação no banco aqui", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            },
            body: FormData
        }).then(response => response.json()).then((responseJson) => {
            if (!responseJson.success) {
                alert("Usuário e/ou senha incorreto!");
            } else {
                window.location.href("https://www.nike.com.br");
            }
        });
    }

    return (
        <>
        <Header/>
        <div className="container-fluid ">
            <div className="row justify-content-center align-items-center section-login">
                <div className="col-lg-4 col-md-6 col-sm-8 modal-login text-center">
                    <h1 className="titulo-login">LOGIN</h1>
                    <form id="login_conta">
                        <div className="row mb-3 mt-3 justify-content-center">
                            <label for="login" className="col-sm-10 col-form-label label-login">Usuário</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control input-login" id="login" 
                                onChange={(e) => setTxtLogin(e.target.value)} value={tLogin} placeholder="E-mail"/>
                            </div>
                        </div>
                        <div className="row mb-3 justify-content-center">
                            <label for="senha" className="col-sm-10 col-form-label label-login">Senha</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control input-login" id="senha" 
                                onChange={(e) => setTxtPassword(e.target.value)} value={tPassword} placeholder="Senha"/>
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
                    <a href="register.html" className="cadastre-se-login">Não tem uma conta? Cadastre-se já!</a>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}