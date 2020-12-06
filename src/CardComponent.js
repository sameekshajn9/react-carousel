import React from "react";

const CardComponent = (props) => {
    const { product, className, isCenter = false } = props;
    return (
        <div className={`${className} card${!isCenter ? ' blur' : ''}`}>
            <img width="250px" height={isCenter ? "300px" : "250px"} src={product.image}
                className='card-image' />
            <div className="information-parent">
                <div className="information">
                    <h5>{product.title}</h5>
                    <p>Category: {product.category}</p>
                </div>
                <h4>&#8377; {product.price}</h4>
            </div>
        </div>
    )
}

export default CardComponent;