import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/CartContext/CartContext';
import {AuthProvider} from './context/authContext';
import Home from './components/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import {Login} from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Welcome }  from './components/Welcome/Welcome';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { NotFound } from './components/NotFound/NotFound';
import './App.css';


function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <ScrollToTop />
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/products' element={<ItemListContainer />} />
              <Route exact path='/category/:categoryID' element={<ItemListContainer />} />
              <Route exact path='/detalle/:id' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Cart/>} />
              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/welcome' element={
                <ProtectedRoute>
                  <Welcome />
                </ProtectedRoute>
              } />
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </AuthProvider>
        </div>
      </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;
