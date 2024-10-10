import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Asset/star_icon.png"
import star_dull_icon from "../Asset/star_dull_icon.png"

const ProductDisplay = (props) => {
    const {product} = props;
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />                    
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>                    
                </div>
                <div className="productdisplay-right-description">
                Jinx, a manic and impulsive criminal from Zaun! She delights in wreaking havoc whether she goes with her arsenal of 
                custom-build weapons. This collector-grade figure captures impeccable details, just like in the game. The League
                of Legends Jinx figure is sculpted with extreme details through mold finishes and textures. Painted with premium 
                paints, washes, over-sprays and DIJ to ensure the utmost precision and accuracy. It’s a League of Legends figure
                worthy of champions! Jinx has 12 points of articulation, so you can display the figure in various poses. 
                It includes a Pow-Pow Mini Gun and Fishbones Rocket launcher accessory to bring your champion to life.
                </div>
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay