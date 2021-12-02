import React from 'react';
import { useCartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ()=> {
    const { cart , clearCart, removeItem, totalPrice} = useCartContext();
    console.log('cart', cart)
    return (
        <>
        
                {
                    <div className="container-cart"> { cart.length === 0 ? <div className="cart-vacio"><h1>Tu carrito esta vacio</h1> <Link to='/' ><p>Haz click aqui para ir a comprar algo</p></Link> </div> : 
                        cart.map(obj => <div className="cart-items" key={obj.item[0].id}>
                                            <img className="imgs-cart" src={obj.item[0].img} alt={obj.item[0].description} />
                                            <div className="cart-description">
                                                <h5>Nombre: {obj.item[0].title}</h5>
                                                <h5>Cantidad: {obj.quantity}</h5>
                                                <h5>Precio: ${ obj.item[0].price }</h5>
                                                <div className="btn-remove-cart">
                                                    <button className="btn btn-danger" onClick={() => removeItem()}>X</button>
                                                </div>
                                            </div>
                                            <div className="holis">
                                                <p>Total: ${obj.item[0].price * obj.quantity}</p>
                                                <button className="btn btn-vaciar btn-danger" onClick={() => clearCart()}>Vaciar</button>
                                            </div>     
                                        </div>)}               
                    
                </div>
        }
        </>
    );
}
export default Cart

