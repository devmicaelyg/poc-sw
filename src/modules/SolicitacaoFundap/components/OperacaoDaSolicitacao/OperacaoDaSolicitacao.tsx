import { zodResolver } from '@hookform/resolvers/zod';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodSchema } from 'zod';

import InfosisModal, { InfosisModalProps } from '../../../../shared/components/InfosisModal/InfosisModal';

export interface OperacaoDaSolicitacaoProps extends InfosisModalProps {
    onClose: () => void;
    onSave?: (data: any) => void;
    cfopOptions: { name: string; code: string }[];
    schema?: ZodSchema;
    defaultValues?: FormValues;
}

export interface FormValues {
    cfop: string
    complementoCfop: string;
    aliquota: string;
    valorOperacao: string;
    baseCalculo: string;
    icms: string;
}

const OperacaoDaSolicitacao: React.FC<OperacaoDaSolicitacaoProps> = ({ onClose, onSave, defaultValues, cfopOptions, schema, ...props }) => {
    const [cfopItems, setCfopItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        let filteredCfopItems = cfopOptions.map(item => item.name.toString());
        setCfopItems(event.query ? filteredCfopItems.filter(item => item.toLowerCase().startsWith(event.query.toLowerCase())) : filteredCfopItems);
    };

    const defaultSchema = z.object({})

    const {
        register,
        reset,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitted },
    } = useForm<FormValues>({
        defaultValues,
        resolver: zodResolver(schema || defaultSchema),
    });

    const onSubmit = async (data: FormValues) => {
        let save = true;

        if (typeof onSave === 'function') {
            const result = onSave(data);
            if (typeof result === "boolean") {
                save = result;
            }
        }

        if (save) {
            reset();
        }
    };

    const getFormErrorMessage = (name: keyof FormValues) => {
        return errors[name] ? (
            <small className="p-error" id={`${name}-help`}>
                {errors[name]?.message}
            </small>
        ) : null;
    };

    const footer = (
        <div className='flex flex-wrap justify-content-center sm:justify-content-end gap-2'>
            <Button label="Fechar" onClick={() => {
                reset()
                onClose()
            }}
                severity="secondary" outlined />
            <Button label="Salvar" onClick={handleSubmit(onSubmit)} severity="success" />
        </div>
    );

    return (
        <InfosisModal footer={footer} {...props} className={`sm:w-11 md:w-11 lg:w-11 xl:w-12 ${props.className}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <div className="field grid">
                    <label htmlFor="cfop" className="col-12 mb-2 md:col-3 md:mb-0">
                        CFOP:
                    </label>
                    <div className="col-12 md:col-5">
                        <AutoComplete
                            id="cfop"
                            {...register('cfop')}
                            value={watch('cfop')}
                            suggestions={cfopItems}
                            completeMethod={search}
                            forceSelection
                            dropdown
                            placeholder="Selecione o CFOP"
                            className='operacao-solicitacao w-full'
                            onChange={(e: AutoCompleteChangeEvent) => {
                                setValue('cfop', e.value, { shouldValidate: isSubmitted });
                            }}
                            invalid={!!errors.cfop}
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
                            className='w-full'
                            {...register('complementoCfop')}
                            aria-describedby="complementoCfop-help"
                            invalid={!!errors.complementoCfop}
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
                            className="w-full"
                            aria-describedby="aliquota-help"
                            invalid={!!errors.aliquota}
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
                            className="w-full"
                            invalid={!!errors.valorOperacao}
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
                            className="w-full"
                            invalid={!!errors.baseCalculo}
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
                            className="w-full"
                            {...register('icms')}
                            invalid={!!errors.icms}
                        />
                        {getFormErrorMessage('icms')}
                    </div>
                </div>
            </form>
        </InfosisModal>
    );
}

export default OperacaoDaSolicitacao;
