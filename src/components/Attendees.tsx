import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaRegSmile } from "react-icons/fa"; // Importar íconos

interface AttendeesProps {
  asistentes: string[];
}

const Attendees: React.FC<AttendeesProps> = ({ asistentes }) => (
  <div
    className="min-h-screen flex flex-col items-center justify-center p-6"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/754953/pexels-photo-754953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      animation: "moveBackground 30s linear infinite", // Ajusta la duración según lo desees
    }}
  >
    <h1 className="text-4xl font-bold mb-8 text-blue-600 flex items-center animate__animated animate__fadeIn">
      <FaRegSmile className="mr-2 text-5xl" /> Asistentes Confirmados
    </h1>
    {asistentes.length === 0 ? (
      <p className="text-lg text-gray-600 animate__animated animate__fadeIn animate__delay-1s">
        Nadie ha confirmado aún.
      </p>
    ) : (
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {asistentes.map((nombre, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 flex items-center space-x-4 transform transition-transform duration-500 hover:scale-105 hover:bg-blue-50 animate__animated animate__fadeIn"
          >
            <FaUserCircle className="text-blue-500 text-4xl animate__animated animate__bounce" />
            <div>
              <p className="text-xl font-semibold">{nombre}</p>
            </div>
          </div>
        ))}
      </div>
    )}
    <Link
      to="/"
      className="mt-6 text-blue-700 underline text-lg hover:text-blue-800 transition duration-300 animate__animated animate__fadeIn"
    >
      Volver
    </Link>
  </div>
);

export default Attendees;
