import React, { useContext } from 'react'
import { InputText } from 'primereact/inputtext'
import noImage from '../../assets/image/no-image.jpg'
import CounterInput from '../CounterInput/CounterInput'
import './CartItem.scss'
import { CartItem as CartItemModel, ItemType } from '../../models/CartItem'
import { CartContext } from '../../context/CartContext'

interface CartItemProps {
    item: CartItemModel
}

const CartItem = ({ item }: CartItemProps) => {

    const { setItemQuantity } = useContext(CartContext);

    const getImageSource = () => {
        if ( item.type === ItemType.movie ) {
            return `https://image.tmdb.org/t/p/w500${item.itemDetail.poster_path}`;
        }
    }

    const handleChangeQuantity = (e: any) => {
        setItemQuantity(item, Number(e.target.value));
    }

    return (
        <article className="p-grid">
            <div className="p-col-3 p-md-2">
                <img className="w-100" src={ getImageSource() } />
            </div>
            <div className="p-col-9 p-md-10">
                <div className="p-grid">
                    <div className="p-col-12 p-md-5">
                        <h3>{ item.type === 'movie' && item.itemDetail.title }</h3>
                        <span>{ item.cinema.name }</span>
                        {/* Cantidad <InputText type="number" className="w-20 p-text-center"/> */}
                    </div>
                    <div className="p-col-6 p-md-3">
                        {/* <CounterInput 
                            initialValue={ item.cantidad }
                            transparent
                        /> */}
                        <InputText
                            className="p-inputtext-sm"
                            style={{
                                borderRadius: '5px',
                                width: '75px'
                            }}
                            type="number" 
                            defaultValue={item.quantity}
                            min={0}
                            onChange={ handleChangeQuantity }
                        />
                    </div>
                    <div className="p-col-6 p-md-4">
                        <p className="p-text-center item-price">${ (item.unit_price * item.quantity).toFixed(2) }</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CartItem
