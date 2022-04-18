import {memo, useState} from 'react';
import { SliderData } from './SliderData';
import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CategoriesSlider.css';

const CategoriesSlider = memo(({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1)
    };
    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    
  return (
      <>
        <section className='slider'>
            <HiOutlineArrowNarrowLeft className='left-arrow' onClick={prevSlide}/>
            <HiOutlineArrowNarrowRight className='right-arrow' onClick={nextSlide}/>
            {SliderData.map((slide, index) =>{
                return(
                    <div
                    className={index === current ? 'slide active' : 'slide'} 
                    key={index}
                    >
                        {index === current && (
                            <div>
                                <h3 className='slider-title-container'>Nuestras categorias</h3>
                                <Link to={slide.url} >
                                    <motion.img 
                                     src={slide.image} 
                                     alt={slide.title} 
                                     className='image'                         
                                     initial={{ opacity: 0 }}
                                     whileInView={{ opacity: 1}}
                                     viewport={{ once: true }}
                                     transition={{ duration: 1.2}}
                                    />
                                    <motion.h2 
                                     className={slide.cName}
                                     initial={{ y: -50, opacity: 0}}
                                     whileInView={{y: 0, opacity: 1}}
                                     viewport={{ once: true }}
                                     transition={{ delay: .4,duration: 1.7, type:'spring', stiffness: 125}} 
                                    >
                                     {slide.title}
                                    </motion.h2>
                                </Link>
                            </div>
                        )} 
                    </div>
                )
            })}
        </section>
    </>
  )
})
export default CategoriesSlider