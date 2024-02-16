
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Whishlist from './Pages/Whishlist';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Whishlist/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
