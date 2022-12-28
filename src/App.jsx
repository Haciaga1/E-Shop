import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer'
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/signup' element={<SignUp/>} /> 
        <Route path='/login' element={<Login/>} /> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
