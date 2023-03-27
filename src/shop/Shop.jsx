import React, {useState} from 'react'
import { useOutletContext } from 'react-router-dom'
import ProductCard from '../landingpage/components/ProductCard'
import productsData from '../landingpage/product.js'
import ViewProductModal from "../landingpage/ViewProductModal"


const Shop = () => {
    const { addToCart } = useOutletContext();
    
    const [clickViewProducts, setClickViewProducts] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => {
        if(quantity < selectedProduct.product.quantity){
            setQuantity(quantity + 1)
        }
    }
    const minusQuantity = () => {
        if(!quantity){
            setQuantity(quantity)
        } else{
            setQuantity(quantity-1)
        }
    }

    const handleAddToCart = () => {
        addToCart({
          ...selectedProduct,
          quantity: parseInt(quantity)
        });
        setClickViewProducts(false);
        setQuantity(1)
      };

    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setClickViewProducts(true);
    };

  const [products, setProducts] = useState(productsData)
    const Card = products.map(product => {
        return  (
            <>
                <ProductCard 
                    key={product.id}
                    name= {product.product.name} 
                    price={product.product.price}
                    image= {product.product.image}
                    status={product.product.status}
                    quantity={product.product.quantity}
                    onClick={() => handleShowModal(product)}
                    clickViewProducts={clickViewProducts}
                    onClose={() => setClickViewProducts(false)}
                    selectedProduct={selectedProduct}
                    handleAddToCart={handleAddToCart}
                    addQuantity={addQuantity}
                    minusQuantity={minusQuantity}
                    quantityProductToItems={quantity}
                />
                 
            </>
        )
    })
  return (
    <div className='shop container'>
        {Card}
    </div>
  )
}

export default Shop