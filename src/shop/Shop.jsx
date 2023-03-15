import React from 'react'
import ProductCard from '../landingpage/components/ProductCard'
import productsData from '../landingpage/product.js'

const Shop = () => {
    
    const Card = productsData.map(item => {
        return  (
            <ProductCard 
                key={item.id}
                name= {item.product.name} 
                price={item.product.price} 
                image= {item.product.image}
                status={item.product.status}
                quantity={item.product.quantity}
            />
        )
    })
  return (
    <div className='shop container'>
        {Card}
    </div>
  )
}

export default Shop