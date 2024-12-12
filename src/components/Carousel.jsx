import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Carousel.scss';

function Carousel({ picturesArray }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? picturesArray.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === picturesArray.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <button className="carousel-button" id="prev" onClick={handlePrev}>
                <ChevronLeft size={window.innerWidth > 600 ? 80 : 36} color="white" />
            </button>
            <button className="carousel-button" id="next" onClick={handleNext}>
                <ChevronRight size={window.innerWidth > 600 ? 80 : 36} color="white" />
            </button>
            <ul>
                {picturesArray.map((element, index) => (
                    <li
                        className={`slide ${index === currentIndex ? "active" : ""}`}
                        key={index}
                    >
                        <img src={element} alt="Photo du bien" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Carousel;