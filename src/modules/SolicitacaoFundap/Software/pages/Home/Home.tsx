import './styles.css';

import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';

import InfosisBreadCrumb from '../../../../../shared/components/InfosisBreadCrumb/InfosisBreadCrumb';
import InfosisDropdown from '../../../../../shared/components/InfosisDropdown/InfosisDropdown';
import InfosisNavbar from '../../../../../shared/components/InfosisNavbar/InfosisNavbar';
import InfosisPanel from '../../../../../shared/components/InfosisPanel/InfosisPanel';
import InfosisSidebar from '../../../../../shared/components/InfosisSidebar/InfosisSidebar';
import ModalTipoA from '../../../components/ModalTipoA/ModalTipoA';
import Formulario from './Formulario';
import InfosisValidationModal, { ValidationError } from '../../../components/InfosisValidationModal/InfosisValidationModal';

export default function Home() {
  const [modalAVisible, setmodalAVisible] = useState<boolean>(false);
  const [modalBVisible, setmodalBVisible] = useState<boolean>(false);

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
  
  const ValidationErrors: ValidationError[] = [
    {
      id: "1",
      validation: "Nome",
      description: "Nome é obrigatório",
    },
    {
      id: "2",
      validation: "Tipo de Documento",
      description: "Tipo de Documento é obrigatório",
    },
    {
      id: "3",
      validation: "Numero do Documento",
      description: "Numero do Documento é obrigatório",
    }
  ];

  const details = "Ao menos um dos campos obrigatórios não foi preenchido. Favor verificar os campos indicados.";

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
            <div className='grid col-12 gap-2'>
              <Button
                label="Abrir Modal Tipo A"
                icon="pi pi-external-link"
                onClick={() => setmodalAVisible(true)}
                className='w-3'
              />
              <Button
                label="Abrir Modal Tipo B"
                icon="pi pi-external-link"
                onClick={() => setmodalBVisible(true)}
                className='w-3'
              />
            </div>
            <ModalTipoA
              header="Modal Tipo A"
              visible={modalAVisible}
              onClose={() => setmodalAVisible(false)}
              onSave={() => setmodalAVisible(false)}
              onHide={() => setmodalAVisible(false)}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ModalTipoA>
            <InfosisValidationModal
              header="Modal de Validação"
              visible={modalBVisible}
              onClose={() => setmodalBVisible(false)}
              onHide={() => setmodalBVisible(false)}
              details={details}
              validationErrors={ValidationErrors}
            >
            </InfosisValidationModal>
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
