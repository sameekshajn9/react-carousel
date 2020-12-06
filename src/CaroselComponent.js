import { Directions } from "./Constants";
import CardComponent from "./CardComponent";

const CarouselComponent = (props) => {
    const { activeIndex, direction, products } = props;
    const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : products.length - 1;
    const nextIndex = activeIndex + 1 < products.length ? activeIndex + 1 : 0;
    return (
        <div className='image-slider'>
            {
                direction === Directions.showNext && products[prevIndex - 1] &&
                <div
                    className={`left ${direction === Directions.showNext ? "left-2" : ""}`}
                    key={prevIndex - 1}>
                    <CardComponent className={`left-image ${direction === Directions.showNext ? "left-image-2" : "left-image-prev"}`}
                        product={products[prevIndex - 1]} />
                </div>

            }
            {
                products[prevIndex] &&
                <div
                    className={`left ${direction === Directions.showNext ? "left-next" : ""}`}
                    key={prevIndex}>
                    <CardComponent className={`left-image ${direction === Directions.showNext ? "" : "left-image-prev"}`}
                        product={products[prevIndex]} />
                </div>

            }
            {
                products[activeIndex] &&
                <div className={`center ${direction === Directions.showNext ? "" : "center-prev"}`}
                    key={activeIndex}>
                    <CardComponent className={`center-image`}
                        product={products[activeIndex]} isCenter />
                </div>
            }
            {
                direction === Directions.showPrev && products[nextIndex + 1] &&
                <div
                    id="left-div"
                    className={`right ${direction === Directions.showPrev ? "right-2" : ""}`}
                    key={nextIndex + 1}>
                    <CardComponent className={`right-image ${direction === Directions.showNext ? "right-image-2" : "right-image-prev"}`}
                        product={products[nextIndex + 1]} />
                </div>

            }
            {
                products[nextIndex] &&
                <div className={`right ${direction === Directions.showNext ? "" : "right-prev"}`}
                    key={nextIndex}>
                    <CardComponent product={products[nextIndex]}
                        className={`right-image ${direction === Directions.showNext ? "" : "right-image-prev"}`} />
                </div>
            }
        </div>
    )
}

export default CarouselComponent