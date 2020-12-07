import React, { useEffect, useState } from "react";
import CarouselComponent from "./CarouselComponent";
import NavigateArrow from "./NavigateArrow";
import { Directions } from "./Constants";
import payPalImage from "./images/payPal.png";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(Directions.showPrev);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [loading, setLoading] = useState(true);

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

  useEffect(
    () =>
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setLoading(false);
          const categories = ["All", ...new Set(json.map((m) => m.category))];
          setFilters(categories);
        }),
    []
  );

  if (loading) {
    return <div class="loader"></div>;
  }

  return (
    <div className="slider">
      <img src={payPalImage} />
      <div className="filter">
        <label for="category-filter">Filter by category</label>
        <select
          name="category-filter"
          onChange={(event) => {
            setActiveIndex(1);
            setSelectedFilter(event.target.value);
          }}
        >
          {filters.map((m) => (
            <option value={m}>{m}</option>
          ))}
        </select>
      </div>
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
    </div>
  );
};

export default Slider;
