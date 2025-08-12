import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';




export default function FormularioModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false); // 👈 nuevo estado
  const [nombre, setNombre] = useState('');
  const [whatsappLocal, setWhatsappLocal] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [motivo, setMotivo] = useState('');
  const [motivoOtro, setMotivoOtro] = useState('');
  const [horario, setHorario] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setNombre('');
      setWhatsapp('');
      setMotivo('');
      setMotivoOtro('');
      setHorario('');
      setError('');
    }
  }, [isOpen]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (loading) return;
  setLoading(true);

  const motivoFinal = motivo === 'Otro' ? motivoOtro.trim() : motivo;
  const telefonoCompleto = `+549${whatsappLocal}`;
  const regexTelefonoArg = /^(\+549)?[1-9][0-9]{9}$/;

  if (!nombre || !whatsappLocal || !motivoFinal || !horario) {
    setError('Por favor completá todos los campos.');
    setLoading(false);
    return;
  }

  if (!regexTelefonoArg.test(telefonoCompleto)) {
    setError('Ingresá un número de WhatsApp válido de Argentina.');
    setLoading(false);
    return;
  }

  try {
    // 1️⃣ Guardar en Firestore
    await addDoc(collection(db, 'clientes'), {
      nombre,
      whatsapp: telefonoCompleto,
      motivo: motivoFinal,
      horario,
      creado: Timestamp.now(),
    });

    // 2️⃣ Enviar a Formspree
    await fetch("https://formspree.io/f/xnnzwoay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        whatsapp: telefonoCompleto,
        motivo: motivoFinal,
        horario
      }),
    });

    // 3️⃣ Redirigir a pago
    window.location.href = 'https://mpago.la/2hZpkou';
    onClose();
  } catch (error) {
    console.error(error);
    setError('Hubo un problema al enviar el formulario.');
  } finally {
    setLoading(false);
  }
};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm"
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre y apellido"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-3 border border-[#c7a8a2] rounded text-primary"
              />
              <div className="w-full relative">
  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary text-sm">+54 9</span>
  <input
    type="tel"
    placeholder="1123456789"
    value={whatsappLocal}
    onChange={(e) => {
      // Solo números
      const cleaned = e.target.value.replace(/[^0-9]/g, '');
      setWhatsappLocal(cleaned);
    }}
    className="w-full p-3 pl-20 border border-[#c7a8a2] rounded text-primary"
  />
</div>


              <select
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="w-full p-3 border border-[#c7a8a2] rounded text-primary"
              >
                <option value="">Motivo de consulta</option>
                <option>Alimentos y régimen</option>
                <option>Divorcio y división de bienes</option>
                <option>Adopción</option>
                <option>Sucesión</option>
                <option>Negociación extra judicial</option>
                <option>Otro</option>
              </select>

              {motivo === 'Otro' && (
                <input
                  type="text"
                  placeholder="Especificá el motivo"
                  value={motivoOtro}
                  onChange={(e) => setMotivoOtro(e.target.value)}
                  className="w-full p-3 border border-[#c7a8a2] rounded text-primary"
                />
              )}

              <select
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                className="w-full p-3 border border-[#c7a8a2] rounded text-primary"
              >
                <option value="">Franja horaria preferida</option>
                <option>Mañana (8:30 a 12:30)</option>
                <option>Tarde (16:30 a 19:30)</option>
              </select>

              {error && <p className="text-red-600 text-sm text-center">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className={`block text-center text-sm sm:text-md font-bold px-6 py-3 rounded-xl transition w-full 
    ${loading ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-[#604346] hover:bg-[#442f2d] text-white'}
  `}
              >
                  {loading ? 'Procesando...' : 'Confirmar consulta y abonar'}
              </button>

              <p className="text-xs mt-2 text-center">
                Luego del pago, se te redireccionará a whatsapp.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
