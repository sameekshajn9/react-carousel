import React from "react";

const CardComponent = (props) => {
  const { product, className, isCenter = false } = props;
  return (
    <div className={`${className} card${!isCenter ? " blur" : ""}`}>
      <img
        width="250px"
        height={isCenter ? "300px" : "250px"}
        src={product.image}
        className="card-image"
      />
      <div className="information-parent">
        <div className="information">
          <p className="product-title">
            {isCenter && <span class="tooltiptext">{product.title}</span>}
            {product.title}
          </p>
          <p className="product-category">Category: {product.category}</p>
        </div>
        <p className="product-price">
          &#8377; {product.price}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
