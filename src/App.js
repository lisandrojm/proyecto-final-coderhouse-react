import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import CartProvider from './context/CartContext';
/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ItemListContainer greeting={'Productos'} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
