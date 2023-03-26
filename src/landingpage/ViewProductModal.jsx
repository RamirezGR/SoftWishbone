import React,{useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import QuantityProduct from '../shop/QuantityProduct'

const ViewProductModal = (props) => {
    /* quantity of products */
    const [quantity, setQuantity] = useState(1)
    const addQuantity = () => {
        if(quantity < props.quantity){
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
    /* pushing product to array */
    const [cart, setCart] = useState([])
        const addProductToCart = () => {
                setCart(()=> ({
                        name: `${props.name}`,
                        price: `${props.price}`,
                        quantity: `${quantity}`,
                }) )
                /*set quantity back to 0*/
                setQuantity(0)
                console.log(cart)
        }

    if (!props.view){
        return null
    }
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
                <QuantityProduct 
                     addQuantity={addQuantity}
                     minusQuantity={minusQuantity}
                     quantityProduct={quantity}
                />
                <button onClick={addProductToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ViewProductModal