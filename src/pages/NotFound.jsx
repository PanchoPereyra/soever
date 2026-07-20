//IMPORT


//FUNCION
function NotFound() {
return (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center p-6">
            
            <h1 className="text-5xl font-bold text-yellow-400 mb-4">
                404
            </h1>

            <h2 className="text-2xl font-semibold mb-2">
                Página no encontrada
            </h2>

            <p className="text-gray-300 max-w-md mb-6">
                Lo sentimos, la página que estás buscando no existe o fue movida.
            </p>

            <a 
                href="/"
                className="px-6 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-black hover:text-yellow-300 border border-yellow-300 transition"
            >
                Volver al inicio
            </a>
        </div>
    );
}

//EXPORTS
export default NotFound