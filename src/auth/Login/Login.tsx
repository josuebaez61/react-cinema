import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'
import { InputText } from 'primereact/inputtext'
import React from 'react'
import { Link } from 'react-router-dom'
import { useWindowSize } from '../../hooks/useWindowSize'
import './Login.scss'

const Login = () => {

    const { width: windowWidth } = useWindowSize();

    return (
        <div className="auth-view">
            <div className="container">
                <div 
                    className="p-grid p-nogutter p-jc-center p-ai-center auth-view__content animate__animated animate__fadeIn animate__fast"
                    style={{ color: 'white' }}
                >
                    <div className="p-col-10 p-md-8">
                        <Card
                            header={() => <div className="p-p-2"><h1>Iniciar Sesión</h1></div>}
                            className="p-card p-card-black"
                        >
                            <div className="p-grid">
                                <div className="p-col-12 p-md-5 p-d-flex p-ai-center p-jc-center">
                                    <div className="p-fluid">
                                        <div className="p-field">
                                            <label htmlFor="email">Correo electrónico</label>
                                            <InputText id="email" type="email" />
                                        </div>
                                        <div className="p-field">
                                            <label htmlFor="password">Contraseña</label>
                                            <InputText id="password" type="password" />
                                        </div>
                                        <Button className="p-mt-2 p-button-rounded" label="Login"></Button>
                                        <div className="p-d-flex p-jc-between p-mt-2">
                                            <Link to="/reset-password">Olvidé mi clave</Link>
                                            <Link to="/register">Registrarse</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-2">
                                    <Divider layout={ windowWidth < 768 ? "horizontal" : "vertical" } />
                                </div>
                                <div className="p-col-12 p-md-5 p-d-flex p-ai-center p-jc-center">
                                    <div className="p-fluid p-text-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates quisquam culpa atque aliquam odio rem deserunt ducimus? Sed in commodi ea quaerat mollitia eum reprehenderit dolore dicta maiores quas.</p>
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

export default Login
