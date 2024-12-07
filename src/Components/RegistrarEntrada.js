import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid} from "uuid";

function RegistrarEntrada() {
  const [profesorId, setProfesorId] = useState("");
  const [horallegada, setHorallegada] = useState("");

  const handleRegistrarEntrada = () => {
    // Validar que los campos no estén vacíos
    if (!profesorId || !horallegada) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_PUBLIC_JAVA_API}/registroEntradas/guardar`, {
        id:uuid(),
        profesorId: profesorId,
        horallegada: horallegada,
      })
      .then((response) => {
        alert("Entrada registrada con éxito");
        // Limpiar los campos después de registrar
        setProfesorId("");
        setHorallegada("");
      })
      .catch((error) => {
        console.error("Error al registrar la entrada:", error);
        if (error.response) {
          console.error("Respuesta del servidor:", error.response.data);
        }
      });
  };

  return (
    <div>
      <br/>
      <br/>
      <h2>Registrar Entrada</h2>
      <br/>
      <input
        type="number"
        placeholder="ID del Profesor"
        value={profesorId}
        onChange={(e) => setProfesorId(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="Hora de Llegada"
        value={horallegada}
        onChange={(e) => setHorallegada(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={handleRegistrarEntrada}>Registrar</button>
    </div>
  );
}

export default RegistrarEntrada;