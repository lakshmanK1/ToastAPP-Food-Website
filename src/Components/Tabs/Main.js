import React,{useContext} from 'react'
import { CartContext } from '../../Store/ContextApi';
import TabBody from '../TabBody/TabBody';

function Main() {
  const cntx = useContext(CartContext);

  const bannerImage = cntx.MainTabData.bannerImg;
  const bannerName = cntx.MainTabData.bannerMsg;
  const specialMenuArr = cntx.MainTabData.specialMenu;
  const tabName = cntx.MainTabData.name;
return (
 <div>
     <TabBody bannerImage={bannerImage} bannerName={bannerName} specialMenuArr={specialMenuArr} tabName={tabName}/>
 </div>
)
}

export default Main