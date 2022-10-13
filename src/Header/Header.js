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
        if(pesquisa.trim() !== ""){
            console.log(pesquisa)            
        }else{
            console.log("erro")
        }
    }

    return (
        <div class="container-fluid backgroudHeader">
            <div class="row">
                <div class="col-sm">
                    <img src="images/logo.png" className=" w-20"></img>
                </div>
                <div class="col-sm">
                {logado == 1 &&
                    <div className="d-flex justify-content-center">
                        <a class="nav-link navHeader linkTelaInicial" href="#">Air Jordan</a>
                        <a class="nav-link navHeader linkTelaInicial" href="#">Clássicos</a>                                
                    </div>}
                </div>
                {logado == 1 &&
                <div class="col-sm">
                    <div className="d-flex justify-content-end">
                        <input className="inputDePesquisa" type="text" name="search" id="search" placeholder="Pesquisar" onChange={(e) => {setPesquisa(e.target.value)}}></input>
                        <button className="buttonDePesquisa" type="" onClick={() => {teste()}}><BsSearch size={20} /></button> 
                        <div class="dropdown">
                            <button class="btn btn-secondary buttonCarrinho" type="button" >
                                <BsFillCartFill size={30} color="black"/>
                            </button>                            
                        </div>
                        <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle buttonLogin" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsFillPersonFill size={30} color="black"/>
                                </button>
                                <ul class="dropdown-menu">
                                <Link to="/dados_pedidos" className="linkPessoa">
                                    <li><button class="dropdown-item" type="button">Meus Dados</button></li>
                                </Link>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><button class="dropdown-item" type="button">Sair</button></li>                                
                                </ul>
                        </div>                        
                    </div>                    
                </div>
                }
            </div>
        </div>        
    );
}

export default Header; 