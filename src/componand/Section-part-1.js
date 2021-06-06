import React from "react";
import "../css/nav.css";
import img from "../image/img45.jpg";
import img1 from "../image/image21.jpg";
import img2 from "../image/img2.jpg";

// for goodmoring-part

let curDate = new Date();
curDate = curDate.getHours();
let getting = "";

if (curDate >= 1 && curDate < 12) {
  getting = "Good Morning";
} else if (curDate >= 12 && curDate < 18) {
  getting = "Good Afternoon";
} else {
  getting = "Good Evening";
}

// for goodmoring-part-end

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
              alt="random "
              width="100%"
              height="700vh"
            />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>
                  <span className="link">{getting}</span>
                  ,Guys.
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
              src={img2}
              alt="random "
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
              src={img1}
              alt="random"
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
