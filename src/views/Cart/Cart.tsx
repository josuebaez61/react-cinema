import React, { useContext } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
// import paymentsImage from '../../assets/image/payments.png'
import CartItemComponent from '../../components/CartItem/CartItem'
import './Cart.scss'
import { Divider } from 'primereact/divider'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../../models/CartItem'

const Cart = () => {

    const { cart, getTotal } = useContext(CartContext);

    return (
        <div className="container p-pt-3 p-pb-3">
            <Card className="p-card-black animate__animated animate__fadeIn">
                <div className="p-grid">
                    <div className="p-col-12">
                        <ul className="cart-item-list">
                            {
                            cart.map
                                ( (cartItem: CartItem) => 
                                    <li key={ cartItem.itemDetail.id }>
                                        <CartItemComponent item={ cartItem } />
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
                            TOTAL ${ getTotal().toFixed(2) }
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Cart
