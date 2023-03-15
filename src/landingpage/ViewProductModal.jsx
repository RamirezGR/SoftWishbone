import React from 'react'
import {FaTimes} from 'react-icons/fa'
import QuantityProduct from '../shop/QuantityProduct'

const ViewProductModal = (props) => {
    if (!props.view) return null
  return (
    <div className='modal' onClick={props.onClose}>
        <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="close" onClick={props.onClose}><FaTimes className='close-btn'/></div>
            <div className="modal-image" 
                style={{backgroundImage:`url(${props.image})`}}>
            </div>
            <div className="modal-content">
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <p>Available: {props.quantity}</p>
                <QuantityProduct quantity={props.quantity}/>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ViewProductModal