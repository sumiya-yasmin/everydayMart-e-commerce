import React from 'react'
import { useParams } from 'react-router'
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

function ProductPage() {
    const {productId} = useParams();
    const {products} = useProducts()
    const product = products.find((product)=> product.id === Number(productId))
    if (!product) return <div className='flex items-center justify-center py-20'><h2 className='p-8'>Product Not Found</h2></div>
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <ProductCard product={product} isDetailed={true}/>
    </div>
  )
}

export default ProductPage