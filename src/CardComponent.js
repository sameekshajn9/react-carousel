import React from "react";

const CardComponent = (props) => {
    const { product, className, isCenter = false } = props;
    return (
        <div className={`${className} card${!isCenter ? ' blur' : ''}`}>
            {/* <div class="shadow"> */}
            <img width="250px" height={isCenter ? "300px" : "250px"} src={product.image} 
            className='card-image' />
            {/* </div> */}
             {/* <div class="shadow" 
             style={{
                width:"250px", height: isCenter ? "300px" : "250px"
             }}></div> */}
            <div className="information">
                <h5>{product.title}</h5>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
            </div>
        </div>
    )
}

export default CardComponent;