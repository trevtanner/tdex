import './App.css';
import Header from './layout/Header';
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import PokedexEntry from './components/PokedexEntry';

function App() {
  return (
    <div>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path=':name' element={<PokedexEntry />}/>
     </Routes>
   </div>
  );
}

export default App;
