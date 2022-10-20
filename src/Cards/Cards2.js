import { useEffect, useState, useRef } from 'react';
import './styles.css';

function Cards2() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes2.json')
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
  const addCarrinho = (id) => {
    if (window.localStorage.getItem("logado") == "true") {
      console.log("adicionou produto id: " + id + " e usuario: " + window.localStorage.getItem("idUsuario"))
    } else{
      console.log("vai logar FDP")   
    }
  }

  if (!data || !data.length) return null;

  return (
    <div className="container">
      <div className="logo text-center">
        <br/><br/>
        <h1 className="title-card">AIR JORDAN</h1>
        <br/>
      </div>
      <div className="carousel-cards2" ref={carousel}>
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
                <a className='tagAAddCarrinho' onClick={() => {addCarrinho(id)}}><span className="price">{price}</span></a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default Cards2;