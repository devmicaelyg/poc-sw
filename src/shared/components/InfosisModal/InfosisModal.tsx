import React, { ReactNode } from 'react';
import { Dialog, DialogProps } from 'primereact/dialog';
import './styles.css';

export interface InfosisModalProps extends DialogProps { }

const InfosisModal: React.FC<InfosisModalProps> = ({
  className,
  ...props
}) => {

  return (
    <Dialog
      resizable={false}
      draggable={false}
      {...props}
      className={`infosis-modal ${className}`}
    />
  );
}

export default InfosisModal;
