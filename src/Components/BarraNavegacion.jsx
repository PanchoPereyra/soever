import React from "react";
// Cambiamos Link por NavLink para poder usar estados activos dinámicos
import { NavLink, Link } from "react-router-dom"; 

function BarraNavegacion() {

const claseCelular = ({ isActive }) => 
    `py-1.5 px-2 rounded-lg border text-center block w-full transition-all duration-200 font-bold ${
        isActive 
            ? "!bg-yellow-500 !text-black !border-yellow-500 shadow-md" 
            : "!bg-transparent !text-yellow-500 !border-transparent hover:!bg-yellow-500 hover:!text-black hover:!border-yellow-500"
    }`;

const clasePC = ({ isActive }) => 
    `px-4 py-2 rounded-xl border text-base font-bold transition-all duration-200 ${
        isActive 
            ? "!bg-yellow-500 !text-black !border-yellow-500 shadow-md" 
            : "!bg-transparent !text-yellow-500 !border-transparent hover:!bg-yellow-500 hover:!text-black hover:!border-yellow-500"
    }`;

    return (
        <header className="bg-black sticky top-0 z-50 border-b border-neutral-800 transition-all">
            
            {/* =========================================================================
                1. VISTA PARA CELULARES (Grid en 2 filas fijas sobre fondo negro)
               ========================================================================= */}
            <div className="block md:hidden">
                {/* LOGO Y TEXTO COMPACTO */}
                <div className="px-4 pt-3 pb-2 border-b border-neutral-900 flex items-center justify-center gap-3">
                    <img 
                        src="/imagenes/logo.png" 
                        alt="Logo SOEVER" 
                        className="w-12 h-12 object-contain flex-shrink-0"
                    />
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="text-4xl font-black text-yellow-500 uppercase tracking-tight leading-tight">
                            S.O.E.V.E.R.
                        </h1>
                        <p className="text-[9px] font-bold text-yellow-500 uppercase tracking-widest">
                            Sindicato Empleados Viales de Entre Ríos
                        </p>
                    </div>
                </div>

                {/* MENÚ EN DOS FILAS EXACTAS CON DETECCIÓN ACTIVA */}
                <div className="bg-black px-2 py-2">
                    <nav className="grid grid-cols-4 gap-1 text-center text-xs font-bold">
                        <NavLink to="/" className={claseCelular}>Inicio</NavLink>
                        <NavLink to="/nosotros" className={claseCelular}>Nosotros</NavLink>  {/* ya esta */}
                        <NavLink to="/noticias" className={claseCelular}>Noticias</NavLink>  {/* ya esta */}  
                        <NavLink to="/beneficios" className={claseCelular}>Beneficios</NavLink>  {/* ya esta */}
                        <NavLink to="/escala" className={claseCelular}>Escala</NavLink>
                        <NavLink to="/afiliacion" className={claseCelular}>Afiliación</NavLink>
                        <NavLink to="/turismo" className={claseCelular}>Turismo</NavLink>
                        <NavLink to="/camping" className={claseCelular}>Camping</NavLink>
                        <NavLink to="/documentos" className={claseCelular}>Documentos</NavLink>
                        <NavLink to="/contacto" className={claseCelular}>Contacto</NavLink>
                    </nav>
                    
                    {/* Botón Lista 1 centrado abajo en el celu */}
                    {/* <div className="flex justify-center mt-2 px-2">
                        <Link to="/lista" className="w-full text-center bg-yellow-500 text-black py-1.5 rounded-lg font-black text-xs uppercase tracking-wider shadow-sm active:bg-yellow-600">
                            Lista 1
                        </Link>
                    </div> */}
                </div>
            </div>

            {/* =========================================================================
                2. VISTA PARA COMPUTADORAS (Enlaces dinámicos alineados estilo oscuro)
               ========================================================================= */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
                <div className="flex justify-center items-center">
                    <nav className="flex flex-wrap justify-center items-center gap-x-1 gap-y-2 text-base font-bold">
                        <NavLink to="/" className={clasePC}>
                            Inicio
                        </NavLink>

                        <NavLink to="/nosotros" className={clasePC}>
                            Nosotros
                        </NavLink>

                        <NavLink to="/noticias" className={clasePC}>
                            Noticias
                        </NavLink> 

                        <NavLink to="/beneficios" className={clasePC}>
                            Beneficios
                        </NavLink>

                        <NavLink to="/escala" className={clasePC}>
                            Escala
                        </NavLink>

                        <NavLink to="/afiliacion" className={clasePC}>
                            Afiliación
                        </NavLink>

                        <NavLink to="/turismo" className={clasePC}>
                            Turismo
                        </NavLink>

                        <NavLink to="/camping" className={clasePC}>
                            Camping
                        </NavLink>

                        <NavLink to="/documentos" className={clasePC}>
                            Documentos
                        </NavLink>

                        <NavLink to="/contacto" className={clasePC}>
                            Contacto
                        </NavLink>

                        {/* Botón Lista 1 destacado al final (Amarillo con letras negras) */}
                        {/* <Link 
                            to="/lista" 
                            className="ml-3 px-5 py-2 bg-yellow-500 text-black rounded-xl font-black text-sm uppercase tracking-wider shadow-sm hover:bg-yellow-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                        >
                            Lista 1
                        </Link> */}

                    </nav>
                </div>
            </div>

        </header>
    );
}

export default BarraNavegacion;
