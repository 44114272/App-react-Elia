import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    <div>
      <NavBar />
      <ItemListContainer greetings='Bienvenido/a a EliaBikes.' content='Comming soon...'/>
    </div>
  );
}

export default App;
