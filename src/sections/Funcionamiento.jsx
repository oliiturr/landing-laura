import { Check, Video, Clock, FileText } from 'lucide-react';

export default function Funcionamiento() {
  return (
    <section className="py-16 px-4 bg-[#e7c9bc] text-center">
      <h2 className="text-2xl md:text-4xl font-montserrat mb-6">¿Cómo funciona la consulta?</h2>
      <div className="space-y-4 max-w-xl mx-auto">
        <div className="flex items-center gap-3 justify-center"><Video className="text-primary" /> Modalidad: 100% online (videollamada).</div>
        <div className="flex items-center gap-3 justify-center"><Clock className="text-primary" /> Duración: 45 minutos, máximo 1 hora.</div>
        <div className="flex items-center gap-3 justify-center"><FileText className="text-primary" /> Incluye: escucha, aclaración de dudas y posibles pasos a seguir.</div>
        <div className="flex items-center gap-3 justify-center"><Check className="text-primary" /> Horarios disponibles: mañana (8:30 a 12:30) y tarde (16:30 a 19:30).</div>
        {/* <p>✅ Horarios disponibles: mañana (8:30 a 12:30) y tarde (16:30 a 19:30).</p> */}
      </div>
    </section>
  );
}
