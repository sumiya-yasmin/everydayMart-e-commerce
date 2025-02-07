import React, { useState } from 'react';
import useCart from '../hooks/useCart';
import { Link } from 'react-router';

function CartPage() {
  const { cart, removeFromCart, increaseQuant, decreaseQuant } = useCart();

  return (
    <div className='flex justify-center gap-4 items-center'>
    <div className='flex flex-col p-12 items-center justify-center gap-4'>
      {cart.length === 0 ? (
        <p className='text-3xl font-bold p-50 bg-gray-100 rounded w-[50vw] h-[50vh] text-center'>Your Cart is Empty</p>
      ) : (
        cart.map((item) => (
          
          <div
            key={item.id}
            className=" flex gap-2 justify-center w-[550px] items-center border rounded"
          >  
             <Link to={`/product/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-[300px] h-[300px]"
            />
            </Link>
            <div className="flex flex-col justify-center items-start gap-2">
            <Link to={`/product/${item.id}`}>
              <h2>
                {item.name}-${item.price}
              </h2>
              </Link>
              <p>{item.description}</p>
              
              {item.size && <p>Size: {item.size}</p>}
              <div className="flex gap-4">
                <button
                  onClick={() => decreaseQuant(item)}
                  className="w-6 h-6 bg-gray-500 text-white hover:bg-gray-800 rounded"
                >
                  -
                </button>
                <p className="border w-6 h-6 text-center">{item.quantity}</p>
                <button
                  className="w-6 h-6 bg-gray-500 text-white hover:bg-gray-800 rounded"
                  onClick={() => increaseQuant(item)}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white px-2 hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
              <h2> ${item.price * item.quantity}</h2>
            </div>
          </div>
        ))
      )}
    </div>
    <div >
    {cart.length>0 &&(
      <div className=''>
      <p className='font-bold'>Price Details</p>
      {cart.map((item)=><p>{item.name} X {item.quantity} = ${item.price * item.quantity}</p>)}
      <hr/>
      <h2>Total Amount: ${cart.reduce((total, item)=>total+item.price*item.quantity, 0)} </h2>
      <button>Checkout</button>
      </div>
    )}
    </div>
    </div>
  );
}

export default CartPage;
