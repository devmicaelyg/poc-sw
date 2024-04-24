import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';

export default function InfosisDataTable(props: any) {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    setDados(props.Data);
  }, [props.Data]);

  console.log(props.wololo)

  return (
      <DataTable value={dados} tableStyle={{ minWidth: "50rem" }}>
        {props.children}
      </DataTable>
  );
}
