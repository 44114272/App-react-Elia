import { useState } from 'react'
import { useCartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { IoReturnDownBack } from 'react-icons/io5';
import { FaMedal, FaTruck } from 'react-icons/fa';
import santander from '../Imgs/banco-santander-logo.svg';
import visa from '../Imgs/visa.svg';
import mastercard from '../Imgs/mastercard-2.svg';
import maestro from '../Imgs/maestrocard.svg';
import hsbc from '../Imgs/hsbc.svg';
import bbva from '../Imgs/bbva.svg';
import ModalReutilizable from '../ModalReutilizable/ModalReutilizable';
import './ItemDetail.css'

const ItemDetail = ({ productDetail })=> {
    const [clicked, setclicked] = useState(false);
    const [modalState1, setModalState1] = useState(false);
    const [modalState2, setModalState2] = useState(false);
    
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    
    const {addToCart}  = useCartContext();
    const onAdd = (quantity) =>{
        addToCart(productDetail, quantity);
        setclicked(true)
    }
    return (
        <div>
            <div className="container-detail" key={productDetail.id}>
                <div className='container-img-detail'>
                    <img
                     className={
                     productDetail.cName ? 
                     productDetail.cName : 
                     'img-detail'}
                     src={productDetail.img}
                     alt={productDetail.description}
                     onClick={()=> setModalState1(!modalState1)}
                     onMouseEnter={(e) => {
                        // update image size and turn-on magnifier
                        const elem = e.currentTarget;
                        const { width, height } = elem.getBoundingClientRect();
                        setSize([width, height]);
                        setShowMagnifier(true);
                      }}
                      onMouseMove={(e) => {
                        // update cursor position
                        const elem = e.currentTarget;
                        const { top, left } = elem.getBoundingClientRect();
              
                        // calculate cursor position on the image
                        const x = e.pageX - left - window.pageXOffset;
                        const y = e.pageY - top - window.pageYOffset;
                        setXY([x, y]);
                      }}
                      onMouseLeave={() => {
                        // close magnifier
                        setShowMagnifier(false);
                      }}
                    />
                    <div
                    className='magnifier'
                        style={{
                        display: showMagnifier ? "" : "none",
                        height: '180px',
                        width: '230px',
                        // move element center to cursor pos
                        top: `${y - 180 / 2}px`,
                        left: `${x - 230 / 2}px`, 
                        backgroundImage: `url('${productDetail.img}')`,
                        //calculate zoomed image size
                        backgroundSize: `${imgWidth * 1.6}px ${
                            imgHeight * 1.6
                        }px`,

                        //calculate position of zoomed image.
                        backgroundPositionX: `${-x * 1.7 + 230/ 2}px`,
                        backgroundPositionY: `${-y * 1.7 + 180 / 2}px`
                        }}
                    ></div>
                </div>

                <div className='container-description'>
                    <div className="description-detail">
                        <div className='title-stock'>
                            <h3 className='title-product-detail'>{productDetail.title}</h3>
                            {productDetail.stock >= 1 ? <small className='in-stock'>✓ En stock ({productDetail.stock})</small> : <small className='sold-out'>✘ Sin stock</small>}
                        </div>
                        <p className='description-product-detail'>{productDetail.description}</p>
                        <div className='price-itemcount'>
                            <div className='price-installments'>
                                <h4>$ {productDetail.price}</h4>
                                <h5>Hasta 12 cuotas s/interes</h5>
                            </div>
                        </div>
                        <div className="button-cart-detail">
                            {!clicked && <ItemCount initial={1} stock={productDetail.stock} onAdd={onAdd} clicked={clicked}/>}
                            {clicked && <Link to='/cart'><button className='go-to-cart'>Ir al carrito</button></Link>}
                        </div>
                    </div>
                    <div className='extra-details'>
                        <h6><FaTruck /> Llega en 3 dias</h6>
                        <h6><IoReturnDownBack className='refund'/> Devolución gratis</h6>
                        <p>Tenés 30 dias desde que lo recibís</p>
                        <h6><FaMedal /> {productDetail.warranty}</h6>
                        <Link 
                         to='' 
                         onClick={()=> setModalState2(!modalState2)}
                        >
                         Ver metodos de pago
                        </Link>
                    </div>
                </div>
            </div>
            {/* Modal image */}
            <ModalReutilizable
             state={modalState1}
             changeState={setModalState1}
             showHeader={false}
            >
                <div className='content-modal-img'>
                    <img 
                     src={productDetail.img}
                     className={productDetail.cName ? 
                        'modal-img-large' : 
                        'modal-img'
                     }
                     alt={productDetail.description}
                    />
                </div>
            </ModalReutilizable>
            {/* Modal payments */}
            <ModalReutilizable 
             state={modalState2}
             changeState={setModalState2}
             title='Metodos de Pago'
             showHeader={true}
            >
                <div className='content-modal-payments'>
                    <div className='credit-cards'>
                        <h6>Tarjetas de crédito</h6>
                        <img src={santander} alt='Tarjeta banco Santander'/>
                        <img src={hsbc} alt='Tarjeta banco HSBC'/>
                        <img src={bbva} alt='Tarjeta banco BBVA'/>
                    </div>
                    <div className='debit-cards'>
                        <h6>Tarjetas de débito</h6> 
                        <img src={visa} alt='Tarjeta Visa'/>                      
                        <img src={mastercard} alt='Tarjeta Mastercard'/>                      
                        <img src={maestro} alt='Tarjeta Mestro'/>                      
                    </div>
                </div>
            </ModalReutilizable>
        </div>
    );
}
export default ItemDetail
