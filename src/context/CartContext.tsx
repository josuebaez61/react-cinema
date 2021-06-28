import { icon } from '@fortawesome/fontawesome-svg-core';
import React, { createContext, ReactElement, useState } from 'react'
import Swal from 'sweetalert2';
import { CartItem } from '../models/CartItem';

interface CartContext {
    cart: CartItem[];
    setCart: any;
    addItem: any;
    removeItem: any;
    clear: any;
    setItemQuantity: any;
    getTotal: any
}

interface CartProvidersProps {
    children: ReactElement<any, any>
}

export const CartContext = createContext<CartContext | any>({
    cart: [],
    setCart: null,
    addItem: null,
    removeItem: null,
    clear: null,
    setItemQuantity: null,
    getTotal: null
});


function CartProvider({ children }: CartProvidersProps) {

    const [cart, setCart] = useState<CartItem[]>([]);

    const isInCart = (item: CartItem): boolean => {
        if (cart.findIndex(el => el.itemDetail.id === item.itemDetail.id) < 0) {
            return false;
        } else {
            return true;
        }
    }

    const clear = () => {
        setCart([]);
    }

    const removeItem = (itemId: string | number) => {
        setCart(state => state.filter(i => i.itemDetail.id !== itemId));
        return cart;
    }

    const addItem = (item: CartItem) => {
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

    const getTotal = (): number => {
        if (cart.length > 0) {
            const totalArray = cart.map(item => item.quantity * item.unit_price);
            const total = totalArray.reduce((accumulator, current) => accumulator + current);
            return total;
        } else {
            return 0;
        }
    }

    return (
        <CartContext.Provider value={{
            cart, setCart, addItem, removeItem, clear, setItemQuantity, getTotal, isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
