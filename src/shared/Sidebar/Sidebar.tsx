import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { navItems } from '../nav-items'
import { RootState } from '../../store/index';
import { animate } from '../../helpers/animate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { hideSidebar } from '../../store/actions/sidebarActions';
import { faKey, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.scss'
import { fb } from '../../firebase';
import { logout } from '../../store/actions/authActions';
import { CartContext } from '../../context/CartContext';

const Sidebar = () => {

    const { show } = useSelector((state: RootState) => state.sidebar);
    const { uid, email } = useSelector((state: RootState) => state.auth);
    const [display, setDisplay] = useState<'flex' | 'none'>('none');
    const dispatch = useDispatch();
    const { setCart } = useContext(CartContext);

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        fb.auth().signOut()
            .then(() => {
                dispatch(logout());
                setCart([]);
                dispatch(hideSidebar())
            })
    }


    useEffect(() => {
        switch (show) {
            case true:
                setDisplay('flex');
                animate('.sidebar-navigation', 'slideInLeft');
                break;

            case false:
                if (display !== 'none') {
                    animate('.sidebar-navigation', 'slideOutLeft')
                        .then(() => setDisplay('none'));
                } else {
                    setDisplay('none')
                }
                break;
        }
    }, [show, display])

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
                    navItems.map(item =>
                    (
                        <li key={item.url}>
                            <NavLink
                                exact
                                activeClassName="sidebar-navigation__link--active"
                                className="sidebar-navigation__link"
                                to={item.url}
                                onClick={onClick}
                            >
                                <FontAwesomeIcon icon={item.icon} /> {item.title}
                            </NavLink>
                        </li>
                    )
                    )
                }
            </ul>
            <div>
                {
                    uid
                        ?
                        <NavLink
                            activeClassName="sidebar-navigation__link--active"
                            onClick={onClick}
                            className="sidebar-navigation__link p-text-center"
                            to="/user-screen"
                        >
                            <FontAwesomeIcon icon={faUser} /> {email}
                        </NavLink>
                        : <NavLink
                            activeClassName="sidebar-navigation__link--active"
                            onClick={onClick}
                            className="sidebar-navigation__link p-text-center"
                            to="/login"
                        >
                            <FontAwesomeIcon icon={faKey} /> INGRESAR
                        </NavLink>
                }
                {
                    uid &&
                    <NavLink
                        activeClassName="sidebar-navigation__link--active"
                        className="sidebar-navigation__link p-text-center"
                        to="/singout"
                        onClick={handleLogout}
                        style={{ color: 'var(--pink-500)' }}
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} /> SALIR
                    </NavLink>
                }
            </div>
        </div>
    )
}

export default Sidebar
