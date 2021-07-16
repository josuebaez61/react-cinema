import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAdditional } from '../../hooks/useAdditional'
import CounterInput from '../../components/CounterInput/CounterInput'
import { CartItem, ItemType } from '../../models/CartItem'
import { Additional as AdditionalType } from '../../models/Additional'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { ProgressSpinner } from 'primereact/progressspinner'
import './Additional.scss'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { InputNumber } from 'primereact/inputnumber'
const Additional = () => {
    const { additional, loading } = useAdditional();
    const [quantity, setQuantity] = useState(0);
    const { addItem, isInCart } = useContext(CartContext);
    const history = useHistory();
    const { uid } = useSelector((state: RootState) => state.auth)
    const toCart = () => {
        const item = new CartItem(
            (additional as AdditionalType),
            quantity,
            ItemType.additional,
            (additional?.price as number)
        );
        if (isInCart(item)) {
            Swal.fire({
                title: '¡Atención!',
                text: 'Ya agregaste este producto a tu carrito.',
                icon: 'warning',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: 'Ver en el carrito',
                cancelButtonText: 'Cancelar'
            }).then((res) => {
                if (res.isConfirmed) {
                    history.push('/cart');
                }
            });
            return;
        } else {
            addItem(item);
            history.push('/cart');
        }
    }
    return (
        <div className="container p-pt-2 p-pb-2">
            {
                loading
                    ?
                    <div className="w-100 p-d-flex p-jc-center p-mt-3 p-mb-3">
                        <ProgressSpinner />
                    </div>
                    :
                    <Card className="p-card-black animate__animated animate__fadeIn">
                        <div className="p-grid additional-item">
                            <div className="p-col-4">
                                <img className="w-100" src={additional?.image} alt={additional?.name} />
                            </div>
                            <div className="p-col-8">
                                <div className="p-grid">
                                    <div className="p-col-12">
                                        <h2 className="additional-item__title">{additional?.name}</h2>
                                    </div>
                                    <div className="p-col-12">
                                        <p>{additional?.description}</p>
                                    </div>
                                    <div className="p-col-12 p-md-6">
                                        <div className="p-fluid">
                                            <label htmlFor="">Precio</label>
                                            <p className="additional-item__price">${(additional?.price)?.toFixed(2)} x Unidad.</p>
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-md-6">
                                        <div className="p-fluid">
                                            <div className="p-field">
                                                <label htmlFor="quantity">Cantidad</label>
                                                <InputNumber
                                                    value={quantity}
                                                    name="tickets"
                                                    min={1}
                                                    max={10}
                                                    onChange={(e) => setQuantity(e.value)}
                                                    onFocus={(e) => e.target.blur()}
                                                    showButtons
                                                    buttonLayout="horizontal"
                                                    decrementButtonClassName="p-button-primary"
                                                    decrementButtonIcon="pi pi-minus"
                                                    incrementButtonClassName="p-button-primary"
                                                    incrementButtonIcon="pi pi-plus"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-card-footer">
                            <div className="p-text-right">
                                <Button
                                    icon="pi pi-arrow-left"
                                    onClick={history.goBack}
                                    className="p-button-danger p-mb-2 p-mb-md-0  p-mr-md-1 p-button-rounded w-100 w-md-auto"
                                    label="Atrás"
                                />
                                {
                                    uid
                                        ?
                                        <Button
                                            onClick={toCart}
                                            type="button"
                                            icon="pi pi-shopping-cart"
                                            className="p-button-rounded w-100 w-md-auto"
                                            label="Al carrito"
                                        />
                                        :
                                        <Button
                                            onClick={() => history.push('/login')}
                                            form="reservation-form"
                                            type="button"
                                            icon="pi pi-key"
                                            className="p-button-rounded w-100 w-md-auto"
                                            label='Debe autenticarse'
                                        />
                                }
                            </div>
                        </div>
                    </Card>
            }
        </div>
    )
}

export default Additional
