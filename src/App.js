import './App.css';
import {Routes , Route} from "react-router-dom";   //Routes and Routes
import Exchanges from './components/Exchanges';    //Exchanges --> Home page data fetchiing
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Exchanges/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coins/:id' element={<CoinDetails/>}/>
    </Routes>
  );
}

export default App;
