import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <img src={navlogo} alt='' className='navlogo' />
        <img src={navProfile} alt='' className='navprofile' />
      </div>
    </>
  )
}

export default Navbar
