import React from 'react';
import './styles.css';

export interface InfosisToolbarItem {
  text: string;
  icon: string;
  handler: () => void;
}

export interface InfosisToolbarProps {
  items: InfosisToolbarItem[];
}

const InfosisToolbar: React.FC<InfosisToolbarProps> = ({ items }) => {
  return (
    <div className="infosis-toolbar p-1">
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={item.handler}>
            <i className={item.icon}></i>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfosisToolbar;
