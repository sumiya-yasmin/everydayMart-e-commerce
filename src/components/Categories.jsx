import React from 'react'
import { useProducts } from '../hooks/useProducts'
import PropTypes from 'prop-types';
function Categories({onSelectCategories, selectedCategories}) {
  const {products} = useProducts();
  const getUniqueCategories = ()=>{
  const allCategories= products.map((product)=>product.categories).flat()
   return [...new Set(allCategories)]
  }
 const uniqueCategories = getUniqueCategories()
  return (
    <div className='flex gap-6 p-4 '>
       {uniqueCategories.map((category)=>
         ( <button key={category}
         onClick={()=>onSelectCategories(category)}
         className={`text-xl p-2 rounded ${selectedCategories.includes(category) ? 'bg-blue-400 text-white': 'bg-gray-200'}`}>{category}</button>))}
    </div>
  )
}

Categories.propTypes = {
    onSelectCategories: PropTypes.func.isRequired,
    selectedCategories: PropTypes.array.isRequired
  }; 

export default Categories