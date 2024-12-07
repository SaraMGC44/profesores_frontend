import React, { useState } from "react";
import ListarProfesores from "./Components/ListarProfesores";
import RegistrarEntrada from "./Components/RegistrarEntrada";
import VerEntradas from "./Components/VerEntradas";
import "./App.css";

function App() {
  // Definir el estado para el componente a mostrar
  const [componenteActivo, setComponenteActivo] = useState("verProfesores");

  // Función para cambiar el componente activo
  const mostrarComponente = (componente) => {
    setComponenteActivo(componente);
  };

  return (
    <div className="container">
      <h1>Control de Profesores</h1>

      {/* Contenedor de botones alineados horizontalmente */}
      <div className="button-container">
        <button onClick={() => mostrarComponente("verProfesores")}>Ver Profesores</button>
        <button onClick={() => mostrarComponente("registrarEntrada")}>Registrar Entrada</button>
        <button onClick={() => mostrarComponente("verEntradas")}>Ver Entradas</button>
      </div>

      <div className="section">
        {/* Renderizar el componente basado en el estado */}
        {componenteActivo === "verProfesores" && <ListarProfesores />}
        {componenteActivo === "registrarEntrada" && <RegistrarEntrada />}
        {componenteActivo === "verEntradas" && <VerEntradas />}
      </div>
    </div>
  );
}

export default App;
