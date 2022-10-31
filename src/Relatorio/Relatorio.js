import React, { useState, useEffect } from "react";
import "./Relatorio.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "../Footer/Footer";
import axios from "axios";

export default function Relatorio(props) {
    const [logado, setLogado] = useState();
    const [tDataInicial, setTxtDataInicial] = React.useState("");
    const [tDataFinal, setTxtDataFinal] = React.useState("");

    const changeLogado = (props) => {
        if (props === 0) {
            console.log("changeLogado igual a 0")
            setLogado(0)
        }
    }

    const saida = () => {
        props.logadoFunc(0)
        window.localStorage.setItem("logado", false)
        setLogado(0)
        window.localStorage.removeItem("logado")
        window.localStorage.removeItem("idUsuario")
        MySwal.fire({
            title: 'Aguardamos seu retorno!',
            text: 'Agradecemos por utilizar a plataforma.',
            icon: 'success',
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then(() => {
            setTimeout(() => {
                window.location.href = "/"
            }, 1000)
        })
    }

    useEffect(() => {
        if (props.login == 1) {
            setLogado(1)
        } else {
            setLogado(0)
        }
    }, [saida])

    useEffect(() => {
        console.log("testando useeffect")
        if (window.localStorage.getItem("logado") == "true") {
            setLogado(1)
        } else if (window.localStorage.getItem("logado") == "false") {
            setLogado(0)
        }
    }, [])

    const MySwal = withReactContent(Swal);
    const [dados, setDados] = React.useState("");

    React.useEffect(() => {
        axios.get("http://localhost:8080/api/dados/" + window.localStorage.getItem("idUsuario"))
            .then((response) => {
                setDados(response.data);
            }).catch((error) => {
                console.log(error)
            });

    }, []);

    const generateReport = () => {
        if (tDataInicial == "") {
            if (tDataFinal == "") {
                window.open('http://localhost:8080/api/report/1', '_blank');
            } else {
                MySwal.fire({
                    title: 'Atenção!',
                    text: 'Preencha o campo de data inicial.',
                    icon: 'warning'
                });
            }
        } else {
            if (tDataFinal == "") {
                var date = new Date();
                var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                setTxtDataFinal(current_date)
                var url = 'http://localhost:8080/api/reportFilter/2/' + tDataInicial + '/' + current_date
                window.open(url, '_blank')
            } else {
                const diffInMs = new Date(tDataFinal) - new Date(tDataInicial)
                const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
                if (diffInDays < 0) {
                    MySwal.fire({
                        title: 'Atenção!',
                        text: 'O campo Data Final precisa ser mais recente que a Data Inicial.',
                        icon: 'warning'
                    });
                } else {
                    window.open('http://localhost:8080/api/reportFilter/2/' + tDataInicial + '/' + tDataFinal, '_blank')
                }
            }
        }
    }


    return (
        <>
            <div className="container-fluid bg-relatorio">
                <div className="row justify-content-center">
                    <div className="row justify-content-center section-relatorio">
                        <div className="col-lg-5 col-md-8 col-sm-10 modal-relatorio">
                            <h1 className="titulo-relatorio">RELATÓRIO</h1>
                            <p className="text-center">Emita um relatório para controlar o fluxo de <br />pedidos do site!</p>
                            <div className="row col-sm-12 ms-1 mb-3 my-3 justify-content-center">
                                <div className="row col-sm-5 mx-1 my-3">
                                    <h1 className="subtitulo-relatorio">Data Inicial:</h1>
                                    <input className="form-control text-center" type="date" onChange={(e) => setTxtDataInicial(e.target.value)} value={tDataInicial} />
                                </div>
                                <div className="row col-sm-5 mx-1 my-3">
                                    <h1 className="subtitulo-relatorio">Data Final:</h1>
                                    <input className="form-control text-center" type="date" onChange={(e) => setTxtDataFinal(e.target.value)} value={tDataFinal} />
                                </div>

                            </div>
                            <div className="row justify-content-center text-center mt-3">
                                <div className="col-sm-6">
                                    <button type="button" className="mt-3 btn-relatorio col-sm-12" onClick={() => { generateReport() }}>
                                        <span className="btn-texto-relatorio">GERAR RELATÓRIO</span>
                                    </button>
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