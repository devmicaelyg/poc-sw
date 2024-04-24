import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import InfosisInputText from "../InfosisInput/InfosisInput";
import  './styles.css'
import InfosisInput from "../InfosisInput/InfosisInput";
import InfosisFieldset from "../InfosisFieldset/InfosisFieldset";

export default function InfosisModal() {
  const [visible, setVisible] = useState<boolean>(false);
  const footerContent = (
    <div
    style={{
        borderRadius: '100px'
    }}
    >
      <Button
        label="Fechar"
        onClick={() => setVisible(false)}
        severity="secondary"
        outlined
      />
      <Button
        label="Salvar"
        onClick={() => setVisible(false)}
        severity="success"
      />
    </div>
  );

  const width = "180px";

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Abrir Modal"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Nova Solicitação de Financiamento Fundap"
        visible={visible}
        style={{ width: "50vw", borderRadius: "100px" }}
        onHide={() => setVisible(false)}
        maximizable
        headerStyle={{
          borderRadius: "50px 50px 0 0"
        }}
        footer={footerContent}
      >
        <div
          style={{
            marginBottom: 10,
            width: "100%",
          }}
        >
          <InfosisInput
            width="100%"
            label="Empresa Solicitante"
            labelWidth={width}
            tipo="text"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <InfosisInput
            width="50%"
            label="Mês do contrato"
            labelWidth={width}
            tipo="text"
          />
          <InfosisInput
            width="50%"
            label="Situação"
            labelWidth={width}
            tipo="text"
          />
        </div>
      </Dialog>
    </div>
  );
}
