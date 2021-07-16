import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { fb } from '../../firebase';
import { useForm } from '../../hooks/useForm';
import './Register.scss'
const Register = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false);
    const [formValue, handleChange, resetForm] = useForm({
        username: '',
        email: '',
        password: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)

        fb.auth().createUserWithEmailAndPassword(formValue.email, formValue.password)
            .then(async ({ user }) => {
                await user?.updateProfile({
                    displayName: formValue.username
                });
                resetForm();
            })
            .catch(err => {
                if (err.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        title: 'Error',
                        icon: 'error',
                        text: 'Ya se ha registrado un usuario con ese correo.'
                    })
                } else {
                    Swal.fire({
                        title: 'Error',
                        icon: 'error',
                        text: err.message
                    })
                }
            })
            .finally(() => {
                history.goBack()
                setIsLoading(false)
            });
    }

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
                            <form onSubmit={handleSubmit}>
                                <div className="p-grid">
                                    <div className="p-col-12 p-md-auto p-d-flex p-ai-center p-jc-center">
                                        <div className="p-fluid">
                                            <div className="p-field">
                                                <label htmlFor="username">Nombre de usuario</label>
                                                <InputText onChange={handleChange} value={formValue.username} id="username" type="text" name="username" />
                                            </div>
                                            <div className="p-field">
                                                <label htmlFor="email">Correo electrónico</label>
                                                <InputText onChange={handleChange} value={formValue.email} id="email" type="email" name="email" />
                                            </div>
                                            <div className="p-field">
                                                <label htmlFor="password">Contraseña</label>
                                                <InputText onChange={handleChange} value={formValue.password} id="password" type="password" name="password" />
                                            </div>
                                            <Button disabled={isLoading} type="submit" className="p-mt-2 p-button-rounded" label="Registrarse"></Button>
                                            <p className="p-text-right p-mt-2">
                                                <Button
                                                    onClick={history.goBack}
                                                    label="Volver atrás"
                                                    className="p-button-link"
                                                    style={{ color: 'white' }}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
