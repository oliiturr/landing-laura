import { Check, Video, Clock, FileText } from 'lucide-react';

export default function Funcionamiento() {
  return (
    <section className="py-8 sm:py-16 px-4 bg-[#e7c9bc]">
        <div className='text-center'> <h2 className="text-2xl md:text-4xl font-montserrat mb-6">¿Cómo funciona la consulta?</h2></div>
     
        <div className="sm:justify-items-center grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-3"><Video className="font-montserrat" /> Modalidad: 100% online (videollamada).</div>
        <div className="flex items-center gap-3"><Clock className="text-primary" /> Duración: 45 minutos, máximo 1 hora.</div>
        <div className="flex items-center gap-3"><FileText className="text-primary" /> Incluye: escucha, aclaración de dudas y posibles pasos a seguir.</div>
        <div className="flex items-center gap-3"><Check className="text-primary" /> Horarios disponibles: mañana (8:30 a 12:30) y tarde (16:30 a 19:30).</div>
       
      </div>
      
    </section>
  );
}

