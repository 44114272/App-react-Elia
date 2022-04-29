import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useCartContext } from '../CartContext/CartContext';
import { Alert } from '../Alert/Alert';

export const Register = () => {
  
  const { cart } = useCartContext();

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const {signup} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState()

  const handleChange = ({target: {name,value}}) => {
    setUser({...user,[name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      cart.length === 0 ? navigate('/') : navigate('/cart');
    } catch (error) {
      if(error.code === 'auth/internal-error' || error.code === 'auth/invalid-email'){
        setError('Error: Correo invalido');
      }else if(error.code === 'auth/email-already-in-use'){
        setError('Error: El correo ya esta en uso')
      }else if(error.code === 'auth/weak-password'){
        setError('Error: La contraseña debe tener al menos 6 caracteres')
      }
    }
  }

  return (
    <div className='container-register'>

    {error && <Alert message={error}/>}

      <form 
        onSubmit={handleSubmit}
        className='form-container'
      >
        <h2>Creá tu cuenta</h2>
        <div className='inputs'>
          <label htmlFor='email'>Correo</label>
          <input 
            type='email' 
            name='email'
            autoComplete='username' 
            placeholder='youremail@company.ltd' 
            onChange={handleChange}
          />
        </div>
        <div className='inputs'>
          <label htmlFor='password'>Contraseña</label>
          <input 
            type="password" 
            name='password' 
            id='password'
            autoComplete='current-password'
            placeholder='******'
            onChange={handleChange}
          />   
        </div>
        
        <div className='container-send'>
          <button className='btn-send'>Registrarse</button>
        </div>

      </form>
      <p className='go-login-register'>Ya tenes una cuenta? <Link to='/login'>Ingresar</Link></p>
    </div>
  )
}
