import React from 'react'
import {IoMdArrowDropup} from 'react-icons/io'
import './TabBody.css'
import MenuCard from '../MenuCard/MenuCard';

function TabBody(props) {
  const {bannerImage, bannerName, specialMenuArr, tabName} = props;
  return (
    <div className='firstDiv'>
        <div className='banner'>
            <img className='bannerImg' src={bannerImage}/>
        </div> 
        <p className='heroBannerMsg'>{bannerName}</p>
        <div className='divider'>
        <span className='tabName'>Today's {tabName}</span>
        <hr className='hr-style-one'/>
        <IoMdArrowDropup className='dropup'/>
        </div> 
        <div className='cardArr'>
        {
          specialMenuArr.map((data)=>{
            return(
              <MenuCard data={data} key={data.id}/>
            );
          })
        }
        </div>
    </div>
  )
}

export default TabBody