import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Home from "./components/Home";
import Attendees from "./components/Attendees";
import "./App.css"; // Importar el archivo CSS aquí
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App: React.FC = () => {
  const [asistentes, setAsistentes] = useState<string[]>([]);
  const location = useLocation();

  // Cargar asistentes desde Firebase
  useEffect(() => {
    const obtenerAsistentes = async () => {
      const querySnapshot = await getDocs(collection(db, "asistentes"));
      const listaAsistentes = querySnapshot.docs.map(
        (doc) => doc.data().nombre
      );
      setAsistentes(listaAsistentes);
    };

    obtenerAsistentes();
  }, []);

  const confirmarAsistencia = async (nombre: string) => {
    try {
      await addDoc(collection(db, "asistentes"), { nombre });
      setAsistentes((prev) => [...prev, nombre]);
      toast.success("¡Gracias por confirmar tu asistencia!");
    } catch (error) {
      toast.error("Error al guardar en Firebase");
    }
  };

  return (
    <div className="min-h-screen bg-gradient1 bg-cover bg-center animate-gradient">
      <ToastContainer />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route
              path="/"
              element={
                <Home
                  confirmarAsistencia={confirmarAsistencia}
                  cantidadAsistentes={asistentes.length}
                />
              }
            />
            <Route
              path="/asistentes"
              element={<Attendees asistentes={asistentes} />}
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
