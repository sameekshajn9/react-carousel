import { useEffect, useState } from "react";
import payPalImage from "../images/payPal.png";
import Slider from "./Slider";

const Home = () => {
    const [filters, setFilters] = useState([]);
    const [activeIndex, setActiveIndex] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
            <div className="top-bar">
                <img src={payPalImage} width="160px" alt="logo" />
                <div className="filter">
                    <label className="filter-text" for="category-filter">
                        Filter by category
                    </label>
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
            </div>
            <Slider
                selectedFilter={selectedFilter}
                activeIndex={activeIndex}
                setActiveIndex={(index) => setActiveIndex(index)}
                products={products}
            />
        </div>
    );
}

export default Home;
