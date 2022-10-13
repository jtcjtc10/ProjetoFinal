import React from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BiLock, BiEnvelope, BiRightArrowAlt } from "react-icons/bi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BsAlignTop } from "react-icons/bs";

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
                if (result.isConfirmed) {
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

    const verifyLogin = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "txtLogin": "login",
            "txtPassword": "gizpitta"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/login", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const entrar = () => {
        let formData = new FormData();
        formData.append('txtLogin', tLogin.replace(/ /g, ''));
        formData.append('txtPassword', tPassword.replace(/ /g, ''));

        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
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
                                        <button type="button" className="mt-3 btn-login col-sm-12" onClick={verifyLogin}>
                                            <span className="btn-texto-login">ENTRAR</span>
                                            {/*<BiRightArrowAlt 
                                        color={"white"}
                                        size={24}
                                    /> */}
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <a href="#" className="esqueci-senha-login">Esqueci minha senha</a>
                            <a href="http://localhost:3000/cadastro" className="cadastre-se-login">Não tem uma conta? Cadastre-se já!</a>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}