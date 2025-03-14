import React from "react";
import ReactDOM from "react-dom/client"; // Importa desde react-dom/client
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FilterMovie from "./MovieM";
import RegisterForm from "./RegisterForm";
import MoviesData from "./moviesData";
import MovieReseña from "./reseñamovie"

import 'bootstrap/dist/css/bootstrap.min.css';




export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Inicio",
    element: <MoviesData />,
  },
  {
    path: "/Registro",
    element: <RegisterForm />,
  },
  {
    path: "/Reseña",
    element: <MovieReseña />,
  }

  
]);



const root = ReactDOM.createRoot(document.getElementById("root")); // Usa createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



































/**import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./MovieM";
import RegisterForm from "./RegisterForm";
import MoviesData from "./moviesData";
import MovieReseña from "./reseñamovie"


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inicio",
    element: <MoviesData />,
  },
  {
    path: "/Registro",
    element: <RegisterForm />,
  },
  {
    path: "/Reseña",
    element: <MovieReseña />,
  }

  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); */
