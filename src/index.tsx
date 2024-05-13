import "./index.css";

import { PrimeReactProvider } from "primereact/api";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import './shared/themes/lara-light/indigo/theme.css'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
