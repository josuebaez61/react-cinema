import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import './Contact.scss';
import { useForm } from '../../hooks/useForm';
import { Button } from 'primereact/button';
import Swal from 'sweetalert2';

const Contact = () => {
    const [invalid, setInvalid] = useState<Array<string>>([])
    const [formValue, handleChange, resetForm] = useForm({
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
        if ( formHasErrors() ) {
            Swal.fire('¡Error!', 'El formulario tiene errores, revisa los campos.', 'error');
        } else {
            Swal.fire(
                '¡Enviado!', 
                'Recibimos tu consulta, te responderemos a la brevedad.', 
                'success'
            ).then(() => resetForm());
        }
    }

    const formHasErrors = () => {
        const keys = Object.keys(formValue);
        const errors = [];
        for (const key of keys) {
            if (formValue[key].length <= 0) {
                setInvalid(state => [...state, key])
                errors.push(true);
            } else {
                setInvalid(state => [...state].filter( field => field !== key ))
                errors.push(false);
            }
        }
        return errors.includes(true) ? true : false;
    }

    return (
        <main className="container p-pb-2 p-pt-2">
            <div className="p-grid p-jc-center">
                <div className="p-col-12 p-md-6">
                    <Card className="p-card-black">
                        <h1 className="p-text-center">Contacto</h1>
                        <form onSubmit={onSubmit} >
                            <div className="p-fluid">
                                <div className="p-field">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <InputText
                                        type="email"
                                        onChange={handleChange}
                                        value={formValue['email']}
                                        name="email"
                                    />
                                    <small className={`p-error ${ invalid.includes('email') ? 'p-d-block' : 'p-d-none' }`}>Debe ingresar un e-mail válido.</small>
                                </div>
                                <div className="p-field">
                                    <label htmlFor="subject">Asunto</label>
                                    <Dropdown
                                        name="subject"
                                        optionLabel="label"
                                        value={formValue['subject']}
                                        options={subjects}
                                        onChange={handleChange}
                                        placeholder="Especifique el asunto"
                                    />
                                    <small className={`p-error ${ invalid.includes('subject') ? 'p-d-block' : 'p-d-none' }`}>Debe elegir un asunto válido.</small>
                                </div>
                                <div className="p-field">
                                    <label htmlFor="message">Mensaje</label>
                                    <InputTextarea
                                        name="message"
                                        rows={5}
                                        cols={30}
                                        value={formValue['message']}
                                        onChange={handleChange}
                                        autoResize
                                        maxLength={500}
                                    />
                                    <small className={`p-error ${ invalid.includes('message') ? 'p-d-block' : 'p-d-none' }`}>El mensaje no puede estar vacío ni superar los 500 caracteres.</small>
                                </div>
                                <div className="p-d-flex p-jc-end">
                                    <Button onClick={ resetForm } type="button" className="p-button-rounded p-button-danger p-mr-2" style={{ width: 'auto' }} label="Limpiar Formulario" />
                                    <Button type="submit" className="p-button-rounded" style={{ width: 'auto' }} label="Enviar" />
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default Contact
