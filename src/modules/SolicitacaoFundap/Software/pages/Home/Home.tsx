import React, { useEffect, useState } from 'react';

import InfosisBreadCrumb from '../../../../../shared/components/InfosisBreadCrumb/InfosisBreadCrumb';
import InfosisDropdown from '../../../../../shared/components/InfosisDropdown/InfosisDropdown';
import InfosisNavbar from '../../../../../shared/components/InfosisNavbar/InfosisNavbar';
import InfosisPanel from '../../../../../shared/components/InfosisPanel/InfosisPanel';
import InfosisSidebar from '../../../../../shared/components/InfosisSidebar/InfosisSidebar';
import Formulario from './Formulario';
import Formulario2 from './Formulario2';

export default function Home() {
  const navbarItems = [
    {
      template: (item: any) => (
        <InfosisDropdown
          placeholder="Selecione a empresa"
          className="w-full md:w-15rem"
        />
      ),
    },
    {
      template: (item: any) => (
        <InfosisDropdown
          placeholder="Selecione o mês/ano dop contrato"
          className="w-full md:w-21rem"
        />
      ),
    },
    {
      template: (item: any) => (
        <InfosisDropdown
          placeholder="Operações realizadas no mês"
          className="w-full md:w-19rem"
        />
      ),
    },
  ];

  const toolbarItems = [
    {
      text: "Incluir Solicitação",
      icon: "pi pi-file",
      handler: () => {
        alert("Incluir Solicitação");
      },
    },
    {
      text: "Abrir Solicitação",
      icon: "pi pi-folder-open",
      handler: () => {
        alert("Abrir Solicitação");
      },
    },
    {
      text: "Excluir Solicitação",
      icon: "pi pi-trash",
      handler: () => {
        alert("Excluir Solicitação");
      },
    },
    {
      text: "Salvar Solicitação",
      icon: "pi pi-save",
      handler: () => {
        alert("Salvar Solicitação");
      },
    },
  ];

  const toolbarItems2 = [
    {
      text: "Incluir Solicitação",
      icon: "pi pi-file",
      handler: () => {
        alert("Incluir Solicitação");
      },
    },
    {
      text: "Abrir Solicitação",
      icon: "pi pi-folder-open",
      handler: () => {
        alert("Abrir Solicitação");
      },
    }
  ];

  return (
    <React.Fragment>
      <div
        style={{
          display: "block",
        }}
      >
        <InfosisNavbar items={navbarItems} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <InfosisSidebar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 15,
              width: "100%",
            }}
          >
            <InfosisBreadCrumb />
            <InfosisPanel
              title={"Solicitação de Financiamento"}
              toolbarItems={toolbarItems}
            >
              <Formulario />
              {/* <Formulario2 /> */}
            </InfosisPanel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
