import { Check, Video, Clock, FileText } from 'lucide-react';

export default function Funcionamiento() {
  return (
    <section className="py-8 sm:py-16 px-4 bg-[#e7c9bc] ">
      <h2 className="text-2xl md:text-4xl text-center font-montserrat mb-6">¿Cómo funciona la consulta?</h2>
      <div className="space-y-4 max-w-xl mx-auto">
        <div className="flex items-center gap-3 justify-center"><Video className="text-primary w-6 h-6" /> Modalidad: 100% online (videollamada).</div>
        <div className="flex items-center gap-3 justify-center"><Clock className="text-primary w-6 h-6" /> Duración: 45 minutos, máximo 1 hora.</div>
        <div className="flex items-center gap-3 justify-center"><FileText className="text-primary w-6 h-6" /> Incluye: escucha, aclaración de dudas y posibles pasos a seguir.</div>
        <div className="flex items-center gap-3 justify-center"><Check className="text-primary w-6 h-6" /> Horarios disponibles: mañana (8:30 a 12:30) y tarde (16:30 a 19:30).</div>
      </div>
    </section>
  );
}
