import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Figures from './Pages/Figures';
import FigureCategory from './Pages/FigureCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import leagueoflegend_banner from './Components/Asset/banner_leagueoflegend.jpg'
import onepiece_banner from './Components/Asset/banner_onepiece.jpg'
import pokemon_banner from './Components/Asset/banner_pokemon.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Figures/>}/>
        <Route path='/leagueoflegend' element={<FigureCategory banner={leagueoflegend_banner} category="leagueoflegend"/>}/>
        <Route path='/onepiece' element={<FigureCategory banner={onepiece_banner} category="onepiece"/>}/>
        <Route path='/Pokemon' element={<FigureCategory banner={pokemon_banner} category="pokemon"/>}/>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
