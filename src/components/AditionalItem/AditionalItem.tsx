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
        <div className="aditional-item p-col-6 p-md-3">
            <Card subTitle={ '$' + 900.9 } className="p-card-black" header={ posterHeader } title={ item.name } ></Card>
        </div>
    )
}

export default AditionalItem
