import React from "react";
import "./styles.css";
import { PrimeIcons } from "primereact/api";

export default function InfosisToolbar() {
  return (
    <React.Fragment>
      <div className="infosis-toolbar">
        <ul>
          <li>
            <i className="pi pi-file"></i>
            Incluir Solicitação
          </li>
          <li>
            <i className="pi pi-folder-open"></i>
            Abrir Solicitação
          </li>
          <li>
            <i className="pi pi-trash"></i>
            Excluir Solicitação
          </li>
          <li>
            <i className="pi pi-save"></i>
            Salvar Solicitação
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
