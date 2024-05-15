import './styles.css';

import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

import ModalTipoA, { ModalTipoAProps } from '../ModalTipoA/ModalTipoA';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Badge } from 'primereact/badge';
import { Checkbox } from 'primereact/checkbox';


export interface OperacaoDaSolicitacaoProps extends ModalTipoAProps { }

const OperacaoDaSolicitacao: React.FC<OperacaoDaSolicitacaoProps> = (props) => {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);
    const [checked, setChecked] = useState<boolean>(false);

    const [selectedCity, setSelectedCity] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'New York', code: 'NY' },
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const search = (event: AutoCompleteCompleteEvent) => {
        let _items = cities.map(item => item.name.toString()); // Convert the array of numbers to an array of strings
        //set items to be the ondes that start with the query
        setItems(event.query ? _items.filter(item => item.toLowerCase().startsWith(event.query.toLowerCase())) : _items);
    }
    
    return (
        <ModalTipoA
            {...props}
        >
            <div className="field grid">
                <label htmlFor="cfop" className="col-12 mb-2 md:col-3 md:mb-0">
                    CFOP:
                </label>
                <div className="col-12 md:col-5">
                    <AutoComplete value={value} suggestions={items} completeMethod={search}
                        onChange={(e: AutoCompleteChangeEvent) => setValue(e.value)} dropdown
                        placeholder="Selecione o CFOP"
                        className="operacao-solicitacao w-full p-inputtext-sm" />
                </div>
            </div>
            <div className="field grid">
                <label htmlFor="complementoCfop" className="col-12 mb-2 md:col-3 md:mb-0">
                    Complemento CFOP:
                </label>
                <div className="col-12 md:col-9">
                    <InputText
                        id="complementoCfop" type="text" className="w-full p-inputtext-sm" />
                </div>
            </div>
            <div className="field grid">
                <label htmlFor="aliquota" className="col-12 mb-2 md:col-3 md:mb-0 ">
                    Aliquota (%):
                </label>
                <div className="col-12 md:col-5">
                    <InputText
                        placeholder="Informe a alíquota"
                        id="aliquota" type="text" className="w-full p-inputtext-sm" />
                </div>
            </div>
            <div className="field grid">
                <label htmlFor="valorOperacao" className="col-12 mb-2 md:col-3 md:mb-0">
                    Valor da Operação:
                </label>
                <div className="col-12 md:col-5">
                    <InputText
                    placeholder='Informe o valor da operação'
                    id="valorOperacao" type="text" className="w-full p-inputtext-sm" />
                </div>
            </div>
            <div className="field grid">
                <label htmlFor="baseCalculo" className="col-12 mb-2 md:col-3 md:mb-0">
                    Base de Cálculo:
                </label>
                <div className="col-12 md:col-5">
                    <InputText
                    placeholder='Informe a base de cálculo para o ICMS'
                    id="baseCalculo" type="text" className="w-full p-inputtext-sm" />
                </div>
            </div>
            <div className="field grid">
                <label htmlFor="icms" className="col-12 mb-2 md:col-3 md:mb-0">
                    ICMS:
                </label>
                <div className="col-12 md:col-5">
                    <InputText id="icms" type="text" className="w-full p-inputtext-sm" />
                </div>
            </div>
        </ModalTipoA>
    )
}

export default OperacaoDaSolicitacao;