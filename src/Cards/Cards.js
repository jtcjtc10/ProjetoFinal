
import { useEffect, useState, useRef, Component } from 'react';
import './styles.css';



function Cards() {
  const [tamanho, setTxtTamanho] = useState();
  const [quantidade, setTxtQuantidade] = useState(1);
  const [data, setData] = useState([]);
  const [IsModalVisible, setIsModalVisible] = useState(false);
  const carousel = useRef(null);
  


  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  useEffect(() => {


    
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

  const addCarrinho = (id,name) => {
    if (window.localStorage.getItem("logado") == "true") {
      console.log("adicionou produto id: " + id +  "Produto: "+ name + "Tamanho escolhido: " + tamanho +  "Quantidade " +quantidade+  "e usuario: " + window.localStorage.getItem("idUsuario")   )

    } else {
      console.log("vai logar FDP")
    }
  }
  


  return (
    <div className="container">
      <div className="logo text-center">
        <br /><br />
        <h1 className="title-card">CLÁSSICOS DA NIKE</h1>
        <br />
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image, t1, t2, t3, t4, t5, t6, t7, t8, q1,q2,q3,q4,q5 } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">R$ {oldPrice}</span>
                {/* <button type="button" className='btn btn-outline-success' data-bs-toggle="modal"  data-bs-target={"#staticBackdrop"+id} ><span className="price">{price}</span></button> */}
                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal"  data-bs-target={"#staticBackdrop"+id} >Comprar</button>

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
                         <option value=""></option>
                         <option value={t1}>{t1}</option>
                         <option value={t2}>{t2}</option>
                         <option value={t3}>{t3}</option>
                         <option value={t4}>{t4}</option>
                         <option value={t5}>{t4}</option>
                         <option value={t6}>{t6}</option>
                         <option value={t7}>{t7}</option>
                         <option value={t8}>{t8}</option>
                        </select>
                        </div>
                        <div className="quantbutton">
                          <div className="texttamanho"><h4>Selecione a quantidade</h4></div>
                        <select name="quantidade" className="quanttenis" onChange={(e) => setTxtQuantidade(e.target.value)} value={quantidade}>                         
                         <option value={q1}>{q1}</option>
                         <option value={q2}>{q2}</option>
                         <option value={q3}>{q3}</option>
                         <option value={q4}>{q4}</option>
                         <option value={q5}>{q5}</option>
                        </select>
                        </div>
                      </div>
                      <div class="modal-footer" Style='background-image: linear-gradient(to right, bisque ,  aliceblue );'>
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-outline-success" onClick={() => {addCarrinho(id,name)}} >Adicionar ao Carrinho</button>
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