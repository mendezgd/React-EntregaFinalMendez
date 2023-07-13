import React from 'react';

function ItemDetailCard({img, nombre, precio, descripcion, categoria }) {

  return (
    <div className="card m-1">
      <div className="row g-0">
        <div className="col-md-1">
          <img src={`../media/${img}`} className="img-fluid rounded-start" alt={nombre} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <p className='text'>{categoria}</p>
          </div>
        </div>
        <div className="col-md-2">
          <p className="card-text text-center m-0 p-0 mb-2">${precio}</p>
          <div className='cardDetailActions'>
            <button className='btn btn-success btn-sm agregar'>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailCard;
