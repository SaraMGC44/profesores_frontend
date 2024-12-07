import React, { useEffect, useState } from "react";
import axios from "axios";

function ListarProfesores() {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    console.log(`${process.env.REACT_APP_PUBLIC_JAVA_API}/Profesor/listar`);
    axios
      .get(`${process.env.REACT_APP_PUBLIC_JAVA_API}/Profesor/listar`)
      .then((response) => {
        console.log("Profesores cargados:", response.data);
        setProfesores(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los profesores:", error);
        if (error.response) {
          console.error("Respuesta del servidor:", error.response.data);
        }
      });
  }, []);

  return (
    <div>
      <br/>
      <br/>
      <h2>Lista de Profesores</h2>
      <br/>
      <br/>

      {/* Tabla para mostrar los profesores */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID del Profesor</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
        {profesores.length > 0 ? (
          profesores.map((profesor) => (
            <tr key={profesor.id}>
              <td>{profesor.id}</td>
              <td>{profesor.nombre}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">No hay profesores disponibles.</td>
          </tr>
        )}
    </tbody>
  </table>
</div>

  );
}

export default ListarProfesores;