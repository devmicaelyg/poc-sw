import React from 'react';

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
    <div className="flex flex-column col pb-4 p-2">
      <ul
      className='overflow-x-auto p-1 pl-3 pr-3 m-0 gap-3 flex flex-row border-round-md font-medium bg-white border-1 border-300 w-full'>
        {items.map((item, index) => (
          <li key={index} onClick={item.handler}
          className='flex flex-row items-center gap-1 cursor-pointer hover:surface-100 p-2 border-round-md align-items-baseline text-xs'
          >
            <i className={
              `${item.icon} text-xs`
            }
            ></i>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfosisToolbar;
