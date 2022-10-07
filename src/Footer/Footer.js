import React from "react";
import "./Footer.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

function Footer() {
    return (
        <div class="container-fluid backgroudHeader">
            <div class="row">
                <div class="col-sm">
                    <img src="images/logo.png" className=" imgFooter w-15"></img>
                </div>
                <div class="col-sm">
                    <div className="d-flex justify-content-center">
                        <span className="spanTextFooter">
                            &copy;2022 XMarket. Todos os direitor reservados.
                        </span>                            
                    </div>
                </div>
                <div class="col-sm">
                                     
                </div>
            </div>
        </div>        
    );
}

export default Footer; 