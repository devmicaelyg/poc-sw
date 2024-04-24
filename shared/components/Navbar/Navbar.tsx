import 'primeicons/primeicons.css';

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Menubar } from 'primereact/menubar';
import React from 'react';

import logobandes from '../../assets/logo-bandes.png';
import InfosisDropdown from '../InfosisDropdown/InfosisDropdown';
import  './styles.css'

export default function Navbar(props: any) {
 
  const start = (
    <div
      style={{
        width: 280,
      }}
    >
      <img alt="logo" src={logobandes} height="40" className="mr-2"></img>
    </div>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <Avatar icon="pi pi-user" size="large" shape="circle" />
    </div>
  );

  return (
    <div className="card">
      <Menubar
        model={props.items}
        start={start}
        end={end}
        style={{
          backgroundColor: "#2897ca",
          border: "none",
          borderRadius: 0
        }}
      />
    </div>
  );
}
