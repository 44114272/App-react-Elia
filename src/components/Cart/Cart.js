import { memo, useState } from 'react';
import { useCartContext } from '../CartContext/CartContext';
import { useAuth } from "../../context/authContext";
import { Link } from 'react-router-dom';
import ModalPurchase from '../PurchaseForm/PurchaseForm';
import { motion } from 'framer-motion';
import ModalReutilizable from '../ModalReutilizable/ModalReutilizable';
import './Cart.css';

const Cart = memo(()=> {
    const [modalState, setModalState] = useState(false);
    
    const { cart , clearCart, removeItem, totalPrice} = useCartContext();
    const {user} = useAuth()
    
    return (
        <div className="container-cart">
            { cart.length === 0 ? <div className="cart-vacio"><h2>Tu carrito esta vacio</h2> <Link to='/products'><p>Haz click aqui para ir a comprar algo</p></Link> </div> : 
                <div> {cart.map(obj => 
                                    <motion.div 
                                     className="cart-items" key={obj.item.id}
                                     initial={{x: -200}}
                                     animate={{x: 0}}
                                     transition={{duration: .5, type:'spring', stiffness: 100}}
                                    >
                                    <div className={obj.item.cName ? obj.item.cName : "imgs-cart"}>
                                        <img src={obj.item.img} alt={obj.item.description} />
                                    </div>
                                    <div className="cart-description">
                                        <h5>Nombre: {obj.item.title}</h5>
                                        <h5>Cantidad: {obj.quantity}</h5>
                                        <h5>S/total: ${obj.item.price * obj.quantity}</h5>
                                    </div>
                                    <div>
                                        <button 
                                         className="btn-remove-one" 
                                         onClick={() => removeItem(obj.item.id)}
                                        >
                                         X
                                        </button>
                                    </div>   
                                </motion.div>)}
                                <div className='total-purchase'>
                                    <p>Total: ${totalPrice()}</p>
                                    <button 
                                     className="btn-clear-cart" 
                                     onClick={() => clearCart()}
                                    >
                                     Vaciar
                                    </button>
                                    <button 
                                     className="btn-purchase" 
                                     onClick={()=> setModalState(!modalState)}
                                    >
                                     Comprar
                                    </button>
                                    <ModalReutilizable 
                                     state={modalState} 
                                     changeState={setModalState}
                                    >
                                     {!user &&
                                     <div className='confirm-login-register'>
                                        <p>Para finalizar la compra debes registrarte:</p>
                                        <Link 
                                         to='/register'
                                         className=''
                                        >
                                         <button className='btn-send'>Registrate</button>
                                        </Link>
                                        <p>O si ya te registraste incia sesion:</p>
                                        <Link 
                                         to='/login'
                                         className=''
                                        >
                                         <button className='btn-send'>Inicar sesión</button>
                                        </Link>
                                     </div>
                                    }
                                    {user &&
                                        <div className='confirm-purchase'>
                                            <p>Esta seguro que desea comprar los productos de su carrito?</p>
                                            <ModalPurchase />
                                        </div>
                                    }
                                     </ModalReutilizable>
                                </div>
                </div>}             
        </div>
    );
})
export default Cart

