import { useState } from "react";

const imagenesCamping = [
    { id: 1, src: "https://picsum.photos/id/164/600/400", alt: "Hotel frente al mar" },
    { id: 2, src: "https://picsum.photos/id/188/600/400", alt: "Cabaña en la montaña" },
    { id: 3, src: "https://picsum.photos/id/28/600/400", alt: "Hotel de montaña" },
    { id: 4, src: "https://picsum.photos/id/29/600/400", alt: "Cabaña rústica" },
    { id: 5, src: "https://picsum.photos/id/49/600/400", alt: "Resort" },
    { id: 6, src: "https://picsum.photos/id/58/600/400", alt: "Cabaña junto al lago" },
    { id: 7, src: "https://picsum.photos/id/100/600/400", alt: "Hotel de playa" },
    { id: 8, src: "https://picsum.photos/id/119/600/400", alt: "Cabaña en bosque" },
    { id: 9, src: "https://picsum.photos/id/142/600/400", alt: "Hotel céntrico" },
];

function Turismo() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    return (
        <div className="min-h-screen bg-black py-12 px-4">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4 text-center">
                Turismo
            </h1>

            <div className="max-w-4xl mx-auto mb-10 text-center">
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    El Sindicato de SOEVER ofrece a sus afiliados y afiliadas las propuestas turísticas para la temporada de vacaciones con importantes beneficios y precios convenientes.
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium explicabo labore minus et odio aspernatur ea quisquam aperiam sit ipsam reiciendis asperiores alias nihil commodi, est eius vel quia.
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                    {[
                        "Mar del Plata", "Santa Clara del Mar", "San Bernardo", "San Clemente",
                        "Villa Gesell", "Mar de Ajó", "Tigre", "Florencio Varela",
                        "Bariloche", "Ushuaia", "Puerto Madryn", "La Paz",
                        "Villa Carlos Paz", "Cosquín", "Mina Clavero", "Tanti",
                        "Córdoba Capital", "Salta", "Iguazú", "Buenos Aires", "Uspallata (Mendoza)"
                    ].map((lugar) => (
                        <span key={lugar} className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-lg text-yellow-400 text-sm font-medium">
                            {lugar}
                        </span>
                    ))}
                </div>
            </div>

            {/* GRID DE TARJETAS */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {imagenesCamping.map((img) => (
                    <div
                        key={img.id}
                        className="cursor-pointer rounded-xl overflow-hidden border border-neutral-800 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-105"
                        onClick={() => setImagenSeleccionada(img)}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-56 object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* MODAL / LIGHTBOX */}
            {imagenSeleccionada && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setImagenSeleccionada(null)}
                >
                    <div className="relative max-w-4xl w-full">
                        <button
                            className="absolute -top-10 right-0 text-yellow-400 text-3xl font-bold hover:text-white transition"
                            onClick={() => setImagenSeleccionada(null)}
                        >
                            ✕
                        </button>
                        <img
                            src={imagenSeleccionada.src}
                            alt={imagenSeleccionada.alt}
                            className="w-full rounded-xl border border-neutral-700 object-contain max-h-[80vh]"
                        />
                    </div>
                </div>
            )}

            <div className="flex justify-center mt-10">
                <a
                    href="/"
                    className="px-6 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-black hover:text-yellow-300 border border-yellow-300 transition"
                >
                    Volver al inicio
                </a>
            </div>
        </div>
    );
}

export default Turismo