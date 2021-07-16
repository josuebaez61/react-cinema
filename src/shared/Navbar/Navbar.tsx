import React, { useContext, useEffect } from 'react'
import './Navbar.scss'
import { Link, NavLink, useHistory } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar, showSidebar } from '../../store/actions/sidebarActions';
import { navItems } from '../nav-items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CustomDivider from '../../components/CustomDivider/CustomDivider';
import { RootState } from '../../store';
import { showSearchModal } from '../../store/actions/searchActions';
import { CartContext } from '../../context/CartContext';
import { Badge } from 'primereact/badge';
import CartWidget from '../../components/CartWidget/CartWidget';
import { animate } from '../../helpers/animate';

const Navbar = () => {

    const { cart, setCartWidgetIsVisible, getTotalQuantityOfItems } = useContext(CartContext);
    const { show } = useSelector((state: RootState) => state.sidebar)
    const { displayName, uid, email } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        cart.length > 0 &&
            animate('.cart-button__badge', 'pulse');
    }, [cart]);

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
                            {
                                uid
                                && < >
                                    <div>
                                        <button
                                            style={{ position: 'relative' }}
                                            className="text-button cart-button"
                                            onClick={() => cart.length > 0
                                                ? setCartWidgetIsVisible(true)
                                                : history.push('/cart')}
                                        >
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                            {
                                                cart.length > 0 &&
                                                <Badge className="cart-button__badge" size="normal" value={`${getTotalQuantityOfItems()}`} />
                                            }
                                        </button>
                                    </div>
                                    <CustomDivider longitude="25px" />
                                </>
                            }
                            <div>
                                <button className="text-button" onClick={() => dispatch(showSearchModal())} >
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                            <CustomDivider longitude="25px" />
                            <div>
                                {
                                    uid
                                        ? <NavLink activeClassName="active" to="/user-screen">{email}</NavLink>
                                        : <NavLink activeClassName="active" to="/login">INGRESAR</NavLink>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CartWidget />
        </nav >
    )
}

export default Navbar
