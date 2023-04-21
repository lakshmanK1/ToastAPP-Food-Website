import { useContext } from 'react';
import Modal from '../Model/Model';
import CartItem from './CartItem';
import PrevCartItems from './PrevCartItems';
import { CartContext } from '../../Store/ContextApi';
import './Cart.css';


const Cart = (props) => {
    const cntx = useContext(CartContext);

    const hasItems = cntx.state.currCart.length > 0;

    const orderPlaced = () => {
        cntx.placeOrder();
        cntx.setCartActive(false);
    }

    const cartItems = (
        <ul className='cart-items'>
          {cntx.state.currCart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              item={item.item}
              price={item.price}
              category={item.category}
              qnty={item.qnty}
            />
          ))}
        </ul>
      );

      const PrevCart = (
        <ul className='cart-items'>
          {cntx.state.prevCart.map((item) => (
            <PrevCartItems
              key={item.id}
              id={item.id}
              item={item.item}
              price={item.price}
              category={item.category}
              qnty={item.qnty}
            />
          ))}
        </ul>
      );
  return (
    <Modal>
      <div className='ordersDiv'>
      <p className='orders'>Current Orders</p>
      <hr className='hr'/>
      </div>
        {cartItems}
        <div className='ordersDiv'>
      <p className='orders'>Previous Orders</p>
      <hr className='hr'/>
      </div>
        {PrevCart}
        <div className='total'>
        <span style={{color:'#4A5662'}}>Total Amount</span>
        <span style={{color:'#4A5662'}}>₹{cntx.state.totalCartPrice}</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={()=>cntx.setCartActive(false)}>
          Close
        </button>
        {hasItems && <button className='button' onClick={orderPlaced}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;