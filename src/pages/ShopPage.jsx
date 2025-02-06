import React from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'


function ShopPage() {
    const {products, useAPI, setUseAPI} = useProducts()
  return (
    <div>
     <button onClick={() => setUseAPI(!useAPI)}>
        {useAPI ? "Use Local Data" : "Use API Data"}
      </button>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {products.map((item)=>  (<ProductCard key={item.id} product={item} isDetailed={false}/>)
        )}
      </div>
        
    </div>
  )
}

export default ShopPage