
import React,{useContext} from 'react'
import { CartContext } from '../../Store/ContextApi'
import TabBody from '../TabBody/TabBody';

function Special() {
     const cntx = useContext(CartContext);

     const bannerImage = cntx.SpecialTabData.bannerImg;
     const bannerName = cntx.SpecialTabData.bannerMsg;
     const specialMenuArr = cntx.SpecialTabData.specialMenu;
     const tabName = cntx.SpecialTabData.name;
  return (
    <div>
        <TabBody bannerImage={bannerImage} bannerName={bannerName} specialMenuArr={specialMenuArr} tabName={tabName}/>
    </div>
  )
}

export default Special