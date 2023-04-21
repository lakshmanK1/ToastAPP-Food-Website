import React,{useContext} from 'react';
import Header from './Components/Header/Header';
import { CartContext } from './Store/ContextApi';
import './App.css';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';

function App() {
  const cntx = useContext(CartContext);

  return (
    <div>
      <Header/>
      {cntx.cartActive && <Cart/>}
      {cntx.tabContent}
      <Footer/>
    </div>
  );
}

export default App;
