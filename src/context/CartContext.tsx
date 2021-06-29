import React, { createContext, ReactElement, useState } from 'react'
import { CartItem } from '../models/CartItem';

interface CartContext {
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
}

interface CartProvidersProps {
    children: ReactElement<any, any>
}

export const CartContext = createContext<CartContext>({} as CartContext);


function CartProvider({ children }: CartProvidersProps) {

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

    return (
        <CartContext.Provider value={{
            cart, setCart, addItem, removeItem, clearCart, setItemQuantity, getCartTotalPrice, isInCart, cartWidgetIsVisible,
            setCartWidgetIsVisible, getTotalQuantityOfItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
