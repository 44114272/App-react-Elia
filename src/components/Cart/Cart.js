import { memo, useState } from 'react';
import { useCartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import ModalPurchase from '../PurchaseForm/PurchaseForm';
import {motion} from 'framer-motion';
import './Cart.css';
import ModalReutilizable from '../ModalReutilizable/ModalReutilizable';

const Cart = memo(()=> {
    const [modalAppear, setModalAppear] = useState(false);
    const [modalState, setModalState] = useState(false);

    const { cart , clearCart, removeItem, totalPrice} = useCartContext();
    
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
                                    <div className="btn-remove-cart mt-5">
                                            <button 
                                             className="btn btn-danger mb-5" 
                                             onClick={() => removeItem(obj.item.id)}
                                            >
                                             X
                                            </button>
                                    </div>   
                                </motion.div>)}
                                <div className='total-purchase'>
                                    <>
                                        <p>Total: ${totalPrice()}</p>
                                        <button 
                                         className="btn btn-clear btn-danger" 
                                         onClick={() => clearCart()}
                                        >
                                         Vaciar
                                        </button>
                                    </>
                                    <button 
                                     className="btn btn-secondary" 
                                     onClick={()=> setModalState(!modalState)}
                                    >
                                     Comprar
                                    </button>
                                    <ModalReutilizable 
                                     state={modalState} 
                                     changeState={setModalState}>
                                         <ModalPurchase />
                                     </ModalReutilizable>
                                    {/* <button 
                                     className="btn btn-secondary" 
                                     onClick={()=> setModalAppear(true)}
                                    >
                                     Comprar
                                    </button>
                                    <ModalPurchase 
                                    show={modalAppear} 
                                    onHide={()=> setModalAppear(false)} 
                                    /> */}
                                </div>
                </div>}             
        </div>
    );
})
export default Cart

