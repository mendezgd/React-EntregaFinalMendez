import React from 'react';

const Contacto = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h2>Contacto</h2>
          <div className="form">
            <div className="col">
              <div className="mb-3 col-xl-12 col-md-12 col-sm-12">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Ingrese su nombre aquí"
                />
              </div>
              <div className="mb-3 col-xl-12 col-md-12 col-sm-12">
                <label htmlFor="Apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Apellido"
                  placeholder="Ingrese su apellido aquí"
                />
              </div>
              <div className="mb-3 col-xl-12 col-md-12 col-sm-12">
                <label htmlFor="Email" className="col-sm-2 col-form-label col-form-label-sm">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="Email"
                  placeholder="Ingrese su correo aquí"
                />
              </div>
              <div className="mb-3 col-xl-12 col-md-12 col-sm-12">
                <label htmlFor="Telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Telefono"
                  placeholder="Ingrese su número de teléfono aquí"
                />
              </div>
              <div className="mb-3 col-xl-12 col-md-12 col-sm-12">
                <div className="input-group">
                  <span className="input-group-text">Mensaje</span>
                  <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <div className="mb-3 col-xl-1 col-md-6 col-sm-12">
                    <button className="btn btn-primary" type="submit">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="mapa">
            <p>Av Triunvirato 2417 - CABA</p>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1341.7518146064208!2d-58.45831884953403!3d-34.58513860189464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sembed%20google%20maps!5e0!3m2!1ses-419!2sar!4v1676229808871!5m2!1ses-419!2sar"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="tel">
          <div className="col-12">
            <i className="bi bi-telephone"> +54 11 9999 9999</i>
            <i className="bi bi-whatsapp"> +54 11 1111 1111</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
