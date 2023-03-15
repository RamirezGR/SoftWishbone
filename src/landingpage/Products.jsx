import React from 'react'
import productsData from './product.js'
import ProductCard from './components/ProductCard'

const Products = () => {

    const Card = productsData.map(item => {
        if(item.product.status==="HOT"){
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
        }
        
    })
  return (
    <div className="products">
        {Card}
    </div>
  )
}

export default Products