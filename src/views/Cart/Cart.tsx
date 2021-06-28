import React, { useContext } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
// import paymentsImage from '../../assets/image/payments.png'
import CartItemComponent from '../../components/CartItem/CartItem'
import './Cart.scss'
import { Divider } from 'primereact/divider'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../../models/CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, getTotal } = useContext(CartContext);

    return (
        <div className="container p-pt-3 p-pb-3">
            <Card className="p-card-black animate__animated animate__fadeIn">
                <div className="p-grid">
                    {
                        cart.length > 0 ? 
                        < >
                            <div className="p-col-12">
                                <ul className="cart-item-list">
                                    {
                                        cart.map
                                            ((cartItem: CartItem) =>
                                                <li key={cartItem.itemDetail.id}>
                                                    <CartItemComponent item={cartItem} />
                                                </li>
                                            )
                                    }
                                </ul>
                            </div>
                            <div className="p-col-12">
                                <Divider />
                            </div>
                            <div className="p-col-12">
                                <div className="p-d-flex p-jc-end">
                                    TOTAL ${getTotal().toFixed(2)}
                                </div>
                            </div>
                        </>
                        :
                        <div className="p-col-12 p-d-flex p-flex-column p-ai-center empty-cart">
                            <h3 className="p-text-center">El carrito está vacío</h3>
                            <FontAwesomeIcon size='3x' icon={ faFrown }/>
                            <h4>
                                Podrías llenarlo explorando nuestra <Link className="empty-cart__link" to="/cartera">Cartelera</Link> o nuestros <Link className="empty-cart__link" to="/aditional">Adicionales</Link>
                            </h4>
                            <FontAwesomeIcon size='3x' icon={ faSmileWink }/>
                        </div>
                    }
                </div>
            </Card>
        </div>
    )
}

export default Cart
