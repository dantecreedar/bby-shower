import React from "react";
import { FaSpinner } from "react-icons/fa"; // Importar ícono de spinner

const Loading: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
    <div className="text-center">
      <FaSpinner className="text-blue-500 text-6xl animate-spin" />
      <p className="mt-4 text-lg text-gray-600">
        Cargando, por favor espera...
      </p>
    </div>
  </div>
);

export default Loading;
