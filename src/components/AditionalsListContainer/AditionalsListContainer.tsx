import React from 'react'

interface AditionalsListContainerProps {
    children: any
}

const AditionalsListContainer = ({ children }: AditionalsListContainerProps) => {
    return (
        <div>
            <h2 style={{ color: 'white' }} className="p-mb-2">Adicionales</h2>
            { children }
        </div>
    )
}

export default AditionalsListContainer
