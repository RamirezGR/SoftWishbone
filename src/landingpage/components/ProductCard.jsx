import React, {useState} from 'react'
import ViewProductModal from '../ViewProductModal'

const ProductCard = (props) => {

  return (
    <>
         <div className="product-card" onClick = {props.onClick}>
            <div className="product-image">
              {props.status && <p style={{background:'red', color:'white', width: 'fit-content', padding:'5px 7px', position:'absolute'}}>{props.status}</p> }
              <div className='image-wrapper'>
                <img src={props.image} alt=""></img>
              </div>
            </div>
            <div className="product-contents">
                <h2>{props.name}</h2>
                <p>{props.price}</p>
            </div>
        </div>
        <ViewProductModal
          view={props.clickViewProducts} 
          onClose={props.onClose}
          selectedProduct={props.selectedProduct}
          handleAddToCart={props.handleAddToCart}
          addQuantity={props.addQuantity}
          minusQuantity={props.minusQuantity}
          quantityProductToItems={props.quantityProductToItems}
        />
    </>
  )
}

export default ProductCard

