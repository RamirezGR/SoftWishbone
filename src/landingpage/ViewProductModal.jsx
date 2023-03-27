import React,{useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import QuantityProduct from '../shop/QuantityProduct'

const ViewProductModal = (props) => {
    
   
    if (!props.view){
        return null
    }
  return (
    <div className='modal' onClick={props.onClose}>
        <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="close" onClick={props.onClose}><FaTimes className='close-btn'/></div>
            <div className="modal-image" 
                style={{backgroundImage:`url(${props.selectedProduct.product.image})`}}>
            </div>
            <div className="modal-content">
                <h2>{props.selectedProduct.product.name}</h2>
                <p>{props.selectedProduct.product.price}</p>
                <p>Available: {props.selectedProduct.product.quantity}</p>
                <QuantityProduct 
                     addQuantity={props.addQuantity}
                     minusQuantity={props.minusQuantity}
                     quantityProduct={props.quantityProductToItems}
                />
                <button onClick={props.handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ViewProductModal