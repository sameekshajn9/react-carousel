import React, { Component, useEffect, useState } from 'react';
import CaroselComponent from './CaroselComponent';
import NavigateArrow from './NavigateArrow';
import { Directions } from "./Constants";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [direction, setDirection] = useState(Directions.showPrev);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const goToPrevSlide = () => {
        let index = activeIndex;
        let length = products.length;
        if (index < 1) {
            index = length - 1;
        }
        else {
            index--;
        }
        setActiveIndex(index);
        setDirection(Directions.showPrev);
    }

    const goToNextSlide = () => {
        let index = activeIndex;
        let length = products.length;
        if (index === length - 1) {
            index = 0
        }
        else {
            index++;
        }
        setActiveIndex(index);
        setDirection(Directions.showNext);
    }

    useEffect(() => fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setProducts(json);
            setLoading(false)
        }), [])

    if (loading) {
        return <div class="loader"></div>
    }
    return (
        <div className='slider'>
            <div className='slider-items'>
                <NavigateArrow
                    isLeft
                    action={goToPrevSlide}
                />
                <div className='slider-text'>
                    <CaroselComponent
                        activeIndex={activeIndex}
                        direction={direction}
                        products={products}
                    />
                </div>
                <NavigateArrow
                    action={goToNextSlide}
                    isLeft={false}
                />
            </div>
        </div>
    );
}

export default Slider