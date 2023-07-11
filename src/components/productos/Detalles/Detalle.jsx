import React from 'react';
import './style.css';

function Detalle({img, nombre, precio, descripcion, agregarCarro}) {
  return (

    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={`./media/${img}`} alt={nombre} className="card-img-top item" width="300px" height="250px" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <button onClick={agregarCarro} className="btn btn-primary btn-sm agregar" data-bs-toggle="button">
          Agregar al carro
        </button>
        <p>Precio:(en USD) ${precio}</p>
      </div>
    </div>

  );
}

export default Detalle;