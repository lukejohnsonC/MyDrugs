import './App.css';
import Header from './components/header';
import Carrossel from './components/carrossel';
import Shop from './components/shop';

function App() {
  return (    
    <div className="App">
      <Header/>
      <Carrossel/>
      <Shop/>
    </div>
  );
}

export default App;