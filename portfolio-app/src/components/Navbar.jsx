import React from 'react'
import Logo from '../assests/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#434443]'>
      <img src={Logo} alt='Logo image' style={{width: '200px'}} />
    </div>
  )
}

export default Navbar