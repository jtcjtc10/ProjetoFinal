import { useEffect, useState, useRef, Component } from 'react';
import './styles.css';

function Cards() {
  const [data, setData] = useState([]);
  const [IsModalVisible, setIsModalVisible] = useState(false);
  const carousel = useRef(null);

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

  const addCarrinho = (id) => {
    if (window.localStorage.getItem("logado") == "true") {
      console.log("adicionou produto id: " + id + " e usuario: " + window.localStorage.getItem("idUsuario"))

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
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">R$ {oldPrice}</span>

                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target={"#staticBackdrop"+id} />

                <div class="modal fade" id={"staticBackdrop" + id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div className="image">
                          <img src={image} alt={name} />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-outline-success">Adicionar ao Carrinho</button>
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