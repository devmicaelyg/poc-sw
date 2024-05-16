import './styles.css';

import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { Fieldset } from 'primereact/fieldset';
import React from 'react';

import InfosisDataTable from '../../../../shared/components/InfosisDataTable/InfosisDataTable';
import InfosisModal, { InfosisModalProps } from '../../../../shared/components/InfosisModal/InfosisModal';

export interface ValidationError {
  id: string;
  validation: string;
  description: string;
}

export interface InfosisValidationModalProps extends InfosisModalProps {
  validationErrors?: ValidationError[]
  details?: string;
  onClose: () => void;
}

const InfosisValidationModal: React.FC<InfosisValidationModalProps> = ({
  validationErrors,
  details,
  className,
  onClose,
  ...props
}) => {

  const errorMessage = 'A Solicitação não está apta para envios. Favor corrigir os itens indicados.';

  const footer = (
    <div className='infosis-validation-modal-footer'>
      <Button
        label="Fechar"
        onClick={onClose}
        className='infosis-validation-modal-btn-fechar'
        severity="secondary"
        outlined
      />
    </div>
  );

  return (
    <InfosisModal
      footer={footer}
      {...props}
      className={`infosis-validation-modal sm:w-11 md:w-11 lg:w-11 xl:w-12 ${className}`}
    >
      <div className='grid'>
        <div className='col-12'>
          <Fieldset className='font-bold text-red-600 text-center'>
            {errorMessage}
          </Fieldset>
        </div>
        <div className='col-12'>
          <Fieldset legend='Lista de Verificação'>
            <div className='overflow-auto h-10rem'>
              <InfosisDataTable
                value={validationErrors}
                dataKey="id"
                emptyMessage="Sem informações"
              >
                <Column field="validation"
                  header="Validação"
                  headerClassName='infosis-error-col-header col-4 text-sm	'
                  bodyClassName='infosis-error-col-body p-2 text-sm	'
                />
                <Column field="description"
                  header="Descrição"
                  headerClassName='infosis-error-col-header col-8 text-sm	'
                  bodyClassName='infosis-error-col-body p-2 text-sm	'
                />
              </InfosisDataTable>
            </div>
          </Fieldset>
        </div>
        <div className='col-12'>
          <Fieldset legend='Detalhes'>
            <div className='overflow-auto h-10rem text-sm'>
              {details}
            </div>
          </Fieldset>
        </div>
      </div>
    </InfosisModal>
  );
};

export default InfosisValidationModal;
