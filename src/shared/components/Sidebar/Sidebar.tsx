import { Menu } from 'primereact/menu';
import React from 'react';

export default function Sidebar() {
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

  return (
    <div>
      <Menu
        model={items.map(item => ({ ...item, command: handleClick }))}
        style={{
          backgroundColor: "#49aedb",
          height: "100vh",
          width: 280,
          border: 'none',
          borderRadius: 0
        }}
      />
    </div>
  );
}
