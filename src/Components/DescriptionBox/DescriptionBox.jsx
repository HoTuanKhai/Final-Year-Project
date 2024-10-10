import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () =>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box-review">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-comerce website is an online platform that facilitates the buying and selling of products or
                   services over the internet. It services as a virtual marketplace where bussiness and individuals can
                   showcase their products, interact with customers, and conduct transactions without the need for physical presence.
                   E-comerce websites have gained immense popularity due to their convenience, and the global reach they offer 
                </p>
                <p>E-comerce websites typically display products or services along with detailed description, images, prices, and any available 
                   variations (e.g., sizes, colors). Each products usually has its own dedicated page with relevant information 
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox