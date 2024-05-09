import React from 'react';
import { Fieldset, FieldsetProps } from 'primereact/fieldset'; // Ensure FieldsetProps is imported correctly
import './styles.css';

export interface InfosisFieldsetProps extends FieldsetProps { }

const InfosisFieldset: React.FC<InfosisFieldsetProps> = ({
  className,
  ...props
}) => {
  return (
    <Fieldset
      className={`infosis-fieldset col-12 ${className}`}
      {...props}
    >
    </Fieldset>
  );
}

export default InfosisFieldset;