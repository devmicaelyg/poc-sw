import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";

export default function InfosisBreadCrumb() {
  const items = [
    { label: "Electronics" },
    { label: "Computer" },
    { label: "Accessories" },
    { label: "Keyboard" },
    { label: "Wireless" },
  ];
  const home = { icon: "pi pi-home", url: "https://primereact.org" };

  //   return (
  //     <BreadCrumb
  //       model={items}
  //       home={home}
  //       style={{
  //         height: 30,
  //         border: "none",
  //         marginBottom: 20,
  //       }}
  //     />
  //   );

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: '5px'
        }}
      >
        <div>
          <p>Home</p>
        </div>
        <div><p>/</p></div>
        <div>
          <p>Solicitação de Financiamento</p>
        </div>
      </div>
    </React.Fragment>
  );
}
