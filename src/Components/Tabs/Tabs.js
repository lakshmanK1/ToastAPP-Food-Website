import React,{useContext} from 'react'
import './Tabs.css'
import { CartContext } from '../../Store/ContextApi';


function Tabs() {
    const cntx = useContext(CartContext);
  return (
    <div className='tabDiv'>
        {
            cntx.tabsData.map((data)=>{
                return(
                    <div onClick={()=>cntx.changeSetTabActive(data.name)}>
                        <p className='tabText' key={data.id} style={{color:`${cntx.tabActive === data.name ? '#3CBCB4' : 'rgba(74, 86, 98, 0.4)'}`}}>{data.name}</p>
                    </div>
                );
            })
        }
    </div>
  )
}

export default Tabs