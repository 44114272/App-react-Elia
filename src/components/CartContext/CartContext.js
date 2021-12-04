import {createContext, useState, useContext} from 'react'
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantItems, setQuantItems] = useState(0);
            
    function addToCart(item, quantity){        
        if (cart.length !== 0) {
                const index = cart.findIndex(obj => { return obj.item.id === item.id; })
                if (index !== -1) {
                    const newCart = cart;
                    newCart[index].quantity = newCart[index].quantity + quantity;
                    setCart(newCart);
                }
                else setCart([...cart, { item, quantity: quantity}]);
            }
            else setCart([{ item: item, quantity: quantity }]);
            setQuantItems(quantItems + quantity);
    } 

    function removeItem(itemID, quantity) {
        setCart(cart.filter(item => item.id !== itemID));
    }
    
    const quantityItem = () =>{
        return cart.reduce ( (acum, item)=> acum + item.quantity , 0)
    };
    
    const totalPrice = () =>{
        return cart.reduce ( (acum, value)=> (acum + (value.quantity * value.item.price )) , 0)
    };
    
    const clearCart=()=>{
        setCart([]);
        setQuantItems(0);
    };
console.log('context', cart);
            return (
                <CartContext.Provider value={{
                    cart,
                    quantItems,
                    addToCart,
                    removeItem,
                    clearCart,
                    quantityItem,
                    totalPrice
                }}>
                    {children}
                </CartContext.Provider>
            )
}
export default CartProvider