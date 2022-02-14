import { SliderData } from "../data";
import "./ImageSlider.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(1);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 1 ? length - 1 : current - 1);
  };

  return (
    <section className="main-section">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((image, index) => {
        return (
          <div className={index === current ? "slides-active" : "slides"}>
            {index === current && (
              <img src={image.image} alt="travel" className="images" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
