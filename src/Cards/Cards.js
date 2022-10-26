
import { useEffect, useState, useRef } from 'react';
import './styles.css';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Cards() {
  const [tamanho, setTxtTamanho] = useState("");
  const [quantidade, setTxtQuantidade] = useState("");
  const [data, setData] = useState([]);
  const tamanhos = [];
  const quantidades = [];
  const [listaTamanhos, setListaTamanhos] = useState(tamanhos);
  const [listaQuantidades, setListaQuantidades] = useState(quantidades);
  const carousel = useRef(null);
  const [arrayDados, setArrayDados] = useState([])
  const dados = []
  let idUsuario = window.localStorage.getItem("idUsuario");
  const arrayObj = []
  let objDoArray = {}

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  const addCarrinho = (id, name) => {
    if (tamanho == "" || tamanho == undefined) {
      MySwal.fire({
        title: 'Por favor!',
        text: 'Informe o tamanho e quantidade a ser adquirida!',
        icon: 'warning'
      });
    } else {
      let arrayTeste = arrayDados.filter((i) => { return i })
      for (let i = 0; i < arrayTeste.length; i++) {
        objDoArray = {
          tamanho: arrayTeste[i][0],
          quantidade: arrayTeste[i][1]
        }
        arrayObj.push(objDoArray)
      }
      for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].tamanho == tamanho) {
          if (arrayObj[i].quantidade >= quantidade) {
            arrayObj[i].quantidade = arrayObj[i].quantidade - quantidade;

            axios.post("http://localhost:8080/addExisteCarrinho", { idUsuario, name, quantidade, tamanho })
              .then((response) => {
                if (response.data == true) {
                  MySwal.fire({
                    title: 'Parabéns!',
                    text: 'Produto adicionado ao carrinho de compras!',
                    icon: 'success'
                  });
                } else {
                  axios.post("http://localhost:8080/addCarrinho", { idUsuario, name, quantidade, tamanho })
                    .then((response) => {
                      console.log(response.data);
                      MySwal.fire({
                        title: 'Parabéns!',
                        text: 'Produto adicionado ao carrinho de compras!',
                        icon: 'success'
                      });
                    }).catch((error) => {
                      console.log(error);
                      MySwal.fire({
                        title: 'Que pena!',
                        text: 'Não possuímos essa quantidade de produtos inserida.',
                        icon: 'warning'
                      });
                    })

                }
              }).catch((error) => {
                console.log(error);
              })

          } else {
            MySwal.fire({
              title: 'Que Pena!',
              text: 'Nosso estoque desse produto acabou!',
              icon: 'warning'
            });
          }
        }
      }
    }
  }

  const puxarTamanhos = (name) => {
    if (window.localStorage.getItem("logado") == "true") {
      axios.get("http://localhost:8080/verificaQuantidade/" + name)
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i][0] !== null) {
              dados[i] = response.data[i]
            }
          }
          setArrayDados(dados)
          for (let i = 0; i < response.data.length; i++) {
            for (let j = 0; j < response.data[i].length; j++) {
              if (response.data[i][0] !== null) {
                tamanhos[i] = response.data[i][0];
                quantidades[i] = response.data[i][1];
              }
            }
          }
          let t = tamanhos.sort()
          setListaTamanhos(t);
          let q = quantidades.sort()
          let novoArr = []
          for (let i = 0; i <= q.length; i++) {
            if (q[i] == null) {
            } else {
              novoArr.push(q[i])
            }
          }
          let quantity = Math.max(...novoArr)
          let arrNum = []
          function teste(quant) {
            for (let i = 1; i <= quant; i++) {
              arrNum.push(i)
            }
          }
          teste(quantity)
          setListaQuantidades(arrNum);
        }).catch((error) => {
          console.log(error)
        });
    } else {

    }
  }

  const deveValidar = () => {
    if (window.localStorage.getItem("logado") !== "true") {
      MySwal.fire({
        title: 'Atenção!',
        text: 'Prezado usuário, realize login para efetuar sua compra!',
        icon: 'error'
      });
    }
  }

  const setVazio = () => {
    setTxtTamanho("")
    setTxtQuantidade("")
  }

  return (
    <div className="container containerCardHeight">
      <div className="logo text-center">
        <br /><br />
        <h1 className="title-card">CLÁSSICOS DA NIKE</h1>
        <br />
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;

          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">R$ {oldPrice}</span>
                {window.localStorage.getItem("logado") == "true" ?
                  <button type="button" className="btn btn-outline-secondary" onClick={() => { puxarTamanhos(name) }} data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + id} >Comprar</button>
                  :
                  <button type="button" className="btn btn-outline-secondary" onClick={() => { deveValidar() }}>Comprar</button>
                }
                <div class="modal fade" id={"staticBackdrop" + id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header" Style='background-image: linear-gradient(to right, bisque ,  aliceblue );'>
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body " Style='margin: auto;'>
                        <div className="image1">
                          <img className='imagemodal' src={image} alt={name} />
                        </div>
                        <div className="tamanhobutton">
                          <div className="texttamanho"><h4>Selecione o Tamanho</h4></div>
                          <select name="tamanho" className="tamanhotenis" onChange={(e) => setTxtTamanho(e.target.value)} value={tamanho} >
                            <option defaultValue=""></option>
                            {listaTamanhos.map((lista, i) => {
                              return <option key={i} value={lista}>{lista}</option>
                            })}
                          </select>
                        </div>
                        <div className="quantbutton">
                          <div className="texttamanho"><h4>Selecione a quantidade</h4></div>
                          <select name="quantidade" className="quanttenis" onChange={(e) => setTxtQuantidade(e.target.value)} value={quantidade}>
                            <option defaultValue=""></option>
                            {listaQuantidades.map((quantidade, i) => {
                              return <option key={i} value={quantidade}>{quantidade}</option>
                            })}
                          </select>
                        </div>
                      </div>
                      <div class="modal-footer" Style='background-image: linear-gradient(to right, bisque ,  aliceblue );'>
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={() => { setVazio() }}>Fechar</button>
                        <button type="button" class="btn btn-outline-success" onClick={() => { addCarrinho(id, name) }} >Adicionar ao Carrinho</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/images/expand-icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/expand-icon.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default Cards;