import React, { useState } from "react";
import { SliderData } from "../Components/SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../CSS/About.css";
import Nav from "./Nav"
import Footer from "./Footer"
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
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <>
    <Nav/>
      <h2 className="heading">In Loving Memory of Marley</h2>
      <hr />
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
      <hr />
      <p className="about">
        This site was made in Memory of my heart Dog, Marley. Marley was
        diagnosed in May of 2017 with Lymphoma. She was immediately put on a raw
        ketogenic diet
        <br />
        Marley surpassed statistics of a prognosis of 1 year with chemo. Marley
        lasted 38 months post diagnosis. I believe the one thing that made her
        last that long post diagnosis is a ketogenic diet. Yes, she did go
        through alot of chemo but my vet called her a "Medical Mystery" I made
        it my mission in her memory to try to help dogs that have developed
        cancer. Please, remember I am not a medical professional, Please do your
        research and seek medical attention for your dog
        <br />
        at a Licensed Veterinary Hospital.
      </p>
    <Footer/>
    </>
  );
}

export default About;
