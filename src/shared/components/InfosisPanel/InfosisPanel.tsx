import './styles.css';

import { Button } from 'primereact/button';
import { Panel, PanelToggleEvent } from 'primereact/panel';
import React, { useEffect, useRef, useState } from 'react';

interface InfosisPanelProps {
  children: React.ReactNode;
  title: string;
  showMinimizeButton?: boolean;
  showMaximizeButton?: boolean;
  showRefreshButton?: boolean;
  showCloseButton?: boolean;
  refreshButtonHandler?: () => void;
}

export default function InfosisPanel({
  children,
  title,
  showMinimizeButton = true,
  showMaximizeButton = true,
  showRefreshButton = true,
  showCloseButton = true,
  refreshButtonHandler
}: InfosisPanelProps) {
  const [maximized, setMaximized] = useState(false);
  const [destroyed, setDestroyed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [className, setClassName] = useState("");

  const toggleMaximized = () => setMaximized(prev => !prev);
  const destroyPanel = () => setDestroyed(true);

  useEffect(() => {

    if (maximized) {
      setCollapsed(false);
    }

    setClassName(maximized ? "fullscreen" : "");
  }, [maximized]);

  const header = (options: { className: string, togglerElement: React.ReactElement }) => {
    const headerClassName = `${options.className} justify-content-space-between`;
    const buttonBaseClass = "p-panel-header-icon p-panel-toggler p-link";

    return (
      <div className={headerClassName}>
        <div>{title}</div>
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

  const checkMaximizedState = (event: PanelToggleEvent) => {
    if (maximized) {
      setClassName("");
      setMaximized(false);
      setCollapsed(false);
    }

    setCollapsed(ref => !ref)
  }

  return !destroyed ? (
    <Panel
      collapsed={collapsed}
      headerTemplate={header}
      toggleable={showMinimizeButton}
      className={className}
      onToggle={checkMaximizedState}
      style={{ width: "100%" }}
    >
      {children}
    </Panel>
  ) : null;
}
