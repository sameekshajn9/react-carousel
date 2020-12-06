import { Directions } from "./Constants";
import CardComponent from "./CardComponent";

const CarouselComponent = (props) => {
    const { activeIndex, direction, products } = props;
    const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : products.length - 1;
    const nextIndex = activeIndex + 1 < products.length ? activeIndex + 1 : 0;
    return (
        <div className='image-slider'>
            {/* {
                    Data[prevIndex - 1] && <div className={"left-lost"}
                        key={prevIndex - 1}>
                        <img className="left-lost-image" src={Data[prevIndex - 1].image} />
                    </div>

                } */}
            {
                products[prevIndex] &&
                <div
                    className={direction === Directions.showNext ? "left" : "left-prev"}
                    key={prevIndex}>
                    <CardComponent className={direction === Directions.showNext ? "left-image" : "left-image-prev"}
                        product={products[prevIndex]} />
                </div>

            }
            {
                products[activeIndex] &&
                <div className={direction === Directions.showNext ? "center" : "center-prev"}
                    key={activeIndex}>
                    <CardComponent className={direction === Directions.showNext ? "center-image" : "center-image-prev"}
                        product={products[activeIndex]} isCenter/>
                </div>
            }
            {
                products[nextIndex] &&
                <div className={direction === Directions.showNext ? "right" : "right-prev"}
                    key={nextIndex}>
                    <CardComponent product={products[nextIndex]}
                        className={direction === Directions.showNext ? "right-image" : "right-image-prev"} />
                </div>
            }
        </div>
    )
}

export default CarouselComponent