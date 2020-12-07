import React, { useEffect, useState, usePr } from "react";
import CarouselComponent from "./CarouselComponent";
import NavigateArrow from "./NavigateArrow";
import { Directions } from "../Constants";

const Slider = ({ selectedFilter, activeIndex, products, setActiveIndex }) => {
  const [direction, setDirection] = useState(Directions.showPrev);

  let filteredProducts = products;
  if (selectedFilter !== "All") {
    filteredProducts = products.filter((f) => f.category === selectedFilter);
  }

  useEffect(() => {
    setDirection(Directions.showPrev)
  }, [selectedFilter])

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
        <CarouselComponent
          activeIndex={activeIndex}
          direction={direction}
          products={filteredProducts}
        />
      </div>
      <NavigateArrow action={goToNextSlide} isLeft={false} />
    </div>
  );
};

export default Slider;
