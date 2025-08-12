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
      <p className="text-white text-xs sm:text-sm text-center mt-4">
  App web desarrollada por{" "}
  <a
    href="https://www.instagram.com/lituweb"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-white hover:text-gray-100 underline"
  >
    @lituweb
  </a>
</p>
    </footer>
  );
}
