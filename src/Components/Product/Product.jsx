import React from 'react'
import './Product.css'
import mobile from '../Assets/iphone.jpg'
import love from '../Assets/heart.png'
import cart from '../Assets/cart.png'

const Product = () => {
  return (
    <div className='product-container'>
        {/* Image and description text */}
        <div className="product-image">
            <img src={mobile} alt="" />
            <div className="description">
                <p>
                    256GB - 6GB Memory - Golden
                </p>
            </div>
        </div>

        <div>
            <p className="title">Iphone 13 Pro Max</p>
            <p className="title">13,000 egp</p>
        </div>

        <div className="buttons">
            <div className="icon">
                <img src={love} alt="" />
            </div>
            <div className="icon">
                <img src={cart} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Product