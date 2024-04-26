import React, { useEffect, useState } from 'react';

import InfosisBreadCrumb from '../../../../../shared/components/InfosisBreadCrumb/InfosisBreadCrumb';
import InfosisDropdown from '../../../../../shared/components/InfosisDropdown/InfosisDropdown';
import InfosisPanel from '../../../../../shared/components/InfosisPanel/InfosisPanel';
import InfosisToolbar from '../../../../../shared/components/InfosisToolbar/InfosisToolbar';
import Navbar from '../../../../../shared/components/Navbar/Navbar';
import Sidebar from '../../../../../shared/components/Sidebar/Sidebar';
import Formulario from './Formulario';

export default function Home() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle("Solicitação de Financiamento");
  }, []);

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

  return (
    <React.Fragment>
      <div
        style={{
          display: "block",
        }}
      >
        <Navbar items={navbarItems} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Sidebar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 15,
              width: "100%",
            }}
          >
            <InfosisBreadCrumb />
            <InfosisToolbar />
            <InfosisPanel title={title}>
              <Formulario />
            </InfosisPanel>
            {/*
            <InfosisModal />
            */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
