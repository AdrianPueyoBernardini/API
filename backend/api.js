// Importas el módulo 'http' usando sintaxis ES Modules
import http from 'http';
import process from 'node:process';

// La API conserva el formato que consumen los componentes del cliente.
const usuarios = [
  {
    id: 1,
    nombre: 'ADRIAN',
    apellidos: 'HOMERO CELESTRIN CORRALES',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/men/1.jpg',
    fechaNacimiento: 'No disponible'
  },
  {
    id: 2,
    nombre: 'MANUEL',
    apellidos: 'LOREN FERRER',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/men/2.jpg',
    fechaNacimiento: 'No disponible'
  },
  {
    id: 3,
    nombre: 'ANA',
    apellidos: 'MAGALLON PICAZO SERAL',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/women/3.jpg',
    fechaNacimiento: 'No disponible'
  },
  {
    id: 4,
    nombre: 'ADRIAN',
    apellidos: 'PUEYO BERNARDINI',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/men/4.jpg',
    fechaNacimiento: '10/11/1999'
  },
  {
    id: 5,
    nombre: 'HECTOR',
    apellidos: 'REYES MEDINA',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/men/5.jpg',
    fechaNacimiento: 'No disponible'
  },
  {
    id: 6,
    nombre: 'ADRIAN ALEJANDRO',
    apellidos: 'RODRIGUEZ MACHADO',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/men/6.jpg',
    fechaNacimiento: 'No disponible'
  },
  {
    id: 7,
    nombre: 'LAURA',
    apellidos: 'ROYO LATORRE',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/women/7.jpg',
    fechaNacimiento: 'No disponible'
  },
  {
    id: 8,
    nombre: 'DANIEL',
    apellidos: 'SANCHEZ BARTOLOME',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/men/8.jpg',
    fechaNacimiento: 'No disponible'
  },
  {
    id: 9,
    nombre: 'MARCOS',
    apellidos: 'VILLAGOMEZ ESCANO',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/men/9.jpg',
    fechaNacimiento: 'No disponible'
  },
  {
    id: 10,
    nombre: 'ARTEM',
    apellidos: 'ZIMIN LITVAK',
    email: 'test@gmail.com',
    urlImagen: 'https://randomuser.me/api/portraits/men/10.jpg',
    fechaNacimiento: 'No disponible'
  }
];

// Crea el servidor HTTP con soporte básico para CORS
const server = http.createServer((req, res) => {
  // Permite las peticiones desde el frontend en el puerto 5173
  email: 'test@gmail.com',
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/api/usuarios') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(usuarios));
  } else {
    res.writeHead(404);
    res.end('No encontrado');
  }
});

// Se puede cambiar el puerto para ejecutar más de una instancia local.
const puerto = process.env.PORT || 3000;
server.listen(puerto, () => {
  console.log(`Servidor API muy sencillo en http://localhost:${puerto}`);
});