import { useState } from 'react';

// Este componente carga usuarios y entrega el resultado al padre mediante un prop
export function CargadorUsuarios({ onUsuariosCargados }) {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  async function cargarUsuarios() {


    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch('http://localhost:3000/api/usuarios');

      if (!respuesta.ok) {
        throw new Error('Error al obtener los usuarios');
      }

      onUsuariosCargados(await respuesta.json());

    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  return (
    <section>
      <BotonCarga
        onClick={cargarUsuarios}
        cargando={cargando}
      />
      {cargando && <p>Cargando...</p>}
      {error && <p role="alert">Error: {error}</p>}
    </section>
  );
}

// Este componente solo representa el control que inicia la petición.
export function BotonCarga({ onClick, cargando }) {
  return (
    <button onClick={onClick} disabled={cargando}>
      {cargando ? 'Cargando...' : 'Mostrar usuarios'}
    </button>
  );
}

// Este componente recibe la lista y se limita a mostrar sus datos.
export function ListaUsuarios({ usuarios }) {
  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          <img
            src={usuario.urlImagen}
            alt={`Retrato de ${usuario.nombre} ${usuario.apellidos}`}
            width="50"
            height="50"
          />
          <div>
            <span>
              {usuario.nombre} {usuario.apellidos}
            </span>
            <span>Fecha de nac: {usuario.fechaNacimiento}</span>
            <span>Email: {usuario.email}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}