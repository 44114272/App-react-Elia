import {CgClose} from 'react-icons/cg'
import './ModalReutilizable.css'

const ModalReutilizable = ({children, state, changeState, title, showHeader}) => {
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
                onClick={() => changeState(false)}
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