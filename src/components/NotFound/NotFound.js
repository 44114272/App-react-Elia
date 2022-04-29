import { Link } from 'react-router-dom'
import bgNotFound from '../Imgs/bgNotFound.png'
import './NotFound.css'

export const NotFound = () => {
  return (
    <div className="not-found">
        <div className='content-notfound'>
            <h2>404</h2>
            <h4>Upps! Página no encontrada</h4>
            <p>La página que estabas buscando no existe, tal vez escribiste mal la direccion o la pagina ya no existe</p>
            <Link to='/'> 
                Pagina de Inicio
            </Link>
        </div>
    </div>
  )
}