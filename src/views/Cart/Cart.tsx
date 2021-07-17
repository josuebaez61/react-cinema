import React, { FormEvent, useContext, useState } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
// import paymentsImage from '../../assets/image/payments.png'
import CartItemComponent from '../../components/CartItem/CartItem'
import './Cart.scss'
import { Divider } from 'primereact/divider'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { InputMask } from 'primereact/inputmask';
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Cart = () => {

    const [formValues, handleChange, resetForm] = useForm({
        first_name: '',
        last_name: '',
        phone: ''
    });
    const {
        first_name,
        last_name,
        phone
    } = formValues;
    const { email: currentUserEmail } = useSelector((state: RootState) => state.auth);
    const history = useHistory();
    const { cart, getCartTotalPrice, clearCart, buy } = useContext(CartContext);
    const [checkoutModalIsVisible, setCheckoutModalIsVisible] = useState(false);
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
            if (res.isConfirmed) {
                clearCart();
            }
        });
    }

    const handleBuy = async (e: FormEvent) => {
        e.preventDefault();
        const buyProcessFinished = await buy(formValues);
        if (buyProcessFinished) {
            setCheckoutModalIsVisible(false);
            resetForm();
        }
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
                                        <div className="p-col-12 p-md-5">
                                            <Button
                                                onClick={history.goBack}
                                                icon="pi pi-arrow-left"
                                                label="Atrás"
                                                className="p-d-inline p-button-primary w-100 w-md-auto p-mr-2 p-mb-2 p-mb-md-0"
                                            />
                                            <Button
                                                onClick={handleClearCart}
                                                icon="pi pi-trash"
                                                label="Vaciar carrito"
                                                className="p-d-inline p-button-danger w-100 w-md-auto p-mr-2 p-mb-2 p-mb-md-0"
                                            />
                                            <Button
                                                onClick={() => setCheckoutModalIsVisible(true)}
                                                icon="pi pi-money-bill"
                                                label="Checkout"
                                                className="p-d-inline p-button-rounded p-button-success w-100 w-md-auto"
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
                                    Podrías llenarlo explorando nuestra <Link className="empty-cart__link" to="/cartera">Cartelera</Link> o nuestros <Link className="empty-cart__link" to="/additionals">Adicionales</Link>
                                </p>
                                <FontAwesomeIcon size='3x' icon={faSmileWink} />
                            </div>
                    }
                </div>
            </Card>
            <Dialog
                baseZIndex={500}
                style={{ width: '90%', maxWidth: '750px' }}
                showHeader={false}
                onHide={() => setCheckoutModalIsVisible(false)}
                visible={checkoutModalIsVisible}
            >
                <div className="p-pt-2 p-pb-2">
                    <h3>Checkout de compra</h3>
                    <p className="p-mb-3">Completa con los campos requeridos para completar la compra.</p>
                    <form autoComplete="false" className="p-fluid" onSubmit={handleBuy}>
                        <div className="p-field">
                            <label htmlFor="first_name">Nombre</label>
                            <InputText
                                onChange={handleChange}
                                name="first_name"
                                required
                                value={first_name}
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="last_name">Apellido</label>
                            <InputText
                                onChange={handleChange}
                                name="last_name"
                                required
                                value={last_name}
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="phone">Teléfono</label>
                            <InputMask
                                name="phone"
                                required
                                mask="(999) 9999-9999"
                                value={phone}
                                placeholder="(999) 999-9999"
                                onChange={(e) => handleChange(e.originalEvent)} />
                        </div>
                        <div className="p-field"><small>Comprando como: {currentUserEmail}</small></div>
                        <div className="p-field">
                            <Button className="p-mb-2" label="Comprar" />
                            <Button
                                type="button"
                                onClick={() => setCheckoutModalIsVisible(false)}
                                className="p-button-danger"
                                label="Cerrar"
                            />
                        </div>
                    </form>
                </div>
            </Dialog>
        </div>
    )
}

export default Cart
