import React, { MouseEvent, useContext } from 'react'
import './CartItem.scss'
import { CartItem as CartItemModel, ItemType } from '../../models/CartItem'
import { CartContext } from '../../context/CartContext'
import { Button } from 'primereact/button';
import { MovieDetail } from '../../models/Movies'
import { Additional } from '../../models/Additional'
import { InputNumber, InputNumberChangeParams } from 'primereact/inputnumber';
import { useHistory } from 'react-router-dom';


interface CartItemProps {
    item: CartItemModel
}

const CartItem = ({ item }: CartItemProps) => {

    const history = useHistory();
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

    const handleClickOnItem = (e: MouseEvent) => {
        if (item.type === 'movie') {
            history.push(`/movie/${item.itemDetail.id}`)
        } else {
            history.push(`/additional/${item.itemDetail.id}`)
        }
    }

    return (
        <article className="p-grid">
            <div className="p-col-3 p-md-2">
                <img onClick={handleClickOnItem} style={{ cursor: 'pointer' }} className="w-100" src={getImageSource()} alt="Cart item" />
            </div>
            <div className="p-col-9 p-md-10">
                <div className="p-grid">
                    <div className="p-col-12 p-md-6 p-text-center p-text-md-left">
                        <h3 onClick={handleClickOnItem} style={{ cursor: 'pointer' }}>
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
