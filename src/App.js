import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import Cart from './components/Cart/Cart';


function App() {
  
  return (
    <BrowserRouter>
      <div>
        
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/category/:categoryID' element={<ItemListContainer />}/>
          <Route exact path='/detalle/:id' element={<ItemDetailContainer />}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      
      </div>
    </BrowserRouter>

  );
}

export default App;
