
import React,{useContext} from 'react';
import { CartContext } from '../../Store/ContextApi';
import  './PrevCartItems.css';

const PrevCartItems = (props) => {
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
        <span className='count'>{qnty}</span>
      </div>
    </li>
  );
};

export default PrevCartItems;