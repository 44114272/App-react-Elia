import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ItemListContainer />
            <footer>
                <h4>© Todos los derechos reservados a EliaBikes</h4>
            </footer>
        </div>
    )
}

export default Home
