import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import { SliderData } from '../CategoriesSlider/SliderData';
import HeroSection from '../HeroSection/HeroSection';
import BestProducts from '../BestProducts/BestProducts';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <CategoriesSlider slides={SliderData}/>
            <BestProducts />
            <Footer />
        </div>
    )
}

export default Home
