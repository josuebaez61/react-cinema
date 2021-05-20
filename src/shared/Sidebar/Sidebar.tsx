import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { navItems } from '../nav-items'
import { RootState } from '../../store/index';
import { animate } from '../../helpers/animate';
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {

    const { show } = useSelector((state: RootState) => state.sidebar);
    const [display, setDisplay] = useState<'block' | 'none'>('none');

    useEffect(() => {
        switch (show) {
            case true:
                setDisplay('block');
                animate('.sidebar-navigation', 'slideInLeft')
                break;
        
            case false:
                if ( display != 'none' ) {
                    animate('.sidebar-navigation', 'slideOutLeft')
                        .then(() => setDisplay('none'));
                } else {
                    setDisplay('none')
                }
                break;
        }
    }, [show])

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
                                <Link to={ item.url }>
                                    <FontAwesomeIcon icon={ item.icon } /> { item.title }
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default Sidebar
