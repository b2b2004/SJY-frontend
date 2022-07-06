import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import sliderImage from "./SliderImage";
import "./Slider.css"

const len = sliderImage.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
}, [activeIndex]);

    return (
    <div className="slider-container">
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />

        <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
    </div>
    );
}

export default Slider;