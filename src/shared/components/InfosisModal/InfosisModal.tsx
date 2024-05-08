import React, { ReactNode } from 'react';
import { Dialog, DialogProps } from 'primereact/dialog';
import './styles.css';

export interface InfosisModalProps extends DialogProps {}

const InfosisModal: React.FC<InfosisModalProps> = ({
  className,
  ...props
}) => {

  return (
    <Dialog
      className={`infosis-modal ${className}`}
      {...props}
    />
  );
}

export default InfosisModal;
