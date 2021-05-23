import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { navItems } from '../nav-items'
import { RootState } from '../../store/index';
import { animate } from '../../helpers/animate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { hideSidebar } from '../../store/actions/sidebarActions';
import { faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.scss'

const Sidebar = () => {

    const { show } = useSelector((state: RootState) => state.sidebar);
    const [display, setDisplay] = useState<'flex' | 'none'>('none');
    const dispatch = useDispatch();

    useEffect(() => {
        switch (show) {
            case true:
                setDisplay('flex');
                animate('.sidebar-navigation', 'slideInLeft');
                break;
        
            case false:
                if ( display !== 'none' ) {
                    animate('.sidebar-navigation', 'slideOutLeft')
                        .then(() => setDisplay('none'));
                } else {
                    setDisplay('none')
                }
                break;
        }
    }, [show])

    const onClick = () => {
        dispatch(hideSidebar())
    }

    return (
        <div 
            className="sidebar-navigation animate__animated animate__faster" 
            style={{
                display
            }}
        >
            <ul>
                {
                    navItems.map( item => 
                        (
                            <li key={ item.url }>
                                <NavLink 
                                    activeClassName="sidebar-navigation__link--active"
                                    className="sidebar-navigation__link" 
                                    to={ item.url } 
                                    onClick={ onClick }
                                >
                                    <FontAwesomeIcon icon={ item.icon } /> { item.title }
                                </NavLink>
                            </li>
                        )
                    )
                }
            </ul>
            <div>
                <NavLink
                    activeClassName="sidebar-navigation__link--active"
                    onClick={ onClick }
                    className="sidebar-navigation__link p-text-center" 
                    to="/login"
                >
                    <FontAwesomeIcon icon={ faKey } /> INGRESAR
                </NavLink>
                <NavLink
                    activeClassName="sidebar-navigation__link--active"
                    className="sidebar-navigation__link p-text-center" 
                    to="/singout" 
                    style={{ color: 'var(--pink-500)' }}
                >
                   <FontAwesomeIcon icon={ faSignOutAlt } /> SALIR
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
