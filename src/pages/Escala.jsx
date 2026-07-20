import React from 'react';
import { FileDown, Calendar } from 'lucide-react';

export default function Escalas() {
  // Lista de documentos basada en tu texto
  const documentos = [
    { titulo: "Escala Salarial Abril 2026 a Julio 2026", link: "#" },
    { titulo: "Escala Salarial Diciembre 2025 a Abril 2026", link: "#" },
    { titulo: "Homologación acuerdo 26 DE JUNIO 2025 – CCT 130/75", link: "#" },
    { titulo: "Acuerdo Paritario – 26 de Junio 2025 – CCT 130/75", link: "#" },
    { titulo: "Acuerdo Paritario – Enero 2025", link: "#" },
    { titulo: "Escalas Call Center – Enero Abril 2025", link: "#" },
    { titulo: "Acuerdo Cerealeros Noviembre – Diciembre 2024", link: "#" },
    { titulo: "Acuerdo Centros de Contacto Noviembre-Diciembre 2024", link: "#" },
    { titulo: "Acuerdo Empleados de Comercio Noviembre-Diciembre 2024", link: "#" },
    { titulo: "Acuerdo Salarial Sep a Nov 2024", link: "#" },
    { titulo: "Acuerdo Salarial Turismo – Oct 2024", link: "#" },
    { titulo: "Escalas Call Center – Sep y Oct 2024", link: "#" },
    { titulo: "Homologación Abril y Mayo 2024", link: "#" },
    { titulo: "Escalas Call Center – Abril 2024", link: "#" },
    { titulo: "Escalas Call Center – Marzo 2024", link: "#" },
    { titulo: "Comunicado paritarias 2024", link: "#" },
    { titulo: "Escalas Cerealeros – Febrero 2024", link: "#" },
    { titulo: "Escalas Call Center – Febrero 2024", link: "#" },
    { titulo: "Acuerdo Salarial – Julio 2023", link: "#" },
    { titulo: "Acuerdo Salarial – Enero 2023", link: "#" },
    { titulo: "Acuerdo Salarial – Abril 2022", link: "#" },
  ];

  return (
    <section className="bg-black py-12 min-h-screen text-gray-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Título de la sección */}
        <div className="border-b border-neutral-800 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
            Escalas Salariales
          </h1>
          <p className="text-sm text-neutral-400 mt-2">
            Descargá las últimas planillas de salarios, acuerdos paritarios y homologaciones vigentes.
          </p>
        </div>

        {/* 📋 CONTENEDOR PRINCIPAL DE ARCHIVOS */}
        <div className="space-y-3">
          {documentos.map((doc, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-neutral-900 bg-neutral-950/60 transition-all duration-200 hover:border-yellow-500/40 hover:bg-neutral-900/40 gap-4"
            >
              {/* Texto e Icono izquierdo */}
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-yellow-400 shrink-0 hidden sm:block" />
                <span className="text-sm md:text-base font-bold text-gray-400 leading-tight">
                  {doc.titulo}
                </span>
              </div>

              {/* Botón Descargar (Cambia a amarillo sólido al hover, estilo vial) */}
              <a 
                href={doc.link}
                className="flex items-center gap-2 px-4 py-2 border border-yellow-400 text-yellow-400 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 hover:bg-yellow-500 hover:text-black shrink-0 w-full sm:w-auto justify-center"
              >
                <FileDown className="w-4 h-4" />
                Descargar
              </a>
            </div>
          ))}
        </div>

        {/* Botón Volver abajo de todo */}
        <div className="mt-12 border-t border-neutral-900 pt-6">
          <a
            href="/"
            className="btn-volver px-6 py-2 rounded-lg shadow inline-block font-bold"
          >
            ← Volver a Inicio
          </a>
        </div>

      </div>
    </section>
  );
}