import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';

import InfosisDropdown from '../../../../../shared/components/InfosisDropdown/InfosisDropdown';
import InfosisPanel from '../../../../../shared/components/InfosisPanel/InfosisPanel';
import InfosisValidationModal, { ValidationError } from '../../../components/InfosisValidationModal/InfosisValidationModal';
import OperacaoDaSolicitacao from '../../../components/OperacaoDaSolicitacao/OperacaoDaSolicitacao';
import Formulario from './Formulario';
import { z } from 'zod';

const cfopOptions = [
  { name: 'Operação 1', code: '1' },
  { name: 'Operação 2', code: '2' },
  { name: 'Operação 3', code: '3' },
  { name: 'Operação 4', code: '4' },
  { name: 'Operação 5', code: '5' },
];

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

const schema = z.object({
  cfop: z.string({invalid_type_error: "CFOP é obrigatório", required_error: "CFOP é obrigatório"}).trim().min(1, 'CFOP é obrigatório'),
  complementoCfop: z.string().trim().min(1, 'Complemento CFOP é obrigatório'),
  aliquota: z.string().trim().min(1, 'Alíquota é obrigatória'),
  valorOperacao: z.string().trim().min(1, 'Valor da operação é obrigatório'),
  baseCalculo: z.string().trim().min(1, 'Base de cálculo é obrigatória'),
  icms: z.string().trim().min(1, 'ICMS é obrigatório'),
});

export default function Home() {
  const [modalAVisible, setmodalAVisible] = useState<boolean>(false);
  const [modalBVisible, setmodalBVisible] = useState<boolean>(false);
  const [modalCVisible, setmodalCVisible] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div className='block'>
        <div className='flex flex-row'>
          <div
            className='flex flex-column w-full p-3'
          >
            <div className='flex flex-column md:flex-row col-12 gap-2'>
              <Button
                label="Modal A"
                icon="pi pi-external-link"
                onClick={() => setmodalAVisible(true)}
                className='xs:w-full md:w-6 lg:w-2'
              />
              <Button
                label="Modal B"
                icon="pi pi-external-link"
                onClick={() => setmodalBVisible(true)}
                className='xs:w-full md:w-6 lg:w-2'
              />
              <Button
                label="Modal C"
                icon="pi pi-external-link"
                onClick={() => setmodalCVisible(true)}
                className='xs:w-full md:w-6 lg:w-2'
              />
            </div>
            <InfosisValidationModal
              header="Modal de Validação"
              visible={modalBVisible}
              onClose={() => setmodalBVisible(false)}
              onHide={() => setmodalBVisible(false)}
              details={details}
              validationErrors={ValidationErrors}
            >
            </InfosisValidationModal>
            <OperacaoDaSolicitacao
              header="Entradas do Estado - Operaçao Fundap"
              cfopOptions={cfopOptions}
              schema={schema}
              visible={modalCVisible}
              onSave={(data) => {
                setmodalCVisible(false)
                console.log(data)
              }}
              onClose={() => setmodalCVisible(false)}
              onHide={() => setmodalCVisible(false)}
            />
            <div className='flex flex-column col-12 gap-1'>
              <InfosisPanel
                title={"Solicitação de Financiamento"}
                toolbarItems={toolbarItems}
              >
                <Formulario />
                {/* <Formulario2 /> */}
              </InfosisPanel>
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
      </div>
    </React.Fragment >
  );
}
