import React from 'react'
import { Link } from 'react-router'
import useCart from '../../hooks/useCart'

export function TopNav() {
  const {cart}=useCart();
  const cartItemCount = cart.reduce((total, item)=> total+item.quantity, 0)
  return (
    <div className='flex items-center justify-between py-4 px-4 text-white bg-[#17252A]'>
      <div className='flex items-center justify-center hover:border border-white'>
      <i className='bx bxs-shopping-bags text-white p-2 text-2xl'></i>
        <Link to='/' className = "font-['Noto_Serif'] italic text-2xl">everydayMart</Link>
      </div>
      <div className='flex items-center justify-center'>
      <i className='bx bxs-down-arrow bg-[#6292a3] rounded-l p-5 text-base'></i>
        <input type='text'
               placeholder='Search your desired items'
               className='border-2 w-[50vw] p-4 rounded text-black bg-white'
        />
        <i className='bx bx-search bg-[#6292a3] rounded-l p-2 text-4xl'></i>
      </div>
      <div className='flex items-center justify-center'>
        <p className='hover:border border-white p-2 text-2xl'>Sign In</p>
       <Link to='cart'> <i className='bx bx-cart hover:border relative border-white p-2 text-4xl'>
       {cartItemCount > 0 && (<span className='-[#d4af37] text-xl absolute bottom-8  bg-red-500 text-white rounded-full py-[1px] px-[5px] right-3'>{cartItemCount}</span>)}
        </i> </Link>
       
      </div>
    </div>
  )
}

