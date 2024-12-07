import React, { useEffect, useState } from "react";
import axios from "axios";

function VerEntradas() {
  const [entradas, setEntradas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_JAVA_API}/registroEntradas/lista`)
      .then((response) => {
        console.log("Datos recibidos:", response.data); // Verifica los datos recibidos
        setEntradas(response.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar las entradas:", error);
        setError("Hubo un problema al cargar los datos.");
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <br />
      <br />
      <h2>Entradas Registradas</h2>
      <br />
      <br />
      
      {/* Tabla para mostrar las entradas */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>Profesor ID</th>
            <th>Hora de Llegada</th>
          </tr>
        </thead>
        <tbody>
          {entradas.map((entrada) => (
            <tr key={entrada.id}>
              <td>{entrada.profesorId}</td>
              <td>{entrada.horallegada}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VerEntradas;
