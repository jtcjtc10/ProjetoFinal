import React from "react";
import "../home/home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import Cards2 from "../Cards/Cards2";

 
export default function Home() {
    return (
        <>

            <div className="container-fluid body-home">
                <div className="row justify-content-center">
                    <Header/>
                    <div className=" main1">
                        <div className=" main1-1">
                        <img className="img1" src="/images/jordan1-crimson.png"  />
                        </div>
                        <div className=" main1-2">
                        <div className="text1">
                        <h2>Nike Air Jordan Retro On!</h2>
                        <h4>Cores Vivas estão no Nosso DNA</h4>
                        <h4>Conheça nosso modelos</h4>
                        </div>
                        </div>
                    </div>
                    <div>
                    <div id="classicSection" className="row justify-content-center align-items-center card1 ">
                    <Cards />
                    </div>
                    <div id="jordanSection" className="row justify-content-center align-items-center card2 ">
                    <Cards2 />
                    </div>
                    <div className=" main2">
                        <div className=" main1-1">
                        <img className="img1" src="/images/jordan1-crimson.png"  />
                        </div>
                        <div className=" main1-2">
                        <div className="text1">
                        <h2>Os Melhores Modelos!</h2>
                        <h4>Cores Vivas estão no Nosso DNA</h4>
                        <h4>Conheça nosso modelos</h4>
                        </div>
                        </div>
                    </div>

                    </div>                    
                    <Footer />
                </div>
            </div>
        </>
    )
}