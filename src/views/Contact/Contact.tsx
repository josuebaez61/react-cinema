import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import './Contact.scss';
import { useForm } from '../../hooks/useForm';
import { Button } from 'primereact/button';

const Contact = () => {
    const [ formValue, handleChange ] = useForm({
        email: '',
        subject: '',
        message: ''
    });

    const subjects = [
        { label: 'Facturación', value: 'billing' },
        { label: 'Recursos Humanos', value: 'rrhh' },
        { label: 'Reclamo', value: 'claim' },
        { label: 'Otros', value: 'other' },
    ];

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(formValue);
    }

    return (
        <main className="container">
            <Card className="p-card-black">
                <h1 className="p-text-center">Contacto</h1>
                <form onSubmit={ onSubmit } >
                    <div className="p-fluid">
                        <div className="p-field">
                            <label htmlFor="email">Correo electrónico</label>
                            <InputText 
                                onChange={ handleChange }
                                value={ formValue['email'] } 
                                name="email"
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="subject">Asunto</label>
                            <Dropdown 
                                name="subject"
                                optionLabel="label"
                                value={ formValue['subject'] } 
                                options={ subjects } 
                                onChange={ handleChange } 
                                placeholder="Especifique el asunto" 
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="message">Mensaje</label>
                            <InputTextarea 
                                name="message"
                                rows={5} 
                                cols={30} 
                                value={ formValue['message'] }
                                onChange={ handleChange }
                                autoResize
                                maxLength={ 500 }
                            />
                        </div>
                        <div className="p-d-flex p-jc-end">
                            <Button className="p-button-rounded p-button-danger p-mr-2" style={{ width: '12rem' }} label="Limpiar Formulario" />
                            <Button type="submit" className="p-button-rounded" style={{ width: '10rem' }} label="Enviar" />
                        </div>
                    </div>
                </form>
            </Card>
        </main>
    )
}

export default Contact
