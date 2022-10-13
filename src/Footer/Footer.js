import React from "react";
import "./Footer.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

function Footer() {
    return (
        <div class="container-fluid backgroundFooter">
            <div class="row col-12">
                <div class="col-2">
                    <img src="images/logo.png" className=" imgFooter w-15"></img>
                </div>
                <div class="col-8">
                    <div className="d-flex justify-content-center">
                        <span className="spanTextFooter">
                            &copy;2022 XMarket. Todos os direitos reservados.
                        </span>                            
                    </div>
                </div>
                <div class="col-2">
                                     
                </div>
            </div>
        </div>        
    );
}

export default Footer; 