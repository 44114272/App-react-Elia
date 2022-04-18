import { motion } from 'framer-motion';
import imgHero from '../Imgs/imgHero-min.jpg';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='container-hero'>
            <div className='title-hero'>
                <motion.h2
                 initial={{x: -300, opacity: 0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{delay: .7,duration: .9}}
                >
                 Nunca es más fácil, simplemente te vuelves más rápido.
                </motion.h2>
                <motion.button
                 initial={{y: 100, opacity: 0}}
                 animate={{y: 0, opacity: 1}}
                 transition={{delay: .7,duration: 1}}
                >
                 Ver más
                </motion.button>
            </div>
            <div className="img-hero">
                <img src={imgHero} alt="Hombre en una bicicleta"></img>
            </div>
            
        </div>
    )
}

export default HeroSection
