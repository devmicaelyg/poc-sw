import './styles.css';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React, { useEffect, useState } from 'react';

export interface InfosisModalProps {
  
}

export default function InfosisModal(props: any) {
  const [visible, setVisible] = useState<boolean>(props.visible);

  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible])

  const footerContent = (
    <div className='infosis-modal-footer'>
      <Button
        label="Fechar"
        onClick={() => setVisible(false)}
        severity="secondary"
        className='infosis-modal-btn-fechar'
        outlined
      />
      <Button
        label="Salvar"
        onClick={() => setVisible(false)}
        severity="success"
        className='infosis-modal-btn-salvar'
      />
    </div>
  );

  return (
      <Dialog
        header="Entradas do Estado - Operações Não Fundap"
        visible={visible}
        onHide={() => setVisible(false)}
        footer={footerContent}
        className='infosis-modal'
      >
        {props.children}
       </Dialog>
  );
}
