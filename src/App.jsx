import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";

// componentes
import BarraNavegacion from "./Components/BarraNavegacion"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Lista from "./Components/Lista"
import Novedades from "./Components/Novedades"

// paginas
import Home from "./pages/Home";
import EnConstruccion from "./pages/EnConstruccion"
import ObraSocial from "./pages/ObraSocial"
import LinksInteres from "./pages/LinksInteres"


// Agregados ahora ultimo
//********************************************************** */
import AccesosRapidos from "./Components/AccesosRapidos";
import Nosotros from "./pages/Nosotros";
import Noticias from "./pages/Noticias";
import Escala from "./pages/Escala";
import Afiliacion from "./pages/EnConstruccion";
import Beneficios from "./pages/Beneficios"
import Turismo from "./pages/Turismo";
import Documentos from "./pages/EnConstruccion";
import Contacto from "./pages/Contacto";
import Camping from "./pages/Camping";
import FatVial from "./pages/FatVial";
//********************************************************** */
// Hasta aca

import NotFound from "./pages/NotFound"
import { Analytics } from '@vercel/analytics/react'


function App() {
  // const [count, setCount] = useState(0) - Se borra

  return (
    <>
      {/* <Header /> */}
      <BarraNavegacion />

      {/* Páginas principales */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enconstruccion" element={<EnConstruccion />} />
        <Route path="/obrasocial" element={<ObraSocial />} />
        <Route path="/linksinteres" element={<LinksInteres />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/escala" element={<Escala />} />
        <Route path="/afiliacion" element={<EnConstruccion />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/documentos" element={<EnConstruccion />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="camping" element={<Camping />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/noticias" element={<Noticias/>}/>
        <Route path="/fat" element={<FatVial/>}/>    
        <Route path="*" element={<NotFound />} />
      </Routes>

      
      <AccesosRapidos/>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
