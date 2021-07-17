import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge } from 'primereact/badge'
import React, { useEffect, useState, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { History } from 'history';
import './FloatingButton.scss'

interface FloatingButtonProps {
    position?: 'left' | 'right';
    icon: IconProp;
    onClick(e: MouseEvent, history: History): void;
    className?: string;
    showBadge?: boolean;
    badgeValue?: number | string;
    badgeClass?: string;
}

const FloatingButton = ({ position = 'right', icon, onClick, className = '', showBadge = false, badgeValue = 0, badgeClass = "" }: FloatingButtonProps) => {

    const history = useHistory();
    const [positionObj, setPositionObj] = useState({});

    useEffect(() => {
        switch (position) {
            case 'right':
                setPositionObj({ right: '10px'})
                break;

            case 'left':
                setPositionObj({ left: '10px'})
                break;
        
            default:
                setPositionObj({ right: '10px'})
                break;
        }
    }, [position])

    return (
        <button 
            className={ className + ' floating-button floating-button-primary' }
            onClick={ (e) => onClick(e, history) }
            type="button" 
            style={{
                ...positionObj
            }}
        >
            {
                showBadge &&
                <Badge value={ badgeValue } className={badgeClass} ></Badge>
            }
            <FontAwesomeIcon icon={ icon } />
        </button>
    )
}

export default FloatingButton
