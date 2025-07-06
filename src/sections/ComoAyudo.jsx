import { Users, Baby, HeartHandshake, Landmark, ListChecks, Scale} from 'lucide-react';

export default function ComoAyudo() {
  return (
    <section className="py-8 sm:py-16 px-4 bg-[#e7c9bc]">
        <div className='text-center'> <h2 className="text-2xl md:text-4xl font-montserrat mb-6">¿Cómo puedo ayudarte?</h2>
      <p className="max-w-xl mx-auto mb-8">Si estás atravesando un momento difícil y no sabés por dónde empezar, puedo ayudarte a entender tus derechos y tus opciones para que tomes decisiones con tranquilidad.</p></div>
     
        <div className="sm:justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-3"><Users className="font-montserrat" /> Alimentos y régimen de comunicación.</div>
        <div className="flex items-center gap-3"><HeartHandshake className="text-primary" /> Divorcio y división de bienes.</div>
        <div className="flex items-center gap-3"><Baby className="text-primary" /> Adopción por integración.</div>
        <div className="flex items-center gap-3"><Landmark className="text-primary" /> Declaratoria de herederos y sucesiones.</div>
        <div className="flex items-center gap-3"><ListChecks className="text-primary" /> Otros temas de familia.</div>
        <div className="flex items-center gap-3"><Scale className="text-primary" /> Negociación extra judicial.</div>
      </div>
      
    </section>
  );
}