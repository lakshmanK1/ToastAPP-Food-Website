import React,{useContext} from 'react'
import { CartContext } from '../../Store/ContextApi';
import TabBody from '../TabBody/TabBody';

function Desserts() {
  const cntx = useContext(CartContext);

  const bannerImage = cntx.DessertsTabData.bannerImg;
  const bannerName = cntx.DessertsTabData.bannerMsg;
  const specialMenuArr = cntx.DessertsTabData.specialMenu;
  const tabName = cntx.DessertsTabData.name;
return (
 <div>
     <TabBody bannerImage={bannerImage} bannerName={bannerName} specialMenuArr={specialMenuArr} tabName={tabName}/>
 </div>
)
}

export default Desserts