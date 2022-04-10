import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './Cart';
import {CartProvider} from 'react-use-cart'
import './App.css'
import Navbars from './Navbar';

function App() {
  return (
    <>
    <Navbars />
    <div className='main'>
    <CartProvider>
      
    <Home />
    <Cart />
    </CartProvider>
      </div>
      </>
  );
}

export default App;
