import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import InfosisModal, { InfosisModalProps } from '../../../../shared/components/InfosisModal/InfosisModal';

type FormValues = {
    cfop: string;
    complementoCfop: string;
    aliquota: string;
    valorOperacao: string;
    baseCalculo: string;
    icms: string;

};

const defaultValues: FormValues = {
    cfop: '',
    complementoCfop: '',
    aliquota: '',
    valorOperacao: '',
    baseCalculo: '',
    icms: '',
};
export interface OperacaoDaSolicitacaoProps extends InfosisModalProps {
    onClose: () => void;
    onSave: () => void;
}

const OperacaoDaSolicitacao: React.FC<OperacaoDaSolicitacaoProps> = ({ onClose, onSave, ...props }) => {
    const [countries, setCountries] = useState<any[]>([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState<any>({});
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

    const footer = (
        <div className='flex flex-wrap justify-content-center sm:justify-content-end gap-2'>
            <Button
                label="Fechar"
                onClick={onClose}
                severity="secondary"
                outlined
            />
            <Button
                label="Salvar"
                onClick={onSave}
                severity="success"
            />
        </div>
    );

    const { control, formState: { errors }, handleSubmit, reset } = useForm<FormValues>({ defaultValues });

    const onSubmit = (data: React.SetStateAction<{}>) => {
        setFormData(data);
        setShowMessage(true);
        reset();
    };

    const getFormErrorMessage = (name: keyof FormValues) => {
        return errors[name] ? <small className="p-error">{errors[name]?.message}</small> : null;
    };


    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <InfosisModal
            footer={footer}
            {...props}
            className={`sm:w-11 md:w-11 lg:w-11 xl:w-12 ${props.className}`}
        >
            {/* <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex justify-content-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        <b>{formData.cfop}</b>
                    </p>
                </div>
            </Dialog> */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <div className="field grid">
                    <label htmlFor="cfop" className="col-12 mb-2 md:col-3 md:mb-0">
                        CFOP:
                    </label>
                    <div className="col-12 md:col-5 flex flex-column">
                        <Controller name="cfop" control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
                            // <InputText   autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                            <AutoComplete
                                id={field.name}
                                {...field}
                                value={field.value}
                                suggestions={items}
                                completeMethod={search}
                                onChange={(e) => field.onChange(e.value)}
                                dropdown
                                placeholder="Selecione o CFOP"
                                className={"operacao-solicitacao w-full p-inputtext-sm " + classNames({ 'p-invalid': fieldState.invalid })}
                            />
                        )} />
                        {getFormErrorMessage('cfop')}
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

                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </InfosisModal>
    );
}

export default OperacaoDaSolicitacao;