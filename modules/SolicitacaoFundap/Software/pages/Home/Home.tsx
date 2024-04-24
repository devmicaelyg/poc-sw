import React from "react";

import Navegacao from "../../../../../shared/components/InfosisBreadCrumb/InfosisBreadCrumb";
import InfosisModal from "../../../../../shared/components/InfosisModal/InfosisModal";
import Navbar from "../../../../../shared/components/Navbar/Navbar";
import MenuLateral from "../../../../../shared/components/Sidebar/Sidebar";
import Formulario from "./Formulario";
import Formulario2 from "./Formulario2";
import InfosisBreadCrumb from "../../../../../shared/components/InfosisBreadCrumb/InfosisBreadCrumb";
import Sidebar from "../../../../../shared/components/Sidebar/Sidebar";
import InfosisDropdown from "../../../../../shared/components/InfosisDropdown/InfosisDropdown";
import InfosisToolbar from "../../../../../shared/components/InfosisToolbar/InfosisToolbar";
import InfosisPanel from "../../../../../shared/components/InfosisPanel/InfosisPanel";

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
          <div>
            <Sidebar />
          </div>
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
            <InfosisPanel>
              <Formulario />
            </InfosisPanel>
            <hr />
            <InfosisModal />
            <hr />
            <InfosisPanel>
              <Formulario2 />
            </InfosisPanel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
