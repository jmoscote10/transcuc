import bib from "../../../assets/img/cuc.jpg"

export const Acerca = () => {
    return (
      <>
        <div className="container py-5">
            <h1 className="text-center fw-light mb-4">Sobre Nosotros</h1>
            <div className="row align-items-center">
            <div className="col-md-6">
            <img src={bib} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="col-md-6">
                <p className="lead text-body-secondary">
                Nuestro objetivo es ser una plataforma de transporte compartido en Barranquilla que optimice rutas, 
                reduzca costos para los usuarios y mejore la seguridad en los desplazamientos. 
                Nuestra plataforma integra inteligencia artificial para la asignación eficiente de viajes, 
                monitoreo en tiempo real y verifica la identidad de conductores y pasajeros, 
                contribuyendo a disminuir la congestión vehicular y fomentando un modelo de movilidad más accesible y confiable.
                </p>
            
            </div>
            </div>
        </div>
      </>
    );
  };
  