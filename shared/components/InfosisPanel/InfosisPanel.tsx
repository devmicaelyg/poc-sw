import React, { useState } from "react";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import "./styles.css";

export default function InfosisPanel(props: any) {
  const [maximized, setMaximized] = useState(false);
  const [destroyed, setDestroyed] = useState(false);

  const toggleMaximized = () => {
    setMaximized(!maximized);
  };

  const destroyPanel = () => {
    setDestroyed(true);
  };

  const panelHeader = (options: {
    className: any;
    togglerElement: React.ReactElement<
      any,
      string | React.JSXElementConstructor<any>
    >;
  }) => {
    const className = `${options.className} justify-content-space-between`;

    return (
      <div className={className}>
        <div>Solicitação de Financiamento</div>
        <div>
          <Button icon="pi pi-times" onClick={destroyPanel} />
          {options.togglerElement}
          <Button
            icon={maximized ? "pi pi-window-minimize" : "pi pi-window-maximize"}
            onClick={toggleMaximized}
          />
        </div>
      </div>
    );
  };

  if (destroyed) {
    return null;
  }

  return (
    <Panel
      headerTemplate={panelHeader}
      toggleable
      className={maximized ? "fullscreen" : undefined}
      collapsed={maximized}
      onCollapse={() => setMaximized(false)}
    >
      {props.children}
    </Panel>
  );
}
