export default function Hero({ onOpenModal }) {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero.webp')" }}>
      <div className="p-8 text-center max-w-2xl mx-auto">
        <h1 className="text-white text-xl sm:text-4xl md:text-5xl font-montserrat font-semibold">Consultas Legales Online sobre Familia y Sucesiones</h1>
        <p className="text-white mt-2 sm:mt-4 mb-2 text-sm sm:text-lg">Con un enfoque humano, para que encuentres claridad y soluciones en momentos importantes de tu vida.</p>
        <button onClick={onOpenModal} className="text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full bg-[#604346] hover:bg-[#442f2d] transition">Agendá tu consulta online</button>
      </div>
    </section>
  );
}