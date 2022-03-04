import React, { useState } from 'react';
import { useCartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import ModalPurchase from '../Modal/Modal';
import './Cart.css';

const Cart = ()=> {
    const [modalAppear, setModalAppear] = useState(false);

    const { cart , clearCart, removeItem, totalPrice} = useCartContext();
    
    return (
        <>
            {<div className="container-cart"> { cart.length === 0 ? <div className="cart-vacio"><h1>Tu carrito esta vacio</h1> <Link to='/' ><p>Haz click aqui para ir a comprar algo</p></Link> </div> : 
                <div> {cart.map(obj => <div className="cart-items" key={obj.item.id}>
                                    <div className="imgs-cart">
                                        <img src={obj.item.img} alt={obj.item.description} />
                                    </div>
                                    <div className="cart-description">
                                        <h5>Nombre: {obj.item.title}</h5>
                                        <h5>Cantidad: {obj.quantity}</h5>
                                        <h5>Precio: ${ obj.item.price }</h5>
                                        <div className="btn-remove-cart">
                                            <button className="btn btn-danger" onClick={() => removeItem(obj.id)}>X</button>
                                        </div>
                                    </div>
                                    <div className="prod-subtotal">
                                        <p>sub-total: ${obj.item.price * obj.quantity}</p>
                                    </div>     
                                </div>)}
                                <div>
                                    <>
                                        <p>Total: ${totalPrice()}</p>
                                        <button className="btn btn-vaciar btn-danger" onClick={() => clearCart()}>Vaciar</button>
                                    </>
                                    <button className="btn btn-secondary" onClick={()=> setModalAppear(true)}>Comprar</button>
                                    <ModalPurchase show={modalAppear} onHide={()=> setModalAppear(false)} />
                                </div>
                                </div>}             
                                </div>
        }
        </>
    );
}
export default Cart

