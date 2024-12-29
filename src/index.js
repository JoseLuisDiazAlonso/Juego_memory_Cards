import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de usar la versión correcta de React DOM
import App from './App'; // Importa el archivo que contiene tus rutas
import './index.css'; // Si tienes un archivo de estilos globales

// Este es el punto de entrada de tu aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza tu componente App dentro del elemento con id 'root'
root.render(
  <React.StrictMode>
    <App /> {/* Aquí es donde tu App contiene todas las rutas */}
  </React.StrictMode>
);