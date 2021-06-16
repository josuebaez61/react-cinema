import React from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import paymentsImage from '../../assets/image/payments.png'
import CartItem from '../../components/CartItem/CartItem'
import './Cart.scss'
import { Divider } from 'primereact/divider'

const Cart = () => {

    const itemsProvisionales = [
        {
            id: 1,
            name: 'Entrada para Spider-Man',
            cantidad: 5,
            precio: 500,
            image: '../../assets/image/no-image.jpg'
        },
        {
            id: 2,
            name: 'Entrada para The Avengers',
            cantidad: 5,
            precio: 500,
            image: '../../assets/image/no-image.jpg'
        },
        {
            id: 3,
            name: 'Entrada para Jhon Wick',
            cantidad: 5,
            precio: 500,
            image: '../../assets/image/no-image.jpg'
        },
    ]

    return (
        <div className="container p-pt-3 p-pb-3">
            <Card className="p-card-black animate__animated animate__fadeIn">
                <div className="p-grid">
                    <div className="p-col-12">
                        <ul className="cart-item-list">
                            {
                            itemsProvisionales.map
                                ( (item) => 
                                    <li>
                                        <CartItem item={ item } />
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="p-col-12">
                        <Divider/>
                    </div>
                    <div className="p-col-12">
                        <div className="p-d-flex p-jc-end">
                            TOTAL
                        </div>
                    </div>
                    {/* <div className="p-col-3">
                        <div className="p-text-center">
                            <h3>Metodos de pago</h3>
                            <img className="w-100" src={ paymentsImage } alt="Payments" />
                            <Button label="PAGAR"/>
                        </div>
                    </div> */}
                </div>
            </Card>
        </div>
    )
}

export default Cart
