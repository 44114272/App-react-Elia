import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <div>
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer greetings='Bienvenido/a a EliaBikes.' content='Comming soon...'/>
    </div>
  );
}

export default App;
