import React, { useEffect, useState } from "react";
import CaroselComponent from "./CaroselComponent";
import NavigateArrow from "./NavigateArrow";
import { Directions } from "../Constants";

const Slider = ({ selectedFilter, activeIndex, products, setActiveIndex }) => {
  const [direction, setDirection] = useState(Directions.showPrev);

  let filteredProducts = products;
  if (selectedFilter !== "All") {
    filteredProducts = products.filter((f) => f.category === selectedFilter);
  }

  const goToPrevSlide = () => {
    let index = activeIndex;
    let length = filteredProducts.length;
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    setActiveIndex(index);
    setDirection(Directions.showPrev);
  };

  const goToNextSlide = () => {
    let index = activeIndex;
    let length = filteredProducts.length;
    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    setActiveIndex(index);
    setDirection(Directions.showNext);
  };

  return (
    <div className="slider-items">
      <NavigateArrow isLeft action={goToPrevSlide} />
      <div className="slider-text">
        <CaroselComponent
          activeIndex={activeIndex}
          direction={direction}
          products={filteredProducts}
        />
      </div>
      <NavigateArrow action={goToNextSlide} isLeft={false} />
    </div>
    // </div>
  );
};

export default Slider;
