import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { getFirestore } from '../../service/getFirestore';
import firebase from 'firebase';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik'

const ModalPurchase = (props) => {
    const {cart, totalPrice} = useContext(CartContext);

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
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Complete el siguiente formulario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        email2: '',
                        phone: ''
                    }}
                    validate={(values)=>{
                        let errs = {};
                        // validation name
                        if(!userName){
                            errs.name = 'Por favor ingrese su nombre'
                        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userName)){
                            errs.name = 'El nombre solo puede contener letras y espacios'
                        }
                        // validation email
                        if(!userEmail){
                            errs.email = 'Por favor ingrese su email'
                        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(userEmail)){
                            errs.email = 'El email solo puede contener letras, numeros, puntos, guiones, guiones bajos y @.'
                        }
                        // validation email 2
                        if(!values.email2){
                            errs.email2 = 'Por favor repita su email'
                        }else if(values.email2 !== userEmail){
                            errs.email2 = 'El email es diferente al anterior'
                        }
                        // validation phone
                        if(!userPhone){
                            errs.phone = 'Por favor ingrese su telefono'
                        }else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userPhone)){
                            errs.phone = 'El telefono solo puede contener numeros, simbolo mas y otros caracteres '
                        }else if(userPhone.length < 8){
                            errs.phone = 'El numero es muy corto debe contener codigo de area'    
                        }
                        else if(userPhone.length > 16){
                            errs.phone = 'El numero es muy largo'    
                        }
                        return errs;
                    }}
                    onSubmit={({e})=>{
                        e.preventDefault();
                    }}
                >
                {({values,errors,touched,handleSubmit,handleBlur,handleChange}) => (
                        <form
                            className='form-purchase'
                            // eslint-disable-next-line
                            onSubmit={handleSubmit, generateOrder}
                        >
                            <label htmlFor='name'>Nombre:</label>
                            <input 
                                type="text"
                                id='name'
                                name='name'
                                placeholder="Ingrese su Nombre"
                                value={userName}
                                onChange={(e)=> setUserName(e.target.value)}
                                onBlur={handleBlur}
                                required
                            />
                            {touched.name && errors.name && <p className='input-error'>{errors.name}</p>}
                            <label htmlFor='email'>Email:</label>
                            <input 
                                type="text"
                                id='email'
                                name='email'
                                placeholder="Ingrese su Email" 
                                value={userEmail}
                                onChange={(e)=> setUserEmail(e.target.value)}
                                onBlur={handleBlur}
                                required
                            />
                            {touched.email && errors.email && <p className='input-error'>{errors.email}</p>}
                            <label htmlFor='email2'>Repita su Email:</label>
                            <input 
                                type="text"
                                id='email2'
                                name='email2'
                                placeholder="Repita su Email" 
                                value={values.email2}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {touched.email2 && <p className='input-error'>{errors.email2}</p>}
                            <label htmlFor='phone'>Telefono:</label>
                            <input 
                                type="tel"
                                id='phone'
                                name='phone'
                                placeholder="Ingrese su telefono" 
                                value={userPhone}
                                onChange={(e)=> setUserPhone(e.target.value)}
                                onBlur={handleBlur}
                                required
                            />
                            {touched.phone && errors.phone && <p className='input-error'>{errors.phone}</p>}
                            <button type='submit' className="btn btn-primary" >Enviar</button>
                            {idOrder ? <div className='submitted-form'><small>Formulario Enviado</small> <p>Su numero de orden es: {idOrder}</p></div> : null}
                        </form>
                )}    
                </Formik>
            </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalPurchase
