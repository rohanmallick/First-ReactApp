import React from "react";
import "../nav.css";
import img from "../image/image1.jpg";

export const SectionPart1 = () => {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="bd-placeholder-img "
              src={img}
              alt="random image"
              width="100%"
              height="700vh"
            />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>
                  <span className="link">Example</span> headline.
                </h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="bd-placeholder-img "
              src={img}
              alt="random image"
              width="100%"
              height="700vh"
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>
                  <span className="link">Another example</span> headline.
                </h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="bd-placeholder-img "
              src={img}
              alt="random image"
              width="100%"
              height="700vh"
            />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>
                  <span className="link">One more</span> for good measure.
                </h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default SectionPart1;
