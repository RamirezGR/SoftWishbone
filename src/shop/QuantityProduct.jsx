import React from 'react'

const QuantityProduct = (props) => {
    
  return (
    <div className='quantity'>
        <button onClick={props.minusQuantity}>-</button>
        <p>{props.quantityProduct}</p>
        <button onClick={props.addQuantity}>+</button>
    </div>
  )
}

export default QuantityProduct