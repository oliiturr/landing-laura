import { useState } from 'react';
import Hero from './sections/Hero';
import ComoAyudo from './sections/ComoAyudo';
import SobreMi from './sections/SobreMi';
import Funcionamiento from './sections/Funcionamiento';
import FormularioModal from './sections/Formulario';
import Footer from './sections/Footer';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-lato bg-secondary text-primary">
      <Hero onOpenModal={() => setShowModal(true)} />
      <ComoAyudo />
      <SobreMi />
      <Funcionamiento />
      <FormularioModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer />
    </div>
  );
}
