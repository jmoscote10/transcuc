import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { Contactos } from "../../componentes/transcuc/Contactos";
import { Funcionamiento } from "../../componentes/transcuc/Funcionamiento";
import { Conductor_Actualizar } from "../../componentes/transcuc/Conductor_Actualizar";
import { Beneficios_Conductores } from "../../componentes/transcuc/Beneficios_Conductores";
import { Beneficios_pasajero } from "../../componentes/transcuc/Beneficios_pasajero";
import { Acerca } from "../../componentes/otros/Acerca";
import { No_encontrado } from "../../componentes/contenedor/No_encontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/fun" element={<Funcionamiento />} />
      <Route path="/Cnt" element={<Contactos />} />
      <Route path="/pas" element={<Beneficios_pasajero />} />
      <Route path="/Con" element={<Beneficios_Conductores />} />


      <Route path="/con/:codigo" element={<Conductor_Actualizar />} />

      <Route path="/acer" element={<Acerca />} />


      <Route path="*" element={<No_encontrado />} />
    </Routes>
  );
};
