import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { getFirestore } from '../../service/getFirestore';
import firebase from 'firebase';
import Modal from 'react-bootstrap/Modal'

const ModalPurchase = (props) => {
    const {cart, totalPrice, clearCart} = useContext(CartContext);

    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [idOrder, setIdOrder] = useState(null);

    const generateOrder = (e)=>{
        e.preventDefault();
        const buyerUser = {userName, userPhone, userEmail};
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
        <div>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Complete el siguiente formulario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={generateOrder}>
                    <label>Nombre:</label>
                    <input 
                    type="text"
                    placeholder="Ingrese su Nombre" 
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
                    />
                    <label>Email:</label>
                    <input 
                    type="email"
                    placeholder="Ingrese su Email" 
                    value={userEmail}
                    onChange={(e)=> setUserEmail(e.target.value)}
                    />
                    <label>Telefono:</label>
                    <input 
                    type="tel"
                    placeholder="Ingrese su telefono" 
                    value={userPhone}
                    onChange={(e)=> setUserPhone(e.target.value)}
                    />
                    <button type="onSubmit" className="btn btn-primary">Finalizar compra</button>
                </form>
            </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalPurchase
