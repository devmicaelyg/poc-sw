import { DataTable, DataTableProps, DataTableValueArray } from 'primereact/datatable';
import React from 'react';


const InfosisDataTable: React.FC<DataTableProps<DataTableValueArray>> = ({
  className,
  ...props
}) => {
  return (
    <DataTable
      className={`infosis-datatable ${className}`}
      {...props}
    />
  );
}

export default InfosisDataTable;