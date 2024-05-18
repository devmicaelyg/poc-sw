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
    const fixedSidebar = () => {
        return (
            <Menu
                model={items.map(item => ({ ...item, command: handleClick }))}
                style={{
                    // position: "relative",
                    // left: 0,
                    // top: 63,
                    // height: "100vh",
                    // width: 280,
                    // border: 'none',
                    // borderRadius: 0,
                    // backgroundColor: "#49aedb",
                    // display: "block",
                    backgroundColor: "#49aedb",
                    height: "100%",
                    width: '100%',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    borderRadius: 0
                    // border: 'none',
                    // borderRadius: 0
                }}
                className='hidden lg:block col-fixed'
            />
        );
    }

    const sidebar = () => (
        <div className="card flex justify-content-center md:hidden">
            <Sidebar visible={props.visible} onHide={props.onHide} style={{
                backgroundColor: "#49aedb",
                color: "#fff",
            }}>
                <div>
                    <img alt="logo" src={logobandes} height="40" className="mr-2"></img>
                </div>
            </Sidebar>
        </div>
    );

    return (
        <div className="card h-full">
            {fixedSidebar()}
            {sidebar()}
        </div>
    )
}
