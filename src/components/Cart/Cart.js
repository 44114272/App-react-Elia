import React from 'react';
import { useCartContext } from '../CartContext/CartContext';

const Cart = ()=> {
    const { cart, clearCart, removeItem } = useCartContext();
    let total = 0;

    const handleRemove = (itemID) => {
        removeItem(itemID);
    }

    return (
            <>
                <div className="cart-container">
                    {cart.map(obj => <div className="cart-item">
                    <img src={obj.item.img} alt={obj.item.name} />
                    <div className="cart-item-midpart">
                        <h1>{obj.item.name} x{obj.cant}</h1>
                        <p>{obj.item.description}</p>
                    </div>
                    <div className="cart-item-rightpart">
                        <h2>${obj.item.price}</h2>
                        <button className="button" onClick={() => removeItem(obj.item.id, obj.cant)} >Eliminar del carrito</button>
                    </div>
                </div>)}
                <div className="cart-bottom">
                    {cart.map(obj => { total = obj.item.price * obj.cant + total })}
                    <h1>Total: ${total}</h1>
                    <button className="button" onClick={clearCart}>Vaciar carrito</button>
                </div>
            </div>
            </>
    );
}
export default Cart

