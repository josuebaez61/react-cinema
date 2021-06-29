import { Button } from 'primereact/button';
import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { animate } from '../../helpers/animate';
import { CartItem } from '../../models/CartItem';
import './CartWidget.scss'



const CartWidget = () => {
    const history = useHistory();
    const location = useLocation();
    const { cart, cartWidgetIsVisible, setCartWidgetIsVisible } = useContext(CartContext);

    const handleClick = () => {
        animate('.cart-widget', 'fadeOut').then(() => setCartWidgetIsVisible(false));
    }

    useEffect(() => {
        if (cartWidgetIsVisible) {
            animate('.cart-widget', 'fadeOut').then(() => setCartWidgetIsVisible(false));
        }
    }, [location]);

    return (
        < >
            {
                cartWidgetIsVisible &&
                <div
                    className="cart-widget animate__animated animate__fadeIn animate__fast p-p-2"
                >
                    <div className="p-text-right p-pb-2">
                        <Button
                            onClick={handleClick}
                            icon="pi pi-times"
                            iconPos="right"
                            label="Cerrar"
                            className="p-button-rounded p-button-text p-button-sm"
                        />
                    </div>
                    <ul className="cart-widget__list">
                        {
                            cart.map((item: CartItem) =>
                                <li key={item.itemDetail.id}>
                                    <div className="p-grid">
                                        <div className="p-col-3">
                                            <img className="w-100" src={`https://image.tmdb.org/t/p/w500${item.itemDetail.poster_path}`} alt="" />
                                        </div>
                                        <div className="p-col-7">
                                            <h5>{item.itemDetail.title}</h5>
                                        </div>
                                        <div className="p-col-2">
                                            x{item.quantity}
                                        </div>
                                    </div>
                                </li>)
                        }
                    </ul>
                    <div className="p-fluid">
                        <Button label="Ver en detalle" onClick={() => history.push('/cart')} />
                    </div>
                </div>

            }
        </>
    )
}

export default CartWidget
