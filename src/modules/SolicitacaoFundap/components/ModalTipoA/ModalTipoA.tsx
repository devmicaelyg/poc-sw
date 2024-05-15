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
    <div className='flex flex-wrap justify-content-center sm:justify-content-end gap-2'>
      <Button
        label="Fechar"
        onClick={onClose}
        severity="secondary"
        outlined
      />
      <Button
        label="Salvar"
        onClick={onSave}
        severity="success"
      />
    </div>
  );

  return (
    <InfosisModal
      footer={footer}
      className={`infosis-modal-a ${className} sm:w-11 md:w-11 lg:w-11 xl:w-12`}
      {...props}
    />
  );
};

export default ModalTipoA;
