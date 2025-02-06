import React from 'react'
import { NavLink } from 'react-router'

export function BottomNav() {
  const NavMenuItems = ['Home', 'Shop', 'Blog', 'About', 'Contact'];
  return (
    <div className='flex items-center justify-start gap-10 px-4 py-2 bg-[#273b42] text-white'>
       <button className='flex items-center gap-1 text-xl'>
       <i className='bx bx-menu'></i>
       <p>All Categories</p> 
       </button>
      { NavMenuItems.map((item) => <NavLink className='text-xl' to={item === 'Home' ? '/' : `${item.toLowerCase()}`} key={item}>{item}</NavLink> )}
    </div>
  )
}

