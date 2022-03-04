import React from 'react';
import imgHero from '../Imgs/img-slider-2 (2).jpg';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='container-hero'>
            <div className='title-hero'>
                <h1>Encontra las <span className="uno">mejores marcas</span> de ciclismo solo en <span className='uno'>EliaBikes</span></h1>
            </div>
            <div className="img-hero">
                <img src={imgHero} alt="Hombre en una bicicleta"></img>
            </div>
            
        </div>
    )
}

export default HeroSection
