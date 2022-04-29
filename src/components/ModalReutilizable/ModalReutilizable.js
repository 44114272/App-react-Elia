import {CgClose} from 'react-icons/cg';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalReutilizable.css'

const ModalReutilizable = ({children, state, changeState, title, showHeader, idOrder}) => {
  const {clearCart} = useContext(CartContext);
  const navigate = useNavigate();

  const btnCerrarCart = () =>{
    if(idOrder){
      clearCart()
      navigate('/welcome')
    }else{
      changeState(false)
    }
  }

  return (
    <>
      {state &&
        <div className='overlay-modal'>
            <div className='container-modal'>
              {showHeader &&
                <div className='header-modal'>
                  <h4 className='modal-title'>{title}</h4>
                </div>
              }
              <button 
                className='close-modal'
                onClick={btnCerrarCart}
              >
                <CgClose />
              </button>
              {children}
            </div>
        </div>
      }
    </>
  )
}

export default ModalReutilizable