import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import {
  FaBaby,
  FaCalendarAlt,
  FaCheckCircle,
  FaHeart,
  FaWhatsapp,
  FaBars,
  FaBabyCarriage,
} from "react-icons/fa";
import Swal from "sweetalert2";

interface HomeProps {
  confirmarAsistencia: (nombre: string) => void;
  cantidadAsistentes: number;
}

const Home: React.FC<HomeProps> = ({
  confirmarAsistencia,
  cantidadAsistentes,
}) => {
  const [nombre, setNombre] = useState<string>("");
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState<string | null>(
    null
  );
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const confirmar = () => {
    if (nombre.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "¡Oops!",
        text: "Por favor, ingresa tu nombre",
      });
      return;
    }

    Swal.fire({
      title: "Confirmando...",
      text: "Estamos procesando tu confirmación",
      icon: "info",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    // Simula una llamada a una API o algún proceso
    setTimeout(() => {
      confirmarAsistencia(nombre);
      setMensajeConfirmacion(`¡Gracias por confirmar, ${nombre}!`);
      setNombre("");
      Swal.fire({
        icon: "success",
        title: "¡Asistencia Confirmada!",
        text: `¡Gracias por confirmar, ${nombre}!`,
      }).then(() => {
        navigate("/asistentes");
      });
    }, 1000); // Simula un pequeño retraso para la carga
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center parallax-background p-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/54547/pexels-photo-54547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, // Puedes cambiar esta URL por la imagen que desees
      }}
    >
      <h1 className="text-5xl font-bold mb-4 text-white flex items-center animate-bounce">
        <FaBaby className="mr-2" /> ¡Estás invitado al Baby Shower!
      </h1>

      <div className="mb-6 text-7xl text-pink-600">
        <FaBabyCarriage />
      </div>

      <p className="text-lg mb-6 text-white flex items-center">
        <FaCalendarAlt className="mr-2" /> El evento es el 1 de octubre.
      </p>

      <CountdownTimer eventDate={new Date("2024-10-01T00:00:00")} />

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa tu nombre"
        className="border border-white bg-white text-gray-900 p-2 mb-4 w-64 rounded shadow-sm"
      />

      <button
        onClick={confirmar}
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-300 ease-in-out flex items-center"
      >
        <FaCheckCircle className="mr-2" /> Confirmar asistencia
      </button>

      {mensajeConfirmacion && (
        <p className="mt-4 text-green-300 font-bold">{mensajeConfirmacion}</p>
      )}

      <p className="mt-6 text-lg text-white flex items-center">
        Total de confirmaciones:{" "}
        <FaHeart className="ml-2 text-red-500 text-3xl" />{" "}
        <span className="font-bold ml-2">{cantidadAsistentes}</span>
      </p>

      <Link to="/asistentes" className="mt-4 text-blue-500 underline">
        Ver quiénes asistirán
      </Link>

      <a
        href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out flex items-center"
      >
        <FaWhatsapp size={24} />
      </a>

      <button
        onClick={toggleSidebar}
        className="fixed bottom-4 left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
      >
        <FaBars size={24} />
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-white text-neutral-600 p-4 shadow-lg transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px", zIndex: 40 }}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Menú</h2>
        <ul>
          <li className="mb-2">
            <Link to="/asistentes" className="text-blue-400">
              Ver asistentes
            </Link>
          </li>
          <li className="mb-2">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400"
            >
              Contactar por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
