import React from 'react'
import {TfiBook} from 'react-icons/tfi'
import {FiShoppingBag} from 'react-icons/fi'
import {AiTwotoneThunderbolt} from 'react-icons/ai'
import CartIcon from '../Cart/CartIcon'
import './Footer.css'

function Footer() {
  return (
    <div className='footMainDiv'>
            <div className='footExtIconsDiv'>
                <span className='footExtIcons'><AiTwotoneThunderbolt className='react-icons'/></span>
                <span className='footExtIcons'><TfiBook className='react-icons'/></span>
                <span className='footCartIcon'><CartIcon className='react-icons'/></span>
            </div>
    </div>
  )
}

export default Footer