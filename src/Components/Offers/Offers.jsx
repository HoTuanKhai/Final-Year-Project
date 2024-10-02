import React from 'react'
import './Offers.css'
import limited_image from '../Asset/limited_image.jpg'

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Limited</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check now</button>
            </div>
            <div className="offers-right">
                <img src={limited_image} alt="" />
            </div>
        </div>
    )
}

export default Offers