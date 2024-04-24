import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react';

export default function InfosisDropdown(props: any) {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder={props.placeholder}
        className={props.className}
        style={{
          backgroundColor: '#49aedb',
          border: 'none',
        }}
      />
    </div>
  );
}
