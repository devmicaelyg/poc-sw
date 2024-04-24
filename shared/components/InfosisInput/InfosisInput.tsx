import { useState } from "react";
import { InputText } from "primereact/inputtext";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";

export default function InfosisInput(props: any) {
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState<number>(0);

  const height = 35;

  const teste = () => {
    switch (props.tipo) {
      case "text":
        return (
          <InputText
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            style={{
              height: height,
              width: `calc(100% - ${props.labelWidth})`,
            }}
          />
        );
      case "number":
        return (
          <InputNumber
            inputId="integeronly"
            value={numberValue}
            onValueChange={(e: InputNumberValueChangeEvent) => setNumberValue(Number(e.value))}
            style={{
              height: height,
              width: `calc(100% - ${props.labelWidth})`,
            }}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        width: props.width,
      }}
    >
      <div
        style={{
          width: props.labelWidth,
        }}
      >
        <label>{props.label}</label>
      </div>
      {teste()}
    </div>
  );
}
