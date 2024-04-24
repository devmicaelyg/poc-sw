import InfosisInput from "../../../../../shared/components/InfosisInput/InfosisInput";
import InfosisFieldset from "../../../../../shared/components/InfosisFieldset/InfosisFieldset";
import InfosisDataTable from "../../../../../shared/components/InfosisDataTable/InfosisDataTable";
import { Column } from "primereact/column";


interface Dado {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
}

const dados: Dado[] = [
  {
    id: "1",
    code: "ABC123",
    name: "Produto A",
    category: "Categoria 1",
    quantity: 10,
  },
  {
    id: "2",
    code: "DEF456",
    name: "Produto B",
    category: "Categoria 2",
    quantity: 20,
  },
  {
    id: "3",
    code: "GHI789",
    name: "Produto C",
    category: "Categoria 3",
    quantity: 15,
  },
];

export default function InfosisFormTest() {
  const width = "180px";

  return (
    <div className="card">
      <InfosisFieldset Title="Identificação da solicitação">
        <div
          style={{
            marginBottom: 10,
            width: "100%",
          }}
        >
          <InfosisInput
            width="100%"
            label="Empresa Solicitante"
            labelWidth={width}
            tipo="text"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <InfosisInput
            width="50%"
            label="Mês do contrato"
            labelWidth={width}
            tipo="text"
          />
          <InfosisInput
            width="50%"
            label="Situação"
            labelWidth={width}
            tipo="text"
          />
        </div>
      </InfosisFieldset>
      <hr />
      <InfosisFieldset
      Title="DataTable"
      >
        <InfosisDataTable
        Data={dados}
        >
          <Column field="code" header="Código"></Column>
          <Column field="name" header="Nome"></Column>
          <Column field="category" header="Categoria"></Column>
          <Column field="quantity" header="Quantidade"></Column>
        </InfosisDataTable>
      </InfosisFieldset>
    </div>
  );
}
