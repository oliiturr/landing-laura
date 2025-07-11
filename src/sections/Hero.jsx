export default function Hero({ onOpenModal }) {
  return (
    <section
      className="relative h-[40vh] sm:h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/hero.png')",
      }}
    >
      {/* CONTENIDO CENTRADO */}
      <div className="p-8 text-center max-w-2xl mx-auto">
        <h1 className="text-white text-xl sm:text-4xl md:text-5xl font-montserrat font-semibold">
          Consultas Legales Online sobre Familia y Sucesiones
        </h1>
        <p className="text-white mt-2 sm:mt-4 mb-12 text-sm sm:text-lg">
          Con un enfoque humano, para que encuentres claridad y soluciones en momentos importantes de tu vida.
        </p>
      </div>

      {/* BOTÓN AL PIE Y CENTRADO */}
      <div className="absolute bottom-4 sm:bottom-8 w-full flex justify-center">
        <button
          onClick={onOpenModal}
          className="text-white text-sm sm:text-xl font-bold px-5 py-3 sm:px-8 sm:py-5 rounded-full bg-[#604346] hover:bg-[#442f2d] transition"
        >
          Agendá tu consulta online
        </button>
      </div>
    </section>
  );
}
