import { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { getFirestore } from '../../service/getFirestore';
import firebase from 'firebase/compat/app';
import { useAuth } from '../../context/authContext';
import ModalReutilizable from '../ModalReutilizable/ModalReutilizable';
import FinishPurchase from '../FinishPurchase/FinishPurchase';
import './PurchaseForm.css'

const ModalPurchase = () => {
    const {cart, totalPrice} = useContext(CartContext);
    const {user} = useAuth()
    const [modalState, setModalState] = useState(false);

    const userEmail = user.email;
    const [idOrder, setIdOrder] = useState(null);
    
    const generateOrder = (e)=>{
        e.preventDefault();
        const buyerUser = {userEmail};
        const db = getFirestore()
        const ordersCollection = db.collection('orders');

        let order = {};
        order.buyer = { buyerUser };
        order.total = totalPrice();
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.items = cart.map((cartItem)=>{
            const idProduct = cartItem.item.id;
            const titleProduct = cartItem.item.title;
            const categoryProduct = cartItem.item.category;
            const priceProduct = cartItem.item.price;
            return {idProduct, titleProduct, categoryProduct, priceProduct}
        })
        ordersCollection.add(order)
        .then((IdDocument)=>{
            setIdOrder(IdDocument.id)
        })
    }

    return (
        <>
            <div onClick={()=> setModalState(!modalState)}>
            <button 
             onClick={generateOrder}
             className='btn-send'
            >
             Si comprar
            </button>
            </div>
            <ModalReutilizable
             state={modalState} 
             changeState={setModalState}
             idOrder={idOrder}
            >
             <FinishPurchase idOrder={idOrder}/>
            </ModalReutilizable>
        </>
    )
}

export default ModalPurchase
