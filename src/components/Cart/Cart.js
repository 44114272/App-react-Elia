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
                        
                        cart.map(obj => <div className="cart-items" key={obj.item.id}>
                                            <img className="imgs-cart" src={obj.item.img} alt={obj.item.description} />
                                            <div className="cart-description">
                                                <h5>Nombre: {obj.item.title}</h5>
                                                <h5>Cantidad: {obj.quantity}</h5>
                                                <h5>Precio: ${ obj.item.price }</h5>
                                                <div className="btn-remove-cart">
                                                    <button className="btn btn-danger" onClick={() => removeItem(obj.item.itemId)}>X</button>
                                                </div>
                                            </div>
                                            <div className="holis">
                                                <p>Total: ${obj.item.price * obj.quantity}</p>
                                            </div>     
                                        </div>)}
                                        <div>
                                        <>
                                            <p>Total: ${totalPrice()}</p>
                                            <button className="btn btn-vaciar btn-danger" onClick={() => clearCart()}>Vaciar</button>
                                        </>
                                        </div>   
                    
                </div>
        }
        </>
    );
}
export default Cart

