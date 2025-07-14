import { InstagramIcon, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 text-center text-sm bg-[#604346] text-white space-y-2">
      <p>Maria Laura Ballés, abogada en familia y sucesiones.</p>
      <div className="flex justify-center gap-4">
        <a href="https://wa.me/5493541680585" target="_blank" rel="noopener noreferrer">
          <Phone />
        </a>
        <a href="https://instagram.com/abogadalauraballes" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </div>
      <p className='mb-10'>Consultas online, no constituye relación abogado-cliente hasta confirmación de servicios.</p>
      <p>Diseño y desarrollo web realizado por Olivia Iturrusgarai.</p>
      <p>Si querés contactarla para tu web, escribile a: oliviaballes2008@gmail.com</p>
    </footer>
  );
}
