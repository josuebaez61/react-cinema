import React, { SyntheticEvent, useContext } from 'react'
import { InputText } from 'primereact/inputtext'
import noImage from '../../assets/image/no-image.jpg'
import CounterInput from '../CounterInput/CounterInput'
import './CartItem.scss'
import { CartItem as CartItemModel, ItemType } from '../../models/CartItem'
import { CartContext } from '../../context/CartContext'
import { Button } from 'primereact/button';
import { MovieDetail } from '../../models/Movies'
import { Additional } from '../../models/Additional'
import { InputNumber, InputNumberChangeParams, InputNumberValueChangeParams } from 'primereact/inputnumber';


interface CartItemProps {
    item: CartItemModel
}

const CartItem = ({ item }: CartItemProps) => {

    const { setItemQuantity, removeItem } = useContext(CartContext);

    const getImageSource = () => {
        if (item.type === ItemType.movie) {
            return `https://image.tmdb.org/t/p/w500${(item.itemDetail as MovieDetail).poster_path}`;
        } else {
            return (item.itemDetail as Additional).image
        }
    }

    const handleChangeQuantity = (e: InputNumberChangeParams) => {
        setItemQuantity(item, e.value);
    }

    return (
        <article className="p-grid">
            <div className="p-col-3 p-md-2">
                <img className="w-100" src={getImageSource()} />
            </div>
            <div className="p-col-9 p-md-10">
                <div className="p-grid">
                    <div className="p-col-12 p-md-6 p-text-center p-text-md-left">
                        <h3>
                            {
                                item.type === 'movie'
                                    ? (item.itemDetail as MovieDetail).title
                                    : (item.itemDetail as Additional).name
                            }
                        </h3>
                        <span>{item.cinema?.name}</span>
                    </div>
                    <div className="p-col-12 p-md-2">
                        <div className="p-field p-fluid">
                            <InputNumber
                                className="p-inputtext-sm w-100"
                                style={{
                                    borderRadius: '5px',
                                }}
                                value={item.quantity}
                                min={1}
                                max={100}
                                onChange={handleChangeQuantity}
                                showButtons
                                onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()}
                            />
                        </div>
                    </div>
                    <div className="p-col-12 p-md-2">
                        <p className="p-text-center item-price">${(item.unit_price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="p-col-12 p-md-2 p-text-center">
                        <Button
                            label="Remover"
                            icon="pi pi-times"
                            className="p-button-sm p-button-rounded p-button-danger p-button-outlined"
                            onClick={() => removeItem(item.itemDetail.id)}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CartItem
