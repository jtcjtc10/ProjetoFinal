import React, { useState, useEffect } from "react";
import "./Header.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header(props) {
    const [logado, setLogado] = useState();
    // const [pesquisa, setPesquisa] = useState("");

    // const teste1 = () => {
    //     console.log(props.login)
    // }

    const saida = () => {
        console.log("saiu")
        props.logadoFunc(0)
        window.localStorage.setItem("logado", false)
        setLogado(0)
        window.location.href="/"
        window.localStorage.removeItem("logado")
        window.localStorage.removeItem("idUsuario") 
    }

    useEffect(() => {
        if(props.login == 1){
            setLogado(1)
        }else{
            setLogado(0)
        }
    }, [saida])

    // const teste = () => {
    //     if (pesquisa.trim() !== "") {
    //         console.log(pesquisa)
    //     } else {
    //         console.log("erro")
    //     }
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light backgroundHeader">
            {logado == 1 && 
                <div className="container-fluid backgroundHeader">
                    <div className="col-sm">
                        <Link to={"/"}>
                            <a className="navbar-brand" href="#"><img src="images/logo.png" className=" w-20" width={85}></img></a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* <button onClick={() => {teste1()}}>teste</button> */}
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="col-sm ms-3 justify-content-center">
                        <ul className="navbar-nav mb-2 mb-lg-0 justify-content-start">
                        <li className="nav-item">
                                <a className="nav-link navHeader linkTelaInicial" aria-current="page" href="#classicSection">CLÁSSICOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navHeader linkTelaInicial" aria-current="page" href="#jordanSection">AIR JORDAN</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <div className="col-sm ms-3 justify-content-center">
                            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-start">
                                <li className="nav-item">
                                    <a className="nav-link navHeader linkTelaInicial" aria-current="page" href="#classicSection">CLÁSSICOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navHeader linkTelaInicial" aria-current="page" href="#jordanSection">AIR JORDAN</a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-sm  ms-3 justify-content-end">
                            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end input-group">
                                <li className="nav-item">
                                    <Link to={"/carrinho"}>
                                        <a className="nav-link buttonCarrinho" role="button" >
                                            <BsFillCartFill size={26} color="black" />
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle form-control buttonLogin" role="button" id="navbarDropdown"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsFillPersonFill size={26} color="black" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <Link to={"/dados_pedidos"} className="linkPessoa">
                                            <li><a className="dropdown-item" role="button">Meus Dados</a></li>
                                        </Link>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" role="button" onClick={() => {saida()}}>Sair</a></li>
                                    </ul>
                                </li>
                                {/* 
                            ----------------BARRA DE PESQUISA----------------
                            <li className="nav-item">
                                <input className="inputDePesquisa" type="text" name="search" id="search" placeholder="Pesquisar" onChange={(e) => { setPesquisa(e.target.value) }}></input>
                                <button className="buttonDePesquisa" type="" onClick={() => { teste() }}><BsSearch size={20} /></button>
                            </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
            {logado == 0 &&
                <div className="container-fluid backgroundHeader">
                    <div className="col-sm">
                        <Link to={"/"}>
                            <a className="navbar-brand" href="#"><img src="images/logo.png" className=" w-20" width={85}></img></a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* <button onClick={() => {teste1()}}>teste</button> */}
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col-sm ms-3 justify-content-center">
                            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-start">
                                <li className="nav-item">
                                    <a className="nav-link navHeader linkTelaInicial" aria-current="page" href="#classicSection">CLÁSSICOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navHeader linkTelaInicial" aria-current="page" href="#jordanSection">AIR JORDAN</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm  ms-3 justify-content-end">
                            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end input-group">
                                <li className="nav-item">
                                    {/* <Link to={"/carrinho"}>
                                        <a className="nav-link buttonCarrinho" role="button" >
                                            <BsFillCartFill size={26} color="black" />
                                        </a>
                                    </Link> */}
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={"/login"}>
                                        <a className="nav-link form-control buttonLogin" role="button" id="navbarDropdown">
                                            <BsFillPersonFill size={26} color="black" />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </nav >
    );
}

export default Header; 