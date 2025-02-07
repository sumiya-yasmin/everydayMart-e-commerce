import React, { useEffect, useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'


function ShopPage() {
    const {products, useAPI, setUseAPI} = useProducts()

    const [selectedCategories, setSelectedCategories] = useState(()=>{
      const savedCategories = localStorage.getItem("selectedCategories")
     return savedCategories ? JSON.parse(savedCategories): [];
    })

    useEffect(()=>{
      localStorage.setItem("selectedCategories", JSON.stringify(selectedCategories))
    },[selectedCategories])

    const handleCategory = (category) =>{
      setSelectedCategories((prevSelected)=>
        prevSelected.includes(category)?
        prevSelected.filter((c)=> c!==category)
        : [...prevSelected, category]
      )
    }

    const filteredProducts = selectedCategories.length > 0 ?
       products.filter((product)=>product.categories.some((category)=>selectedCategories.includes(category)))
       : products;

    const clearCategories = ()=>{
      setSelectedCategories([]);
    }
  return (
    <div>
      <div className='flex items-center gap-2 flex-wrap'>
      <Categories selectedCategories={selectedCategories} onSelectCategories={handleCategory}/>
      <button onClick={clearCategories} className={`${selectedCategories.length > 0 ? 'bg-red-400 text-white': 'bg-blue-300'}  text-xl  p-2 rounded`}>Clear Selection</button>
      </div>
    <button onClick={() => setUseAPI(!useAPI)}>
        {useAPI ? "Use Local Data" : "Use API Data"}
      </button>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {filteredProducts.map((item)=>  (<ProductCard key={item.id} product={item} isDetailed={false}/>)
        )}
      </div>
        
    </div>
  )
}

export default ShopPage