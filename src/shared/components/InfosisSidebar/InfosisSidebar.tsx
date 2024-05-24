import './styles.css';
import logobandes from '../../assets/logo-bandes.png';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';
import React, { useRef, useState } from 'react';


export default function InfosisSidebar(props: { visible: boolean, onHide: any }) {
    const items = [
        {
            label: "Solicitação de financiamento",
            url: "#",
        },
        {
            label: "Opção pelo FUNDAPSOCIAL",
            url: "#",
        },
        {
            label: "Pagamento de DUA",
            url: "#",
        },
        {
            label: "Assinaturas",
            url: "#",
        },
    ];

    const handleClick = () => {
        window.location.reload();
    };

    const menu = () => {
        return (<Menu
            model={items.map(item => ({ ...item, command: handleClick }))}
            className='infosis-sidebar-menu w-full h-full bg-primary border-none border-noround'
        />);
    }

    const fixedSidebar = () => {
        return (
            <div className='w-full h-full'>
                {menu()}
            </div>
        );
    }

    const header = () => {
        return (
            <div className="flex justify-content-center h-3rem">
                <img alt="logo" src={logobandes} className="mr-2"></img>
            </div>
        );
    }

    const overlaySidebar = () => (
        <div className="card flex justify-content-center">
            <Sidebar visible={props.visible} onHide={props.onHide}
                style={{
                    backgroundColor: "#49aedb",
                    color: "#fff",
                }}
                header={header()}
                className='infosis-sidebar-overlay'
            >
                {menu()}
            </Sidebar>
        </div>
    );

    return (
        <div className="h-full">
            {fixedSidebar()}
            {overlaySidebar()}
        </div>
    )
}
