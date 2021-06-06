import React from "react";
import img5 from "../image/image5.jpg";
import "../css/nav.css";

export const Section3 = () => {
  return (
    <>
      <div className="container my-5" id="center">
        <div
          className="
          row
          p-4
          pb-0
          pe-lg-0
          pt-lg-5
          align-items-center
          rounded-3
          border
          shadow-lg
        "
        >
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1>
              <span className="link">Border hero with cropped image</span>
              and shadows
            </h1>
            <p>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a
                href="https://github.com/rohanmallick"
                className="btn btn-primary my-2 btn-lg px-4 me-md-2 fw-bold"
              >
                Github <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/rohan-mallick-515317210/"
                className="btn btn-secondary my-2 btn-lg px-4 me-md-2 fw-bold"
              >
                Linkedin <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3 "
              src={img5}
              alt="selce"
              width="100%"
              height="400vh"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Section3;
