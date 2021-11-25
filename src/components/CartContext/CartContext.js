import {createContext, useState, useContext} from 'react'

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children, defaultCart}) => {
    const [cart, setCart] = useState([]);
    const [cantItems, setCantItems] = useState(0);

    const addToCart = (item,qnt)=>{
    if (cart.length !== 0) {
        let aux = cart.findIndex(obj => { return obj.item.id === item.id; })
        if (aux !== -1) {
            const newCart = cart;
            newCart[aux].cant = newCart[aux].cant + qnt;
            setCart(newCart);
        }
        else setCart([...cart, { item, cant: qnt }]);
    }
    else setCart([{ item, cant: qnt }]);
}
    const removeItem = (itemID, qnt) =>{
        setCart(cart.filter(obj => obj.item.id !== itemID));
        setCantItems(cantItems - qnt);
    }

    const clearCart = () =>{
        setCart(defaultCart);
        setCantItems(0);
    }
    return (   
        <CartContext.Provider value={(cart, cantItems, addToCart, removeItem, clearCart)}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
