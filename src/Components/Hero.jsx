import React, { useState, useEffect } from 'react';

function Hero() {

    return (
        /* Contenedor principal con relative y overflow-hidden */
        <section className="relative b py-6 md:py-12 min-h-[70vh] flex items-center overflow-hidden">

            {/* ================= MARCA DE AGUA EN TODO EL ANCHO DE LA SECCIÓN ================= */}
            {/* Usamos opacity-25 directo en el contenedor y object-cover para que tape todo el fondo sin deformarse */}
            {/* <div className="absolute inset-0 pointer-events-none select-none opacity-28 z-0">
                <img
                    src="/imagenes-propuesta/fondo5.jpeg"
                    alt="Marca de agua Fondo Completo"
                    className="w-full h-full object-cover"
                />
            </div> */}

            
            {/* CONTENEDOR CON Z-10 PARA QUEDAR POR ENCIMA DE LA MARCA DE AGUA */}
            <div className="max-w-5xl mx-auto px-4 w-full relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
                    <div className="flex justify-center md:justify-start shrink-0">
                        <img 
                            src="/img/logo.png" 
                            alt="Logo SOEVER" 
                            // className="w-40 h-40 md:w-56 md:h-56 object-contain"
                            className="w-52 h-52 md:w-72 md:h-72 object-contain"
                        />
                    </div>

                    <div className="w-full space-y-4">
                        <h2 className="text-xl md:text-2xl font-black text-yellow-400 uppercase tracking-tight text-center md:text-left">
                            Ver que ponemos aca, si texto, imagen o ambas
                        </h2>
                        {/* <p className="font-red text-xl md:text-base text-center md:text-left tracking-wide [-webkit-text-stroke:1px_#facc15] text-transparent">
                            Este viernes 12 de junio, las y los trabajadores tenemos una cita importante con la democracia sindical. Es tiempo de participar y hacer oír nuestra voz.
                        </p> */}
                        <p className="font-medium text-gray-500 text-sm md:text-base text-center md:text-left">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptates commodi facilis accusamus dolor debitis, ex fuga architecto laborum quidem corporis eaque placeat, animi quibusdam rem sit odio? Iure, impedit!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

