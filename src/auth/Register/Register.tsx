import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Register.scss'
const Register = () => {
    const history = useHistory()
    return (
        <div className="auth-view">
            <div className="container">
                <div 
                    className="p-grid p-nogutter p-jc-center p-ai-center auth-view__content animate__animated animate__fadeIn animate__fast"
                    style={{ color: 'white' }}
                >
                    <div className="p-col-10 p-md-5">
                        <Card
                            header={() => <div className="p-p-2"><h1>Registrarse</h1></div>}
                            className="p-card p-card-black"
                        >
                            <div className="p-grid">
                                <div className="p-col-12 p-md-auto p-d-flex p-ai-center p-jc-center">
                                    <div className="p-fluid">
                                        <div className="p-field">
                                            <label htmlFor="username">Nombre de usuario</label>
                                            <InputText id="username" type="text" name="username" placeholder="USUARIO235" />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="email">Correo electrónico</label>
                                            <InputText id="email" type="email" name="email" placeholder="usuario235@email.com" />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="emailVerification">Verifica el correo electrónico</label>
                                            <InputText id="emailVerification" type="email" name="emailVerification" placeholder="usuario235@email.com"/>
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="password">Contraseña</label>
                                            <InputText id="password" type="password" placeholder="Escriba su contraseña aquí..."/>
                                        </div>
                                        <Button className="p-mt-2 p-button-rounded" label="Registrarse"></Button>
                                        <p className="p-text-right p-mt-2">
                                            <Button 
                                                onClick={ history.goBack }
                                                label="Volver atrás"
                                                className="p-button-link"
                                                style={{ color:'white' }} 
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
