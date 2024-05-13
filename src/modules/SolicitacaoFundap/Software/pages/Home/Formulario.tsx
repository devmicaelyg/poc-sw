import InfosisInput from "../../../../../shared/components/InfosisInput/InfosisInput";
import InfosisFieldset from "../../../../../shared/components/InfosisFieldset/InfosisFieldset";
import InfosisDataTable from "../../../../../shared/components/InfosisDataTable/InfosisDataTable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from "primereact/autocomplete";


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
  const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        let _items = Array.from(Array(10).keys()).map(item => item.toString()); // Convert the array of numbers to an array of strings
        setItems(event.query ? _items.map(item => event.query + '-' + item) : _items);
    }

    interface City {
        name: string;
        code: string;
    }

    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

  return (
    <div className="mb-3 col-12 grid">
      <InfosisFieldset legend="Identificação da solicitação">
        <div className="field grid">
          <label htmlFor="cfop" className="col-12 mb-2 md:col-3 md:mb-0">
            CFOP:
          </label>
          <div className="col-12 md:col-5">
            <AutoComplete
              value={selectedCity} suggestions={items} completeMethod={search} onChange={(e: AutoCompleteChangeEvent) => setValue(e.value)} dropdown className="operacao-solicitacao"
            />
          </div>
        </div>
        <div className="field grid">
          <label htmlFor="complementoCfop" className="col-12 mb-2 md:col-3 md:mb-0">
            Complemento CFOP:
          </label>
          <div className="col-12 md:col-9">
            <InputText id="complementoCfop" type="text" className="w-full" />
          </div>
        </div>
        <div className="field grid">
          <label htmlFor="aliquota" className="col-12 mb-2 md:col-3 md:mb-0">
            Aliquota (%):
          </label>
          <div className="col-12 md:col-5">
            <InputText id="aliquota" type="text" className="w-full" />
          </div>
        </div>
        <div className="field grid">
          <label htmlFor="valorOperacao" className="col-12 mb-2 md:col-3 md:mb-0">
            Valor da Operação:
          </label>
          <div className="col-12 md:col-5">
            <InputText id="valorOperacao" type="text" className="w-full" />
          </div>
        </div>
        <div className="field grid">
          <label htmlFor="baseCalculo" className="col-12 mb-2 md:col-3 md:mb-0">
            Base de Cálculo:
          </label>
          <div className="col-12 md:col-5">
            <InputText id="baseCalculo" type="text" className="w-full" />
          </div>
        </div>
        <div className="field grid">
          <label htmlFor="icms" className="col-12 mb-2 md:col-3 md:mb-0">
            ICMS:
          </label>
          <div className="col-12 md:col-5">
            <InputText id="icms" type="text" className="w-full" />
          </div>
        </div>
      </InfosisFieldset>
      <br />
      <InfosisFieldset
        legend="Produtos"
      >
        {/* <InfosisDataTable
        value={dados}
        >
          <Column field="code" header="Código"></Column>
          <Column field="name" header="Nome"></Column>
          <Column field="category" header="Categoria"></Column>
          <Column field="quantity" header="Quantidade"></Column>
        </InfosisDataTable> */}
      </InfosisFieldset>
    </div>
  );
}
