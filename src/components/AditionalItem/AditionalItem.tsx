import { Card } from 'primereact/card'
import React from 'react'
import './AditionalItem.scss'

const AditionalItem = ({ item }: any) => {

    const posterHeader = () => {
        return <img src={ 
            item.image
        } alt={ item.name } />
    }

    return (
        <div className="p-col-6 p-md-3">
            <Card className="p-card-black" header={ posterHeader } title={ item.name } ></Card>
        </div>
    )
}

export default AditionalItem
