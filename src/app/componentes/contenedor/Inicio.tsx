import { NavLink } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32">
            {/* Aquí deberías incluir el contenido del ícono en lugar de xlink:href */}
          </svg>
          <span className="fs-4">Inicio</span>
        </a>
      </header>

      <main>
        <h1 className="text-body-emphasis">Transcuc - Plataforma de Movilidad Compartida</h1>
        <p className="fs-5 col-md-8">
        ¡Comparte tu viaje, reduce costos y viaja seguro!
        Transcuc es una plataforma digital que conecta a pasajeros de la Universidad de la Costa con rutas similares para compartir taxis o plataformas como inDriver. 
        Con nuestra solución, reduces el costo del viaje y viajas con mayor seguridad
        </p>

        <div className="mb-5">
          <NavLink to="/acer" className="btn btn-primary btn-lg px-4">
            Mas Informacion
          </NavLink>
        </div>

        <hr className="col-3 col-md-2 mb-5" />

        <div className="row g-5">
          <div className="col-md-6">
            <h2 className="text-body-emphasis">Contacto {String.fromCodePoint(0x1F4DE)} {/* 📞 */}</h2>
            <p>
             Contactenos para mas informacion.
            </p>
            <ul className="list-unstyled ps-0">
              <li>
                <a
                  className="icon-link mb-1"
                  href="https://github.com/twbs/examples/tree/main/icons-font"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Bootstrap npm starter
                </a>
              </li>
              <li>
                <a
                  className="icon-link mb-1"
                  href="https://github.com/twbs/examples/tree/main/parcel"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Bootstrap Parcel starter
                </a>
              </li>
              <li>
                <a
                  className="icon-link mb-1"
                  href="https://github.com/twbs/examples/tree/main/vite"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Bootstrap Vite starter
                </a>
              </li>
              <li>
                <a
                  className="icon-link mb-1"
                  href="https://github.com/twbs/examples/tree/main/webpack"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Bootstrap Webpack starter
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h2 className="text-body-emphasis">Soporte {String.fromCodePoint(0x1F4AC)} {/* 💬 */}</h2>
            <p>Aqui lo ayudaremos a resolver sus dudas y problemas.</p>
            <ul className="list-unstyled ps-0">
              <li>
                <a className="icon-link mb-1" href="/docs/5.3/getting-started/introduction/">
                  Bootstrap quick start guide
                </a>
              </li>
              <li>
                <a className="icon-link mb-1" href="/docs/5.3/getting-started/webpack/">
                  Bootstrap Webpack guide
                </a>
              </li>
              <li>
                <a className="icon-link mb-1" href="/docs/5.3/getting-started/parcel/">
                  Bootstrap Parcel guide
                </a>
              </li>
              <li>
                <a className="icon-link mb-1" href="/docs/5.3/getting-started/vite/">
                  Bootstrap Vite guide
                </a>
              </li>
              <li>
                <a className="icon-link mb-1" href="/docs/5.3/getting-started/contribute/">
                  Contributing to Bootstrap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="pt-5 my-5 text-body-secondary border-top">
         © 2023 Servicio de Transporte Transcuc. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Inicio;
