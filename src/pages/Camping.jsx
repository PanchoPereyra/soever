import { useState } from "react";

const imagenesCamping = [
    { id: 1, src: "https://picsum.photos/seed/camping1/600/400", alt: "Camping 1" },
    { id: 2, src: "https://picsum.photos/seed/camping2/600/400", alt: "Camping 2" },
    { id: 3, src: "https://picsum.photos/seed/camping3/600/400", alt: "Camping 3" },
    { id: 4, src: "https://picsum.photos/seed/camping4/600/400", alt: "Camping 4" },
    { id: 5, src: "https://picsum.photos/seed/camping5/600/400", alt: "Camping 5" },
    { id: 6, src: "https://picsum.photos/seed/camping6/600/400", alt: "Camping 6" },
    { id: 7, src: "https://picsum.photos/seed/camping1/600/400", alt: "Camping 7" },
    { id: 8, src: "https://picsum.photos/seed/camping2/600/400", alt: "Camping 8" },
    { id: 9, src: "https://picsum.photos/seed/camping3/600/400", alt: "Camping 9" },
];

function Camping() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    return (
        <div className="min-h-screen bg-black py-12 px-4">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4 text-center">
                Camping
            </h1>

            <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto mb-10">
                <p className="text-gray-300 max-w-md text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat quasi hic soluta? Exercitationem at amet repudiandae dolor, tempora officiis culpa harum eum hic, suscipit atque dignissimos animi itaque nam!
                </p>

                <p className="text-gray-300 max-w-md text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat quasi hic soluta? Exercitationem at amet repudiandae dolor, tempora officiis culpa harum eum hic, suscipit atque dignissimos animi itaque nam!
                </p>
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

export default Camping