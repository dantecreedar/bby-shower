import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ThankYouModalProps {
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/asistentes");
    }, 2000); // Redirigir después de 2 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        {/* Animación de zoom para el ícono */}
        <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-pulse" />
        <h2 className="text-2xl font-bold mb-2 animate-fadeIn">
          ¡Gracias por asistir!
        </h2>
        <p className="text-lg animate-fadeIn">
          Te redirigiremos a la pantalla de asistentes en breve.
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
