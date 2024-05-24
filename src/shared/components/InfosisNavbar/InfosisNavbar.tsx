import './styles.css';
import logobandes from '../../assets/logo-bandes.png';

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import React, { useState } from 'react';
import InfosisDropdown from '../InfosisDropdown/InfosisDropdown';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

export default function InfosisNavbar(props: { setSidebarVisible: any }) {
    const [selectedCity, setSelectedCity] = useState(null);
    
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const itemRenderer = (item: { icon: string | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; badge: any; shortcut: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );

    const menu = () => {
        return (
            <div className='hidden xl:flex xl:flex-inline gap-2 ml-4'>
                <Dropdown
                    value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                    placeholder="Select a City"
                />
                <Dropdown
                value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                    placeholder="Selecione o mês/ano do contrato"
                    className=""
                />
                <Dropdown
                value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                    placeholder="Operações realizadas no mês"
                    className=""
                />
            </div>
        )
    }

    const logo = () => {
        return (
            <div className='flex flex-row xl:mr-8'>
                <div>
                    <img alt="logo" src={logobandes} height="40" className="mr-3"></img>
                </div>
                <div className='w-full justify-content-end xl:hidden'>
                    <Button icon="pi pi-bars" onClick={props.setSidebarVisible} />
                </div>
            </div>
        );
    }

    const avatar = () => {
        return (
            <div className="flex align-items-center gap-2">
                <div className='flex align-items-center'>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                </div>
                <div className='w-full justify-content-end'>
                    <Dropdown
                    value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Nome do usuário"
                        className="input-text-sm bg-transparent"
                    // dropdownIcon="pi pi-caret-down"
                    />
                </div>
                {/* <div className='w-full justify-content-end hidden xl:block'>
                    <Dropdown
                        placeholder="Nome do usuário"
                        className="input-text-sm bg-transparent"
                    />
                </div> */}
                {/* <div className='w-full justify-content-end xl:hidden'>
                    <Button icon="pi pi-bars" onClick={() => props.setSidebarVisible} />
                </div> */}
            </div>
        );
    }

    return (
        <div className='infosis-navbar flex flex-inline justify-content-between w-full'>
            {logo()}
            {menu()}
            {avatar()}
        </div>
    )
}
