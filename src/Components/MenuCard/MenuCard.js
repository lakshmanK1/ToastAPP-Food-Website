import React,{useContext} from 'react'
import { CartContext } from '../../Store/ContextApi'
import './MenuCard.css'

function MenuCard({data}) {
    const cntx = useContext(CartContext);

  return (
    <div class="container">
    <div class="card_box">
        <span>
            <img className='spanImg' src={data.img}/>
        </span>
            <div className='vegDiv'>
                <img className='vegIconImg' src={data.category}/>
                <p className='itemName'>{data.item}</p>
            </div>
            <div className='lastDiv'>
                <h4 className='priceTag'>₹{data.price}</h4>
                {/* <button className='addBtn' onClick={()=>cntx.addItemToCart(data)} key={data.id}><p> + </p>Add</button> */}
                {
                cntx.state.currCart.some((p)=>p.id === data.id) ? (<button className='addBtn' onClick={()=>cntx.removeItemFromCart(data)}>REMOVE</button>) 
                : (<button className='addBtn' onClick={()=>cntx.addItemToCart(data)}><p> + </p>ADD</button>)
                }
            </div>
    </div>
</div>
  )
}

export default MenuCard