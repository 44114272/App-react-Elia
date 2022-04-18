import { useState } from 'react';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md';
import './ScrollToTop.css'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVissible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 600){
            setVisible(true);
        }else if(scrolled <= 600){
            setVisible(false);
        }
    }
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0
        })
    }
    window.addEventListener('scroll', toggleVissible);
  return (
    <>
        {visible && <div 
                     className='scroll-top' 
                     onClick={scrollToTop}
                    >
                     <MdOutlineKeyboardArrowUp />
                    </div>}
    </>
  )
}

export default ScrollToTop