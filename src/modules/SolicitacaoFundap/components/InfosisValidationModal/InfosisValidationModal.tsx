import './styles.css';

import { Button } from 'primereact/button';
import React from 'react';

import InfosisFieldset from '../../../../shared/components/InfosisFieldset/InfosisFieldset';
import InfosisModal, { InfosisModalProps } from '../../../../shared/components/InfosisModal/InfosisModal';

export interface InfosisValidationModalProps extends InfosisModalProps {
  onSave: () => void;
  onClose: () => void;
}

const InfosisValidationModal: React.FC<InfosisValidationModalProps> = ({ onClose, onSave, className, ...props }) => {
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
      className={`infosis-validation-modal w-8	${className}`}
      {...props}
    >
      <div className='grid'>
        <div className='col-12'>
          <InfosisFieldset className='infosis-validation-modal-error-message text-center'>
            A Solicitação não está apta para envios. Favor corrigir os itens indicados.
          </InfosisFieldset>
        </div>
        <div className='col-12'>
          <InfosisFieldset
            legend='Lista de Verificação'
            className='infosis-validation-modal-list h-10rem'>
          </InfosisFieldset>
        </div>
        <div className='col-12'>
          <InfosisFieldset
            legend='Detalhes'
            className='infosis-validation-modal-list h-10rem'>
          </InfosisFieldset>
        </div>
      </div>
    </InfosisModal>
  );
};

export default InfosisValidationModal;
