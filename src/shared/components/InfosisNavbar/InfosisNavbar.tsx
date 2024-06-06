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
import { Calendar } from 'primereact/calendar';

export default function InfosisNavbar(props: { setSidebarVisible: any }) {
    const [empresa, setEmpresa] = useState(null);
    const [operacao, setOperacao] = useState(null);
    const [dataContrato, setdataContrato] = useState<null | Date>(null);
    const [opcaoDoMenu, setOpcaoDoMenu] = useState(null);

    const menuDoUsuario = [
        { name: 'Perfil', icon: 'pi pi-user' },
        { name: 'Configurações', icon: 'pi pi-cog' },
        { name: 'Sair', icon: 'pi pi-power-off' }
    ];

    const empresas = [
        { name: 'Bandes', code: 'BNDES' },
        { name: 'Banco do Brasil', code: 'BB' },
        { name: 'Caixa Econômica Federal', code: 'CEF' },
        { name: 'Banco do Nordeste', code: 'BNB' },
        { name: 'Banco da Amazônia', code: 'BASA' }
    ];

    const operacoes = [
        { name: 'Operação 1', code: 'OP1' },
        { name: 'Operação 2', code: 'OP2' },
        { name: 'Operação 3', code: 'OP3' },
        { name: 'Operação 4', code: 'OP4' },
        { name: 'Operação 5', code: 'OP5' }
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
                    value={empresa} onChange={(e) => setEmpresa(e.value)} options={empresas} optionLabel="name"
                    placeholder="Selecione a empresa"
                    style={{
                        width: '190px'
                    }}
                />
                <Calendar placeholder="Selecione o mês/ano do contrato"
                value={dataContrato} onChange={(e) => setdataContrato(e.value || null)} view="month" dateFormat="mm/yy"
                // showIcon
                // onShow={() => console.log('show')}
                // icon={() => <i className="pi pi-clock" />}
                />
                <Dropdown
                    value={operacao} onChange={(e) => setOperacao(e.value)} options={operacoes} optionLabel="name"
                    placeholder="Operações realizadas no mês"
                    className=""
                    style={{
                        width: '244px'
                    }}
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
                <div className='w-full justify-content-end hidden sm:block'>
                    <Dropdown
                        value={opcaoDoMenu} onChange={(e) =>
                            //prevent default behavior
                            e.preventDefault()
                            // setOpcaoDoMenu(e.value)
                        } options={menuDoUsuario} optionLabel="name"
                        placeholder="Nome do usuário"
                        style={{
                            width: '166px'
                        }}
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
