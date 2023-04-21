
import React,{useContext} from 'react';
import { CartContext } from '../../Store/ContextApi';
import  './CartItem.css';

const CartItem = (props) => {
    const cntx = useContext(CartContext);

  const  {item, id, category, price, qnty} = props;

  return (
    <li className='cart-item'>
      <div>
        <h2>{item}</h2>
        <img className='categoryIconImg' src={category}/>
        <div className='summary'>
          <span className='price'>₹{price}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={()=>cntx.decrementCartItemQnty(id)}>−</button>
        <span className='count'>{qnty}</span>
        <button onClick={()=>cntx.incrementCartItemQnty(id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;