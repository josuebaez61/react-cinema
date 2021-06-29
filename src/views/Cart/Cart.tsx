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
import Swal from 'sweetalert2'

const Cart = () => {

    const { cart, getCartTotalPrice, clearCart } = useContext(CartContext);

    const handleClearCart = () => {
        Swal.fire({
            title: '¿Está seguro?',
            text: 'Esta a punto de vaciar su carrito.',
            icon: 'question',
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'No',
            showCancelButton: true,
            showConfirmButton: true
        }).then((res) => {
            if ( res.isConfirmed ) {
                clearCart();
            }
        });
    }

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
                                                ((cartItem) =>
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
                                    <div className="p-grid p-jc-between">
                                        <div className="p-col-12 p-md-3">
                                            <Button 
                                                onClick={ handleClearCart } 
                                                icon="pi pi-trash" 
                                                label="Vaciar carrito" 
                                                className="p-button-danger w-100 w-md-auto"
                                            />
                                        </div>
                                        <div className="p-col-12 p-md-3 p-text-center p-text-md-right">
                                            <span className="cart-total-price">Total: ${getCartTotalPrice().toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <div className="p-col-12 p-d-flex p-flex-column p-ai-center empty-cart">
                                <h3 className="p-text-center">El carrito está vacío</h3>
                                <FontAwesomeIcon className="p-mb-2" size='3x' icon={faFrown} />
                                <p className="p-text-center">
                                    Podrías llenarlo explorando nuestra <Link className="empty-cart__link" to="/cartera">Cartelera</Link> o nuestros <Link className="empty-cart__link" to="/aditionals">Adicionales</Link>
                                </p>
                                <FontAwesomeIcon size='3x' icon={faSmileWink} />
                            </div>
                    }
                </div>
            </Card>
        </div>
    )
}

export default Cart
