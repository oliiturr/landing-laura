import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FormularioModal({ isOpen, onClose }) {
  const [motivo, setMotivo] = useState('');

  useEffect(() => {
    setMotivo(''); // Reiniciar al abrir
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg p-6 w-full max-w-md mx-4 relative bg-[#e7c9bc] text-[#3c281f]"
          >
            <button onClick={onClose} className="absolute top-3 right-3 text-[#3c281f] hover:text-primary">
              <X size={24} />
            </button>
            <h2 className="text-2xl md:text-3xl font-montserrat mb-6 mt-4 text-center">Agendá tu consulta online</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre y apellido" className="w-full p-3 border border-[#c7a8a2]  rounded text-primary" />
              <input type="text" placeholder="WhatsApp" className="w-full p-3 border border-[#c7a8a2]  rounded text-primary" />
              
              <select
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="w-full p-3 border border-[#c7a8a2] rounded text-primary"
              >
                <option value="">Motivo de consulta</option>
                <option>Alimentos y régimen</option>
                <option>Divorcio y bienes</option>
                <option>Adopción</option>
                <option>Sucesión</option>
                <option>Otro</option>
              </select>

              {motivo === 'Otro' && (
                <input
                  type="text"
                  placeholder="Especificá el motivo"
                  className="w-full p-3 border border-[#c7a8a2]  rounded text-primary"
                />
              )}

              <select className="w-full p-3 border border-[#c7a8a2] rounded  text-primary">
                <option>Franja horaria preferida</option>
                <option>Mañana (8:30 a 12:30)</option>
                <option>Tarde (16:30 a 19:30)</option>
              </select>

              <a
                href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=241534187-509b00fa-e285-4320-a697-9cc5bf662e70"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm sm:text-md bg-[#604346] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#442f2d] transition w-full"
              >
                Confirmar consulta y abonar
              </a>

              <p className="text-xs mt-2 text-center">
                Luego del pago, recibirás un WhatsApp para coordinar día y hora según tu franja elegida.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
