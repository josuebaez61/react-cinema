import React, { createContext, ReactElement, useState } from 'react'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { fb, getFirestore } from '../firebase';
import { CartItem } from '../models/CartItem';
import { RootState } from '../store';

interface CartContextInterface {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    removeItem: (itemId: string | number) => CartItem[];
    setItemQuantity: (item: CartItem, newValue: number) => void;
    clearCart: () => void;
    getCartTotalPrice: () => number;
    setCartWidgetIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    cartWidgetIsVisible: boolean;
    isInCart: (item: CartItem) => boolean;
    getTotalQuantityOfItems: () => number;
    buy: (checkoutData: CheckoutData) => Promise<boolean>;
}

interface CheckoutData { fist_name: string; last_name: string; phone: string; }

interface CartProvidersProps {
    children: ReactElement<any, any>
}

export const CartContext = createContext<CartContextInterface>({} as CartContextInterface);

function CartProvider({ children }: CartProvidersProps) {
    const auth = useSelector((state: RootState) => state.auth);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [cartWidgetIsVisible, setCartWidgetIsVisible] = useState<boolean>(false);

    const isInCart = (item: CartItem): boolean => {
        if (cart.findIndex(el => el.itemDetail.id === item.itemDetail.id) < 0) {
            return false;
        } else {
            return true;
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (itemId: string | number) => {
        setCart(state => state.filter(i => i.itemDetail.id !== itemId));
        return cart;
    }

    const addItem = (item: CartItem): void => {
        setCart(state => [...state, item]);
    }

    const setItemQuantity = (item: CartItem, newValue: number) => {
        setCart(cart => cart.map(x => {
            if (x === item) {
                return { ...x, quantity: newValue };
            }
            return x;
        }));
    }

    const getCartTotalPrice = (): number => {
        if (cart.length > 0) {
            const totalArray = cart.map(item => item.quantity * item.unit_price);
            const total = totalArray.reduce((accumulator, current) => accumulator + current);
            return total;
        } else {
            return 0;
        }
    }

    const getTotalQuantityOfItems = () => {
        let totalQuantity = 0;
        cart.length > 0
            ? (totalQuantity = cart.map(item => item.quantity).reduce((accumulator, current) => accumulator + current))
            : totalQuantity = 0;
        return totalQuantity;
    }

    const buy = (checkoutData: CheckoutData): Promise<boolean> => {
        return new Promise((resolve) => {
            const buyData = {
                buyer: {
                    ...auth,
                    ...checkoutData
                },
                total: getCartTotalPrice(),
                items: cart.map(item => JSON.parse(JSON.stringify(item))),
                date: fb.firestore.Timestamp.now(),
                status: 'confirmed'
            }
            Swal.fire({
                title: 'Estamos procesando su orden',
                text: 'Espere por favor...',
                allowEnterKey: false,
                allowOutsideClick: false,
                allowEscapeKey: false
            });
            Swal.showLoading();
            getFirestore().collection('orders').add(buyData).then(doc => {
                Swal.fire({
                    title: 'Orden realizada',
                    icon: 'success',
                    text: `Numero de orden: #${doc.id}`
                }).then(() => {
                    setCart([]);
                });
            }).catch( err => {            
                Swal.fire({
                    title: 'Ocurrió un error',
                    icon: 'error',
                    text: err.message ? err.message : 'Ocurrió un error inesperado, vuelva a intentarlo.'
                });
            }).finally(() => {
                resolve(true);
            });
        })
    }

    return (
        <CartContext.Provider value={{
            cart, setCart, addItem, removeItem, clearCart, setItemQuantity, getCartTotalPrice, isInCart, cartWidgetIsVisible,
            setCartWidgetIsVisible, getTotalQuantityOfItems, buy
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
