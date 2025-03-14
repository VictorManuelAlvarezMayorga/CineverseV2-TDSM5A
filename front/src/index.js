import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación única de Bootstrap
import App from "./App";
import FilterMovie from "./MovieM.js"; // Asumiendo que es tu componente de inicio de sesión
import RegisterForm from "./RegisterForm.js";
import MovieReseña from "./reseñamovie.js";

// Definir rutas en el orden deseado
export const routes = createBrowserRouter([
  {
    path: "/Registro",
    element: <RegisterForm />, // Registro primero
  },
  {
    path: "/Inicio",
    element: <FilterMovie />, // LogIn (Inicio de sesión)
  },
  {
    path: "/",
    element: <App />, // Página principal (Home)
  },
  {
    path: "/Reseña",
    element: <MovieReseña />, // Página para la Reseña
  }
]);

// Renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={routes} />
);
