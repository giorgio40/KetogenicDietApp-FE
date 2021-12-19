import React, { useState } from "react";
import { SliderData } from "../Components/SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../CSS/About.css";

function About(props) {
  const { slides } = props;

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1  : current - 1);
  };
  return (
    <>
    <h2 className="heading">In Loving Memory of Marley</h2>
      <section className="slider">
        <FaArrowAltCircleLeft onClick={prevSlide} className="left-arrow" />
        <FaArrowAltCircleRight onClick={nextSlide} className="right-arrow" />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide-active" : "active"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="dog" className="dog-img" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default About;
