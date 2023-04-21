import React,{useContext} from 'react'
import { CartContext } from '../../Store/ContextApi';
import TabBody from '../TabBody/TabBody';

function Beverages() {
  const cntx = useContext(CartContext);

  const bannerImage = cntx.BeveragesTabData.bannerImg;
  const bannerName = cntx.BeveragesTabData.bannerMsg;
  const specialMenuArr = cntx.BeveragesTabData.specialMenu;
  const tabName = cntx.BeveragesTabData.name;
return (
 <div>
     <TabBody bannerImage={bannerImage} bannerName={bannerName} specialMenuArr={specialMenuArr} tabName={tabName}/>
 </div>
)
}

export default Beverages