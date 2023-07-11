import React from 'react';
import './style.css';

function Cards({ id, img, nombre, precio, descripcion, agregarCarro, detalleOn }) {
  return (

    <div key={id} className="card m-3" style={{ width: '18rem' }} onClick={() => detalleOn(id)}>
      <img src={`./media/${img}`} alt={nombre} className="card-img-top item" width="300px" height="250px" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <button onClick={agregarCarro} className="btn btn-primary btn-sm agregar" data-bs-toggle="button">
          Detalles
        </button>
        <p>Precio:(en USD) ${precio}</p>
      </div>
    </div>

  );
}

export default Cards;