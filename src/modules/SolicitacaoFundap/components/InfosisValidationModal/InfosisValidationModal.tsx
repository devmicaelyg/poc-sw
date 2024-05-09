import './styles.css';

import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import React from 'react';

import InfosisDataTable from '../../../../shared/components/InfosisDataTable/InfosisDataTable';
import InfosisFieldset from '../../../../shared/components/InfosisFieldset/InfosisFieldset';
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
      className={`infosis-validation-modal ${className}`}
    >
      <div className='grid'>
        <div className='col-12'>
          <InfosisFieldset className='font-bold text-red-600 text-center'>
            {errorMessage}
          </InfosisFieldset>
        </div>
        <div className='col-12'>
          <InfosisFieldset legend='Lista de Verificação'>
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
          </InfosisFieldset>
        </div>
        <div className='col-12'>
          <InfosisFieldset legend='Detalhes'>
            <div className='overflow-auto h-10rem text-sm'>
              {details}
            </div>
          </InfosisFieldset>
        </div>
      </div>
    </InfosisModal>
  );
};

export default InfosisValidationModal;
