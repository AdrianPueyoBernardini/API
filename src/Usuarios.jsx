import { useState } from 'react';
import { ListaUsuarios, CargadorUsuarios } from './index.jsx';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  return (
    <main>
      <CargadorUsuarios onUsuariosCargados={setUsuarios} />
      <ListaUsuarios usuarios={usuarios} />
    </main>
  );
}

export default Usuarios;