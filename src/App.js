
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Figures from './Pages/Figures';
import FigureCategory from './Pages/FigureCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Figures/>}/>
        <Route path='/leagueoflegend' element={<FigureCategory category="leagueoflegend"/>}/>
        <Route path='/Onepiece' element={<FigureCategory category="onepiece"/>}/>
        <Route path='/Pokemon' element={<FigureCategory category="pokemon"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
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
