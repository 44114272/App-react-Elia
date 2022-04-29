import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import tickGreen from '../Imgs/tickGreen.png';
import './FinishPurchase.css';

const FinishPurchase = ({idOrder}) => {
    const {totalPrice,clearCart, quantItems} = useContext(CartContext);
    const navigate = useNavigate();

    const btnOkay = () =>{
        clearCart()
        navigate('/welcome')
    }

  return (
    <div className="finish-purchase">
          <img src={tickGreen}/>
          <h3>Compra realizada con exito!</h3>
          <h4>Muchas gracias por elegirnos</h4>
          <p>A la brevedad nos comunicaremos con vos</p>
          <small>Su numero de orden es: <span>{idOrder}</span></small>
          <small>Cantidad: <span>{quantItems}</span></small>
          <small>Total: <span>USD {totalPrice()}</span></small>
          <button
           className='btn-send'
           onClick={btnOkay}
          >
           Aceptar
          </button>
    </div>
  )
}

export default FinishPurchase