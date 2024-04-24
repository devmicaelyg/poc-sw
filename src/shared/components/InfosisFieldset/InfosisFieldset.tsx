import { Fieldset } from "primereact/fieldset";
import React from "react";

export default function InfosisFieldset(props: any) {
  return (
    <React.Fragment>
      <Fieldset
        legend={props.Title}
        unstyled
        style={{
          border: "1px solid #c2c6cc",
          borderRadius: 20,
        }}
      >
        {props.children}
      </Fieldset>
    </React.Fragment>
  );
}
