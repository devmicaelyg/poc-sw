import { zodResolver } from '@hookform/resolvers/zod';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import InfosisModal, { InfosisModalProps } from '../../../../shared/components/InfosisModal/InfosisModal';
export interface OperacaoDaSolicitacaoProps extends InfosisModalProps {
    onClose: () => void;
    onSave: (data: any) => void;
}

const OperacaoDaSolicitacao: React.FC<OperacaoDaSolicitacaoProps> = ({ onClose, onSave, ...props }) => {
    const [formData, setFormData] = useState<any>({});
    const [items, setItems] = useState<string[]>([]);
    const [cfopValue, setCfopValue] = useState<string>('');

    const cfopOptions = [
        { name: 'Operação 1', code: '1' },
        { name: 'Operação 2', code: '2' },
        { name: 'Operação 3', code: '3' },
        { name: 'Operação 4', code: '4' },
        { name: 'Operação 5', code: '5' },
    ];

    const search = (event: AutoCompleteCompleteEvent) => {
        let _items = cfopOptions.map(item => item.name.toString());
        setItems(event.query ? _items.filter(item => item.toLowerCase().startsWith(event.query.toLowerCase())) : _items);
    }

    const validationSchema = z.object({
        cfop: z.string().min(1, 'CFOP é obrigatório'),
        complementoCfop: z.string().min(1, 'Complemento CFOP é obrigatório'),
        aliquota: z.string().min(1, 'Alíquota é obrigatória'),
        valorOperacao: z.string().min(1, 'Valor da operação é obrigatório'),
        baseCalculo: z.string().min(1, 'Base de cálculo é obrigatória'),
        icms: z.string().min(1, 'ICMS é obrigatório'),
    });

    type FormValues = z.infer<typeof validationSchema>;

    const defaultValues: FormValues = {
        cfop: '',
        complementoCfop: '',
        aliquota: '',
        valorOperacao: '',
        baseCalculo: '',
        icms: '',
    };

    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues,
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = (data: FormValues) => {
        setFormData(data);
        setCfopValue('');
        reset();
        onSave(data);
    };

    const getFormErrorMessage = (name: keyof FormValues) => {
        return errors[name] ? <small
            className="p-error"
            id={`${name}-help`}
        >{errors[name]?.message}</small> : null;
    };

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
                onClick={handleSubmit(onSubmit)}
                severity="success"
            />
        </div>
    );

    return (
        <InfosisModal
            footer={footer}
            {...props}
            className={`sm:w-11 md:w-11 lg:w-11 xl:w-12 ${props.className}`}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <div className="field grid">
                    <label htmlFor="cfop" className="col-12 mb-2 md:col-3 md:mb-0">
                        CFOP:
                    </label>
                    <div className="col-12 md:col-5">
                        <AutoComplete
                            id="cfop"
                            value={cfopValue}
                            suggestions={items}
                            completeMethod={search}
                            dropdown
                            placeholder="Selecione o CFOP"
                            className={classNames('operacao-solicitacao w-full p-inputtext-sm', { 'p-invalid': errors.cfop })}
                            onChange={(e: AutoCompleteChangeEvent) => {
                                setCfopValue(e.value);
                                setValue('cfop', e.value);
                            }}
                            aria-describedby="cfop-help"
                        />
                        {getFormErrorMessage('cfop')}
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="complementoCfop" className="col-12 mb-2 md:col-3 md:mb-0">
                        Complemento CFOP:
                    </label>
                    <div className="col-12 md:col-9">
                        <InputText
                            id="complementoCfop"
                            type="text"
                            className={classNames('w-full', { 'p-invalid': errors.complementoCfop })}
                            {...register('complementoCfop')}
                            aria-describedby="complementoCfop-help"
                        />
                        {getFormErrorMessage('complementoCfop')}
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="aliquota" className="col-12 mb-2 md:col-3 md:mb-0 ">
                        Aliquota (%):
                    </label>
                    <div className="col-12 md:col-5">
                        <InputText
                            placeholder="Informe a alíquota"
                            {...register('aliquota')}
                            id="aliquota"
                            type="text"
                            className={classNames('w-full p-inputtext-sm', { 'p-invalid': errors.aliquota })}
                            aria-describedby="aliquota-help"
                        />
                        {getFormErrorMessage('aliquota')}
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="valorOperacao" className="col-12 mb-2 md:col-3 md:mb-0">
                        Valor da Operação:
                    </label>
                    <div className="col-12 md:col-5">
                        <InputText
                            placeholder='Informe o valor da operação'
                            {...register('valorOperacao')}
                            id="valorOperacao"
                            type="text"
                            aria-describedby="valorOperacao-help"
                            className={classNames('w-full p-inputtext-sm', { 'p-invalid': errors.valorOperacao })}
                        />
                        {getFormErrorMessage('valorOperacao')}
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="baseCalculo" className="col-12 mb-2 md:col-3 md:mb-0">
                        Base de Cálculo:
                    </label>
                    <div className="col-12 md:col-5">
                        <InputText
                            placeholder='Informe a base de cálculo para o ICMS'
                            {...register('baseCalculo')}
                            id="baseCalculo"
                            type="text"
                            aria-describedby="baseCalculo-help"
                            className={classNames('w-full p-inputtext-sm', { 'p-invalid': errors.baseCalculo })}
                        />
                        {getFormErrorMessage('baseCalculo')}
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="icms" className="col-12 mb-2 md:col-3 md:mb-0">
                        ICMS:
                    </label>
                    <div className="col-12 md:col-5">
                        <InputText
                            id="icms"
                            type="text"
                            aria-describedby="icms-help"
                            className={classNames('w-full p-inputtext-sm', { 'p-invalid': errors.icms })}
                            {...register('icms')}
                        />
                        {getFormErrorMessage('icms')}
                    </div>
                </div>
            </form>
        </InfosisModal>
    );
}

export default OperacaoDaSolicitacao;
