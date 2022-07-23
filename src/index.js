import React from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from "./App";
//import './destructuracion';


const container = document.getElementById('root');

const root = createRoot(container); 
root.render(<App tab="home" />);

// Nota: este es el index que monta la aplicacion
