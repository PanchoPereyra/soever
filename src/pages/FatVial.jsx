function FatVial() {
    return (
        <div className="max-w-4xl mx-auto px-5 py-12">

            {/* Título */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-500 mb-6">
                FAT VIAL
            </h1>

            {/* Contenido */}
            <div className="text-gray-500 leading-relaxed space-y-4 text-lg">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ex blanditiis harum veritatis, ratione illo voluptates,
                    debitis earum aspernatur eveniet beatae incidunt.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempora sed magnam, sint eligendi velit. Ab vitae rerum similique placeat deserunt necessitatibus dolore hic magni, perspiciatis nihil veritatis mollitia in.
                </p>
            </div>

            {/* Botones */}
            <div className="mt-10 flex flex-col gap-4 items-start">
                <a
                    href="https://www.fatvial.com.ar/noticias.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-48 text-center py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-black hover:text-yellow-300 border border-amber-500 transition"
                >
                    Ir a Fat Vial
                </a>

                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-48 text-center py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-black hover:text-yellow-300 border border-amber-500 transition"
                >
                    Volver al inicio
                </a>
            </div>

        </div>
    );
}

export default FatVial;