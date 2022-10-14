import React, { useState } from "react";
import "./Header.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
    const [logado, setLogado] = useState(1);
    const [pesquisa, setPesquisa] = useState("");

    const teste = () => {
        if (pesquisa.trim() !== "") {
            console.log(pesquisa)
        } else {
            console.log("erro")
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light backgroundHeader">
            <div className="container-fluid backgroundHeader">
                <a className="navbar-brand" href="#"><img src="images/logo.png" className=" w-20" width={85}></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="col-sm ms-3 justify-content-center">
                        <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link navHeader linkTelaInicial" aria-current="page" href="#">AIR JORDAN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navHeader linkTelaInicial" aria-current="page" href="#">CLÁSSICOS</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm  ms-3 justify-content-end">
                        <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end input-group">
                                <li className="nav-item">
                                    <a className="nav-link buttonCarrinho" role="button" >
                                        <BsFillCartFill size={26} color="black" />
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle form-control buttonLogin" role="button" id="navbarDropdown"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsFillPersonFill size={26} color="black" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" role="button">Meus Dados</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" role="button">Sair</a></li>
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
        </nav >
    );
}

export default Header; 