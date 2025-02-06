import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router';

const ProductCard = ({product, isDetailed = false}) => {
  return (
    <div className='flex flex-col items-center rounded shadow-2xl py-2 px-20'>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        {!isDetailed&&(<Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>)}
        
   
    {isDetailed&&(
      <div>
        <p>{product.description}</p>
        <div className='flex gap-2 justify-center'>{product.categories.map((category, index)=><button key={index} className='p-2 bg-amber-50'>{category}</button>)}</div>
        {product.sizes&& (
        <div>
        <h2 className='text-center'>Choose Size</h2>
        <div className='flex gap-2 justify-center'>{product.sizes.map((size, index)=><button key={index}>{size}</button>)}</div>
        </div>
        )}
      </div>
    )}
    <button>Add to cart</button>
     </div>

  )
}

ProductCard.propTypes ={
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
        sizes: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    isDetailed: PropTypes.bool,
};

export default ProductCard