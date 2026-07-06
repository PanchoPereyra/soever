//IMPORT


//FUNCION
function Beneficios() {
    return (
        <section className="relative b py-6 md:py-12 min-h-[70vh] flex items-center overflow-hidden">
            <div className="max-w-4xl mx-auto px-5 py-12">

                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-500 mb-6">
                    Beneficios
                </h1>

                {/* EMPIEZAN LOS DIV DE LAS TARJETAS */}
                <div class="gap-5 grid grid-cols-1 md:grid-cols-4">
                    
                    {/* TARJETA 1 */}
                    <div class="bg-yellow-500 p-6 rounded-lg shadow-md text-left">
                        <div class="flex items-center justify-between mb-4">
                            {/* <span class="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">Negociación</span> */}
                            <span class="text-sm text-black">15 de Marzo, 2024</span>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-black">Acuerdo Salarial 2024</h3>
                        <p class="text-black mb-4">Se ha alcanzado un acuerdo histórico que beneficia a todos los trabajadores del sector.</p>
                        <a href="#" class="text-black hover:underline text-sm font-medium ">Leer más →</a>
                    </div>

                    {/* TARJETA 2 */}
                    <div class="bg-yellow-500 p-6 rounded-lg shadow-md text-left">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-sm text-black">15 de Marzo, 2024</span>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-black">Acuerdo Salarial 2024</h3>
                        <p class="text-black mb-4">Se ha alcanzado un acuerdo histórico que beneficia a todos los trabajadores del sector.</p>
                        <a href="#" class="text-black hover:underline text-sm font-medium ">Leer más →</a>
                    </div>

                    {/* TARJETA 3 */}
                    <div class="bg-yellow-500 p-6 rounded-lg shadow-md text-left">
                        <div class="flex items-center justify-between mb-4">
                            {/* <span class="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">Negociación</span> */}
                            <span class="text-sm text-black">15 de Marzo, 2024</span>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-black">Acuerdo Salarial 2024</h3>
                        <p class="text-black mb-4">Se ha alcanzado un acuerdo histórico que beneficia a todos los trabajadores del sector.</p>
                        <a href="#" class="text-black hover:underline text-sm font-medium ">Leer más →</a>
                    </div>

                    {/* TARJETA 4 */}
                    <div class="bg-yellow-500 p-6 rounded-lg shadow-md text-left">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-sm text-black">15 de Marzo, 2024</span>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-black">Acuerdo Salarial 2024</h3>
                        <p class="text-black mb-4">Se ha alcanzado un acuerdo histórico que beneficia a todos los trabajadores del sector.</p>
                        <a href="#" class="text-black hover:underline text-sm font-medium ">Leer más →</a>
                    </div>
                </div>

                {/* Botón volver */}
                <div className="mt-10">
 <a 
                href="/"
                className="px-6 py-2 bg-yellow-500 text-black rounded-lg shadow hover:bg-black hover:text-yellow-300 border border-amber-500 transition"
            >
                Volver al inicio
            </a>
                </div>

            </div>
        </section>
    );
}

//EXPORTS
export default Beneficios