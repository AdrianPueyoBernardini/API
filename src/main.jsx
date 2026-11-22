import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Usuarios from './Usuarios.jsx'
import Top from './Top.jsx'
import Description from './Description.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top texto="Bienvenido a la consulta de la aplicación"/>
    <Description texto="Web de consulta de usuarios, presiona en 'Mostrar usuarios' para ver el listado"/>
    <Usuarios/>
  </StrictMode>,
)
