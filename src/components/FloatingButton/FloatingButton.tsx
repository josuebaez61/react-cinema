import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import './FloatingButton.scss'

interface FloatingButtonProps {
    position?: 'left' | 'right',
    icon: IconProp,
    onClick: MouseEventHandler<HTMLButtonElement>,
    className?: string
}

const FloatingButton = ({ position = 'right', icon, onClick, className = '' }: FloatingButtonProps) => {

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
            onClick={ onClick }
            type="button" 
            style={{
                ...positionObj
            }}
        >
            <FontAwesomeIcon icon={ icon } />
        </button>
    )
}

export default FloatingButton
