//IMPORT

//FUNCION
function Footer() {
  return (

    // <footer >
    //   <div class="bg-orange-600/65">
    //     <div class="max-w-6xl mx-auto px-6 gap-8 flex justify-evenly">
    <footer class="bg-yellow-400 text-white">
      {/* SEPARADOR VIAL ANGOSTO Y ESTILIZADO */}
      {/* <div
        className="h-2 w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #facc15, #facc15 8px, #000000 8px, #000000 16px)'
        }}
      /> */}
      <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">


        <div class="text-center md:text-left md:w-1/2">
          <h2 class="text-xl font-semibold mb-3 text-black">S.O.E.V.E.R.</h2>
          <p class="text-sm leading-relaxed text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo est rerum nemo animi. Delectus dolores quaerat incidunt dolorum nostrum excepturi quasi quis sed, facere voluptatibus praesentium porro voluptatum iste.
          </p>
        </div>


        <div className="text-center md:w-1/2 flex flex-col items-center md:items-end">
          <h2 className="text-xl font-semibold mb-3 text-black">Seguinos</h2>

          {/* FACEBOOK */}
          <div className="flex justify-center md:justify-end gap-4">
            <a href="https://www.facebook.com/share/1HRczopYyb/" className="hover:scale-110 transition-transform">
              <img
                src="/img/facebook.png"
                alt="Facebook"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>

            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/s.o.e.v.e.r?igsh=MThuOXBraDZzczB5ZQ==" className="hover:scale-110 transition-transform">
              <img
                src="/img/instagram.png"
                alt="Instagram"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>
          </div>
        </div>

      </div>

      {/* LINEA INFERIOR */}
      {/* <hr className="my-6 mx-6" />
        <div className="text-center text-sm ">
          © 2025 Todos los derechos reservados.
        </div> */}
      {/* <hr class="border-gray-950 mx-6" />

      {/* SEPARADOR ESTILO CARTEL DE OBRA / CINTA DE PELIGRO */}
      {/* <div
        className="h-6 w-full shadow-[inset_0_4px_6px_rgba(0,0,0,0.6),0_4px_6px_rgba(0,0,0,0.6)]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #facc15, #facc15 15px, #000000 15px, #000000 30px)'
        }}
      /> */}
      {/* <div
        className="h-2 w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #facc15, #facc15 8px, #000000 8px, #000000 16px)'
        }}
      /> */}

      <div class="bg-black text-center text-xs py-4 text-yellow-400">
        © 2025 Todos los derechos reservados.
      </div>


    </footer>
  )
}

//EXPORTS
export default Footer