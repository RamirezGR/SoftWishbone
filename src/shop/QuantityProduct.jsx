import React, { useState } from 'react'

const QuantityProduct = (props) => {
    const [quantity, setQuantity] = useState(0)
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
  return (
    <div className='quantity'>
        <button onClick={minusQuantity}>-</button>
        <p>{quantity}</p>
        <button onClick={addQuantity}>+</button>
    </div>
  )
}

export default QuantityProduct