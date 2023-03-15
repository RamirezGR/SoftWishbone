import React, {useState} from 'react'
import ViewProductModal from '../ViewProductModal'

const ProductCard = (props) => {
  const [clickViewProducts, setClickViewProducts] = useState(false)

  return (
    <>
         <div className="product-card">
            <div className="product-image">
              {props.status && <p style={{background:'red', color:'white', width: 'fit-content', padding:'5px 7px', position:'absolute'}}>{props.status}</p> }
                <img src={props.image} alt=""></img>
            </div>
            <div className="product-contents">
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <button 
                  className="product-viewbtn" 
                  onClick = {() => setClickViewProducts(true)}
                >VIEW</button>
            </div>
        </div>
        <ViewProductModal
          name={props.name}
          price={props.price} 
          image={props.image}
          quantity={props.quantity}
          view={clickViewProducts} 
          onClose={() => setClickViewProducts(false)}
        />
    </>
  )
}

export default ProductCard