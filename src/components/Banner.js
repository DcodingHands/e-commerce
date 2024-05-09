import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/banner.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { data } from "../data/rawData";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.length;
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, intervalTime, autoScroll]);

  return (
    <>
      <section className=" py-4 ">
        <div div className="container-fluid px-4">
          <div className="row">
            <div className="col-12 light-bg p-3 rounded-1 height border">
              {data.map((slide, index) => {
                const { url, name, description, color } = slide;
                return (
                  <div
                    key={index}
                    className={
                      index === currentSlide ? "slide current" : "slide"
                    }
                    style={{ backgroundColor: `${color}` }}
                  >
                    <FaArrowCircleLeft
                      className="arrow prev"
                      onClick={prevSlide}
                    />
                    <FaArrowCircleRight
                      className="arrow next"
                      onClick={nextSlide}
                    />
                    <div className="main-banner-content  d-flex gap-5 align-items-center">
                      <img
                        src={url}
                        alt="product"
                        className="img-fluid rounded-1 banner-img"
                      />
                      <div className="main-banner-text">
                        <h5>{name}</h5>
                        <p>{description}</p>
                        <Link to="">Show Now</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
