# Practica de API con React

Esta practica consiste en una pequena aplicacion web hecha con React y Vite que consulta una API local para mostrar una lista de usuarios.

Al pulsar el boton **Mostrar usuarios**, el frontend realiza una peticion HTTP al backend y, si todo sale bien, representa los datos recibidos: nombre, apellidos, correo electronico, fecha de nacimiento y fotografia.

## Tecnologias

- React
- Vite
- JavaScript
- API HTTP creada con el modulo `http` de Node.js

## Como funciona

1. El backend almacena un listado de usuarios en `backend/api.js`.
2. Cuando se recibe una peticion `GET` a `/api/usuarios`, devuelve el listado en formato JSON.
3. El componente `CargadorUsuarios` realiza la peticion desde el frontend.
4. Los usuarios recibidos se guardan en el componente padre.
5. El componente `ListaUsuarios` muestra la informacion en una lista.

## Ejecucion

Hay que iniciar el backend y el frontend en terminales distintas.

### 1. Iniciar la API

Desde la carpeta `api`:

```bash
node backend/api.js
```

La API se ejecutara en `http://localhost:3000`.

### 2. Iniciar React

En otra terminal, desde la carpeta `api`:

```bash
npm install
npm run dev
```

Abre la direccion que muestre Vite, normalmente `http://localhost:5173`.

## Endpoints

- `GET http://localhost:3000/api/usuarios`: devuelve el listado de usuarios.
