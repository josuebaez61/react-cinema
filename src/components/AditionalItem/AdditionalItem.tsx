import { Card } from 'primereact/card'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Additional } from '../../models/Additional'
import './AdditionalItem.scss'

interface AdditionalItemProps {
    item: Additional
}

const AdditionalItem = ({ item }: AdditionalItemProps) => {

    const history = useHistory();

    const posterHeader = () => {
        return <img src={ 
            item.image
        } alt={ item.name } />
    }

    return (
        <div className="aditional-item p-col-6 p-md-3" onClick={() => history.push(`/additional/${item.id}`)}>
            <Card subTitle={ '$' + (item.price).toFixed(2) } className="p-card-black" header={ posterHeader } title={ item.name } ></Card>
        </div>
    )
}

export default AdditionalItem
