import React from 'react';
import './style.css';

function Cards({ id, img, nombre, precio, detalleOn }) {
  return (
    <div className='col'>
      <div key={id} className="card" style={{ width: '18rem' }} onClick={() => detalleOn(id)}>
        <img src={`./media/${img}`} alt={nombre} className="card-img-top item" width="288px" height="250px" />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <button className="btn btn-primary btn-sm detalles" data-bs-toggle="button">
            Detalles
          </button>
          <p>Precio:(en USD) ${precio}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;