import React from 'react'
import {BsPersonLinesFill, BsHash} from 'react-icons/bs'
import {FiShoppingBag} from 'react-icons/fi'
import Tabs from '../Tabs/Tabs'
import CartIcon from '../Cart/CartIcon'
import './Header.css'

function Header() {
  return (
    <div className='mainDiv'>
        <div className='headDiv'>
            <div className='iconDiv'>
                <img className='logoImg' src={require('../../Images/Group.png')}/>
                <span className='logoText'>Sacred Earth Cafe</span>    
            </div>
            
            <div className='extIconsDiv'>
                <span className='extIcons'><BsPersonLinesFill className='react-icons'/></span>
                <span className='extIcons'><BsHash className='react-icons'/></span>
                <span className='cartIcon'><CartIcon className='react-icons'/></span>
            </div>
        </div>
        <Tabs/>
    </div>
  )
}

export default Header