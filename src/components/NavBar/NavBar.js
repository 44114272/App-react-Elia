import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { useCartContext } from '../CartContext/CartContext';
import CartWidget from './CartWidget';
import { UseClickOutside } from './UseClickOutside';
import { motion } from 'framer-motion';
import './NavBar.css';

const NavBar = () => {
    const [menuClick, setMenuClick] = useState(false);
    const handleClick = () => setMenuClick(!menuClick);
    const closeMobileMenu = () => setMenuClick(false);
    const { quantityItem } = useCartContext();
    const ref = useRef(null);
    UseClickOutside(ref, () => closeMobileMenu(true));

    return (
        <>
            <nav ref={ref} className='navbar-container'>
                <motion.h1 
                 className='navbar-logo' 
                 onClick={closeMobileMenu}
                 initial={{y: -80, opacity: 0}}
                 animate={{y: 0, opacity: 1}}
                 transition={{ duration: .4, type:'tween'}}
                >
                 <Link className='logo-link' to='/'>EliaBikes</Link>
                </motion.h1>
                <motion.div 
                 className='menu-icon' 
                 onClick={handleClick}
                 initial={{y: -80,opacity: 0}}
                 animate={{y: 0,opacity: 1}}
                 transition={{delay: .4, duration: 1.2, type:'spring', stiffness: 70}}
                >
                 {menuClick ? <CgClose /> : <HiOutlineMenuAlt1 />}
                </motion.div>
                <ul className={menuClick ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return (
                            <motion.li 
                             key={index}
                             initial={{y: -80,opacity: 0}}
                             animate={{y: 0,opacity: 1}}
                             transition={{delay: index * .2, duration: 1, type:'spring', stiffness: 70}}
                            >
                                <Link 
                                 className={item.cName}
                                 to={item.url} 
                                 onClick={closeMobileMenu}
                                >
                                 {item.title}
                                </Link>
                            </motion.li>
                        )
                    })}
                </ul>
                <motion.div
                 className='cart-container'
                 initial={{y: -80,opacity: 0}}
                 animate={{y: 0,opacity: 1}}
                 transition={{delay: .4, duration: 1.2, type:'spring', stiffness: 70}} 
                >
                 <Link to='/cart' onClick={closeMobileMenu}> <CartWidget /> </Link>
                 { quantityItem() !== 0 && quantityItem() }
                </motion.div>
            </nav>
        </>
    )
}
export default NavBar
