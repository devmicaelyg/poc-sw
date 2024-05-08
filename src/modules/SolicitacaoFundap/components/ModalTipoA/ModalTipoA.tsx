import './styles.css';

import { Button } from 'primereact/button';
import React from 'react';

import InfosisModal, { InfosisModalProps } from '../../../../shared/components/InfosisModal/InfosisModal';

export interface ModalTipoAProps extends InfosisModalProps {
  onSave: () => void;
  onClose: () => void;
}

const ModalTipoA: React.FC<ModalTipoAProps> = ({ onClose, onSave, className, ...props }) => {
  const footer = (
    <div className='infosis-modal-a-footer'>
      <Button
        label="Fechar"
        onClick={onClose}
        className='infosis-modal-a-btn-fechar'
        severity="secondary"
        outlined
      />
      <Button
        label="Salvar"
        onClick={onSave}
        className='infosis-modal-a-btn-salvar'
        severity="success"
      />
    </div>
  );

  return (
    <InfosisModal
      footer={footer}
      className={`infosis-modal-a w-8 ${className}`}
      {...props}
    />
  );
};

export default ModalTipoA;
