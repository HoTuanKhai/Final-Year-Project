
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Figures from './Pages/Figures';
import FigureCategory from './Pages/FigureCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Figures/>}/>
        <Route path='/leagueoflegend' element={<FigureCategory category="leagueoflegend"/>}/>
        <Route path='/Dc&Marvel' element={<FigureCategory category="dc&marvel"/>}/>
        <Route path='/Anime' element={<FigureCategory category="anime"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
