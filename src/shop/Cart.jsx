import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Cart = () => {
  
const { removeFromCart, cartItems } = useOutletContext();

  // Calculate grand total
  const grandTotal = cartItems.reduce((total, item) => {
    const quantity = parseInt(item.quantity, 10);
    const price = parseFloat(item.product.price);
    const subtotal = quantity * price;
    return total + subtotal;
  }, 0);

  const items = cartItems.map((item) => {
    const quantity = parseInt(item.quantity, 10);
    const price = parseFloat(item.product.price);
    const subtotal = quantity * price
    
    return (
    <tr>
      <td className='table-image'> 
        <FaTimes className='remove-item' onClick={() => removeFromCart(item)}/>
        <img src={item.product.image} alt="" /> 
        <p>{item.product.name}</p>
      </td>
      <td><p>{price.toFixed(2)}</p></td>
      <td><p>{quantity}</p></td>
      <td><p>{subtotal}</p></td>
    </tr>

  )})

  return (
    <>
    <div className='cart'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
        <>
          <div className="order-details">
            <h2>Order Details</h2>
            <p>Total Items: {cartItems.reduce((total, item) => total + parseInt(item.quantity, 10), 0)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
          </div>
        </>
      </div>
    </>
  )
}

export default Cart