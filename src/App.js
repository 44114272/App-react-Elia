import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/CartContext/CartContext';
import Home from './components/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/products' element={<ItemListContainer />}></Route>
            <Route exact path='/category/:categoryID' element={<ItemListContainer />} />
            <Route exact path='/detalle/:id' element={<ItemDetailContainer />}/>
            <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;
