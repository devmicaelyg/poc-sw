import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnEvent, ColumnEditorOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";

interface Product {
  id: string;
  code: string;
  valor1: string;
  description: string;
  image: string;
  total: number;
  category: string;
  valor2: number;
  inventoryStatus: string;
  rating: number;
}

interface ColumnMeta {
  field: string;
  header: string;
}

interface Dado {
  id: string;
  code: string;
  valor1: number;
  valor2: number;
  valor3: number;
}

const dados: Dado[] = [
  {
    id: "1",
    code: "Débito no período",
    valor1: 5,
    valor2: 28,
    valor3: 10,
  },
  {
    id: "2",
    code: "Outros débitos",
    valor1: 20,
    valor2: 25,
    valor3: 7,
  },
  {
    id: "3",
    code: "Estorno de débitos",
    valor1: 5,
    valor2: 15,
    valor3: 4,
  },
];

export default function Formulario2() {
  const [products, setProducts] = useState<Product[] | null>(null);

  const columns: ColumnMeta[] = [
    { field: "code", header: "" },
    { field: "valor1", header: "Fundap 135-0" },
    { field: "valor2", header: "Fundap 135-0" },
    { field: "valor3", header: "Não Fundap" },
    { field: "total", header: "Total" },
  ];

  useEffect(() => {
    setProducts(null);
  }, []);

  const isPositiveInteger = (val: any) => {
    let str = String(val);

    str = str.trim();

    if (!str) {
        return false;
    }

    str = str.replace(/^0+/, '') || '0';
    let n = Math.floor(Number(str));

    return n !== Infinity && String(n) === str && n >= 0;
};

  const onCellEditComplete = (e: ColumnEvent) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case "valor1":
      case "valor2":
      case "valor3":
        if (isPositiveInteger(newValue)) rowData[field] = newValue;
        else event.preventDefault();
                break;

      default:
        if (newValue.trim().length > 0) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }
  };

  const cellEditor = (options: ColumnEditorOptions) => {
    switch (options.field) {
      case "valor1":
      case "valor2":
      case "valor3":
        return priceEditor(options);
    }

    return textEditor(options);
  };

  const textEditor = (options: ColumnEditorOptions) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          options.editorCallback ? e.target.value : null
        }
        onKeyDown={(e) => e.stopPropagation()}
      />
    );
  };

  const priceEditor = (options: ColumnEditorOptions) => {
    return <InputNumber value={options.value} onValueChange={(e: InputNumberValueChangeEvent) => options.editorCallback?(e.value) : null} mode="currency" currency="USD" locale="en-US" onKeyDown={(e) => e.stopPropagation()} />;
};

  const totalBodyTemplate = (rowData: Dado) => {
    const total = rowData.valor1 + rowData.valor2 + rowData.valor3;
    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
      <DataTable
        editMode="cell"
        value={dados}
        tableStyle={{ minWidth: "50rem" }}
      >
        {columns.map(({ field, header }) => {
          return (
            <Column
              key={field}
              field={field}
              header={header}
              style={{ width: "25%" }}
              body={field === "total" && totalBodyTemplate}
              editor={
                field !== "code" && field !== "total"
                  ? (options) => cellEditor(options)
                  : null
              } // Conditionally add editor based on field
              onCellEditComplete={onCellEditComplete}
            />
          );
        })}
      </DataTable>
  );
}
