import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar, showSidebar } from '../../store/actions/sidebarActions';
import { navItems } from '../nav-items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faSearch } from '@fortawesome/free-solid-svg-icons';
import CustomDivider from '../../components/CustomDivider/CustomDivider';
import { RootState } from '../../store';
import { showSearchModal } from '../../store/actions/searchActions';

const Navbar = () => {

    const { show } = useSelector((state: RootState) => state.sidebar)
    const dispatch = useDispatch();

    return (
        <nav>
            <div className="p-p-0 p-md-7 container">
                <div className="p-d-flex p-jc-between p-align-center">
                    <Button
                        onClick={() => show ? dispatch(hideSidebar()) : dispatch(showSidebar())}
                        className="p-d-md-none toggle-button p-button-primary p-button-text"
                        icon="pi pi-list"
                    />
                    <Link to="/cartelera" style={{ textDecoration: "none" }}>
                        <Logo />
                    </Link>
                    <ul className="p-d-none p-d-md-inline-block">
                        {
                            navItems.map
                                (item =>
                                (
                                    <li key={item.url}>
                                        <NavLink activeClassName="active" to={item.url} className="p-mr-2 p-ml-2">{item.title.toUpperCase()}</NavLink>
                                    </li>
                                )
                                )
                        }
                    </ul>
                    <div className="p-d-none p-d-md-inline-block">
                        <div className="search-login p-d-flex">
                            <div>
                                <a onClick={ () => dispatch(showSearchModal()) }>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                            </div>
                            <CustomDivider longitude="25px" />
                            <div>
                                <NavLink activeClassName="active" to="/login">INGRESAR</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
