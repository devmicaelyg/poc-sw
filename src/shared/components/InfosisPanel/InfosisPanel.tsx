import './styles.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';
import { Panel, PanelToggleEvent } from 'primereact/panel';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import fullscreenIcon from '../../assets/icons/fullscreen.svg';
import fullscreenExitIcon from '../../assets/icons/fullscreen_exit.svg';

import InfosisToolbar, { InfosisToolbarItem } from '../InfosisToolbar/InfosisToolbar';

interface InfosisPanelProps {
  children?: React.ReactNode;
  title: string;
  showMinimizeButton?: boolean;
  showMaximizeButton?: boolean;
  showRefreshButton?: boolean;
  showCloseButton?: boolean;
  toolbarItems?: InfosisToolbarItem[];
  refreshButtonHandler?: () => void;
}

export default function InfosisPanel({
  children,
  title,
  showMinimizeButton = true,
  showMaximizeButton = true,
  showRefreshButton = true,
  showCloseButton = true,
  toolbarItems = [],
  refreshButtonHandler
}: InfosisPanelProps) {
  const [maximized, setMaximized] = useState(false);
  const [destroyed, setDestroyed] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [className, setClassName] = useState("");

  const toggleMaximized = () => setMaximized(prev => !prev);
  const destroyPanel = () => setDestroyed(true);

  useEffect(() => {
    if (maximized) {
      setCollapsed(false);
    }

    setClassName(maximized ? "infosis-panel fullscreen" : "infosis-panel");
  }, [maximized]);

  const header = (options: { className: string, togglerElement: React.ReactElement }) => {
    const headerClassName = `${options.className} justify-content-space-between`;
    const buttonBaseClass = "p-panel-header-icon p-panel-toggler p-link";

    return (
      <div className={headerClassName}>
        <div>{title}</div>
        <div className='flex flex-row gap-1'>
          {showMaximizeButton && (
              <Button
                className={buttonBaseClass}
                icon={maximized ?
                  (<img className='pi text-900' src={fullscreenExitIcon} />)
                  :
                  (<img className='pi text-900' src={fullscreenIcon} />)
                }
                onClick={toggleMaximized} />
          )}
          {showRefreshButton && (
            <Button className={buttonBaseClass} icon="pi pi-refresh" onClick={refreshButtonHandler} />
          )}
          {options.togglerElement}
          {showCloseButton && (
            <Button className={buttonBaseClass} icon="pi pi-times" onClick={destroyPanel} />
          )}
        </div>
      </div>
    );
  };

  const checkMaximizedState = (event: PanelToggleEvent) => {
    if (maximized) {
      setClassName("infosis-panel");
      setMaximized(false);
      setCollapsed(false);
    }

    setCollapsed(prev => !prev)
  }

  const panelContent = (
    <Panel
      collapsed={collapsed}
      headerTemplate={header}
      toggleable={showMinimizeButton}
      onToggle={checkMaximizedState}
      className={`${className}`}
    >
      <InfosisToolbar items={toolbarItems} />
      {children}
    </Panel>
  );

  return (
    <React.Fragment>
      {!destroyed && (
        maximized ? createPortal(panelContent, document.body) : panelContent
      )}
    </React.Fragment>
  );
}
