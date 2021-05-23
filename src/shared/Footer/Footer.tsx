import { Divider } from 'primereact/divider'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import { navItems } from '../nav-items'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="container p-pt-5 p-pb-5 h-100">
                <div className="p-grid h-100">
                    <div className="p-col-12 p-md-4 p-d-flex p-flex-column p-jc-center p-ai-center app-footer__logo">
                        <Logo />
                        <p>by Josué Baez</p>
                    </div>
                    <div className="p-col-12 p-md-1 p-d-none p-d-md-block">
                        <Divider layout="vertical" />
                    </div>
                    <div className="p-col-6 p-md-2">
                        <div className="p-d-flex p-ai-center p-jc-center app-footer__site-map">
                            <div className="p-d-flex p-flex-column p-ai-center p-ai-md-start">
                                <h5>NAVEGAR</h5>
                                <ul className="p-p-0 p-pl-md-2">
                                    {
                                        navItems.map(item =>
                                        (
                                            <li className="p-text-center p-text-md-left">
                                                <Link to={item.url}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-col-6 p-md-2 p-d-flex p-flex-column p-ai-center p-ai-md-start p-jc-evenly h-100 app-footer__site-map">
                        <div>
                            <h5>CUENTA</h5>
                            <ul className="p-p-0 p-pl-md-2">
                                <li>
                                    <Link to="/login">
                                        Ingresar
                                        </Link>
                                </li>
                                <li>
                                    <Link to="/register">
                                        Registrarse
                                        </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>AUTOR DEL SITIO</h5>
                            <ul className="p-p-0 p-pl-md-2">
                                <li>
                                    <a target="_blank" href="http://www.linkedin.com/in/josuebaez15">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/josueDev61">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/josuebaez61/">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-col-12 p-d-flex p-flex-column p-ai-center p-d-md-block p-md-2">
                        <h3>Central</h3>
                        <p className="p-text-center p-text-md-left">
                            <a
                                target="_blank"
                                href="https://goo.gl/maps/wneYNfnggMaFkEk76"
                            >Mikkel Bryggers Gade 8, 1460 København, Dinamarca</a>
                        </p>
                        <div className="p-mt-2">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85656.47233957905!2d12.396540146123714!3d55.65626317974076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaefb4407a4078bea!2sGrand%20Teatret!5e0!3m2!1ses!2sar!4v1621633347792!5m2!1ses!2sar"
                                width="250" height="150"
                                style={{ border: "0" }}
                                allowFullScreen={false}
                                loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
