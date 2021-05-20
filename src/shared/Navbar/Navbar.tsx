import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import Search from '../../components/Search/Search';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { hideSidebar, showSidebar } from '../../store/actions/sidebarActions';
import { navItems } from '../nav-items';

const Navbar = () => {

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if ( toggleSidebar ) {
            dispatch(showSidebar())
        } else {
            dispatch(hideSidebar())
        }
    }, [toggleSidebar])

    return (
        <nav>
            <div className="p-p-0 p-md-7 container">
                <div className="p-d-flex p-jc-between p-align-center">
                    <Button
                        onClick={ () => setToggleSidebar(state => !state) }
                        className="p-d-md-none toggle-button p-button-primary p-button-text" 
                        icon="pi pi-list"
                    />
                    <Logo />
                    <ul className="p-d-none p-d-md-inline-block">
                    {
                        navItems.map( item =>
                            (
                                <li key={ item.url }>
                                    <Link to={ item.url } className="p-mr-2 p-ml-2">{ item.title.toUpperCase() }</Link>
                                </li>
                            )
                        )
                    }
                    </ul>
                    <div className="p-d-none p-d-md-inline-block">
                        <Search />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
