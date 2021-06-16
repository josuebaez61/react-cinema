import React from 'react'
import { InputText } from 'primereact/inputtext'
import noImage from '../../assets/image/no-image.jpg'
import CounterInput from '../CounterInput/CounterInput'
import './CartItem.scss'

const CartItem = ({ item }: any) => {
    return (
        <article className="p-grid">
            <div className="p-col-3 p-md-2">
                <img className="w-100" src={ noImage } alt={ item.name } />
            </div>
            <div className="p-col-9 p-md-10">
                <div className="p-grid">
                    <div className="p-col-12 p-md-5">
                        <h3>{ item.name }</h3>
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
                            defaultValue={item.cantidad}
                            min={0}
                        />
                    </div>
                    <div className="p-col-6 p-md-4">
                        <p className="p-text-center item-price">$900</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CartItem
