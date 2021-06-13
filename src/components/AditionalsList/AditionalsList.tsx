import React from 'react'
import AditionalItem from '../AditionalItem/AditionalItem';

function AditionalsList({ items }: any ) {
    return (
        <div className="p-grid">

            {
                items.map( (aditional:any) => <AditionalItem key={ aditional.id } item={ aditional }/>)
            }
            
        </div>
    )
}

export default AditionalsList
