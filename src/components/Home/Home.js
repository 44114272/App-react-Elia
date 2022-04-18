import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import { SliderData } from '../CategoriesSlider/SliderData';
import HeroSection from '../HeroSection/HeroSection';
import PruebaFirestore from '../BestProducts/BestProducts';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <CategoriesSlider slides={SliderData}/>
            <PruebaFirestore />
        </div>
    )
}

export default Home
