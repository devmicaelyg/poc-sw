import React from 'react';
import { Fieldset, FieldsetProps } from 'primereact/fieldset'; // Ensure FieldsetProps is imported correctly
import './styles.css';

export interface InfosisFieldsetProps extends FieldsetProps { }

export default function InfosisFieldset(props: InfosisFieldsetProps) {
  return (
    <Fieldset
      {...props}
      className={`infosis-fieldset col-12 ${(props.className || '')}`}
    >
    </Fieldset>
  );
}
