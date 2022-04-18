import { Link } from 'react-router-dom';
import {SiFacebook, SiInstagram, SiGithub, SiYoutube} from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            <h2 className='logo-footer'>EliaBikes</h2>
            <div className='icons-container'>
                <Link to='/' className='social-icon'>
                    <SiInstagram />
                </Link>
                <Link to='/' className='social-icon'>
                    <SiFacebook />
                </Link>
                <Link to='/' className='social-icon'>
                    <SiGithub />
                </Link>
                <Link to='/' className='social-icon'>
                    <SiYoutube />
                </Link>
            </div>
            <ul className='menu-container'>
                <li className='menu-item'>Envios</li>
                <li className='menu-item'>Privacidad</li>
                <li className='menu-item'>Cookies</li>
                <li className='menu-item'>Compras</li>
                <li className='menu-item'>Rembolsos</li>
            </ul>
            <span className='copyright'>©2022, EliaBikes todos los derechos reservados.</span>
        </footer>
    </>
  )
}

export default Footer