import React from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const [tLogin, setTxtLogin] = React.useState("");
    const [tPassword, setTxtPassword] = React.useState("");

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
        <div class="container-fluid">
            <div class="row justify-content-center align-items-center section-login">
                <div class="col-lg-4 col-md-6 col-sm-8 modal-login text-center">
                    <h1 class="titulo-login">LOGIN</h1>
                    <form id="login_conta">
                        <div class="row mb-3 mt-3 justify-content-center">
                            <label for="login" class="col-sm-10 col-form-label label-login">Usuário</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control input-login" id="login" placeholder="E-mail"/>
                            </div>
                        </div>
                        <div class="row mb-3 justify-content-center">
                            <label for="senha" class="col-sm-10 col-form-label label-login">Senha</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control input-login" id="senha" placeholder="Senha"/>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-sm-10">
                                <button type="submit" class="mt-3 btn-login col-sm-12">
                                    <span class="btn-texto-login">ENTRAR</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    <a href="#" class="esqueci-senha-login">Esqueci minha senha</a>
                    <a href="register.html" class="cadastre-se-login">Não tem uma conta? Cadastre-se já!</a>
                </div>
            </div>
        </div>
    )
}