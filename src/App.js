import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import Shop from './components/shop';

function App() {
  return (    
    <div className="App">
      <Header/>
      <Carousel/>
      <Shop/>
    </div>
  );
}

export default App;