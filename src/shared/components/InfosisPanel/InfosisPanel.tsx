import React, { useState, useEffect, useRef } from "react";
import { Panel, PanelToggleEvent } from "primereact/panel";
import { Button } from "primereact/button";
import "./styles.css";

interface InfosisPanelProps {
  children: React.ReactNode;
  showMinimizeButton?: boolean;
  showMaximizeButton?: boolean;
  showRefreshButton?: boolean;
  showCloseButton?: boolean;
  refreshButtonHandler?: () => void;
}

export default function InfosisPanel({
  children,
  showMinimizeButton = true,
  showMaximizeButton = true,
  showRefreshButton = true,
  showCloseButton = true,
  refreshButtonHandler
}: InfosisPanelProps) {
  const [maximized, setMaximized] = useState(false);
  const [destroyed, setDestroyed] = useState(false);
  const panelRef = useRef<any>(null);

  const toggleMaximized = () => setMaximized(prev => !prev);
  const destroyPanel = () => setDestroyed(true);

  useEffect(() => {
    if (panelRef.current) {
      if (maximized) {
        panelRef.current.expand();
      }
    }
  }, [maximized]);

  const header = (options: { className: string, togglerElement: React.ReactElement }) => {
    const headerClassName = `${options.className} justify-content-space-between`;
    const buttonBaseClass = "p-panel-header-icon p-panel-toggler p-link";

    return (
      <div className={headerClassName}>
        <div>Solicitação de Financiamento</div>
        <div>
          {showMaximizeButton && (
            <Button unstyled className={buttonBaseClass} icon={maximized ? "pi pi-window-minimize" : "pi pi-window-maximize"} onClick={toggleMaximized} />
          )}
          {showRefreshButton && (
            <Button unstyled className={buttonBaseClass} icon="pi pi-refresh" onClick={refreshButtonHandler} />
          )}
          {options.togglerElement}
          {showCloseButton && (
            <Button unstyled className={buttonBaseClass} icon="pi pi-times" onClick={destroyPanel} />
          )}
        </div>
      </div>
    );
  };

  // const checkMaximizedState = (event: PanelToggleEvent) => {
  //   debugger
  // }

  return !destroyed ? (
    <Panel
      ref={panelRef}
      headerTemplate={header}
      toggleable={showMinimizeButton}
      className={maximized ? "fullscreen" : ""}
      // onToggle={checkMaximizedState}
    >
      {children}
    </Panel>
  ) : null;
}
