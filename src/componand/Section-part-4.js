import React from "react";
import Pic1 from "../image/pic14.jpg";
import Pic2 from "../image/pic12.jpg";
import Pic3 from "../image/pic13.jpg";
// import "../css/contact-us.css";

export const Section4 = () => {
  return (
    <>
      <div className="container-fluid  bg-dark  mt-5 pt-3 pb-3 shadow-lg ">
        <h1 className=" text-white text-center">ABOUT ME</h1>
        <div className="container text-white mrg-right pt-3">
          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="col-hd">
                <img
                  src={Pic1}
                  className="bd-placeholder-img rounded-circle"
                  alt="photos"
                  width="140"
                  height="140"
                />

                <h2 className="welcome">Heading</h2>
              </div>
              <p className="text-muted">
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <span className="btn btn-secondary col-hd">View details</span>
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <div className="col-hd">
                <img
                  src={Pic2}
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  alt="random"
                  height="140"
                />

                <h2 className="welcome">Heading</h2>
              </div>
              <p className="text-muted">
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <span className="btn btn-secondary col-hd">View details</span>
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <div className="col-hd">
                <img
                  src={Pic3}
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  alt="photos"
                  height="140"
                />

                <h2 className="welcome">Heading</h2>
              </div>
              <p className="text-muted">
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <span className="btn btn-secondary col-hd">View details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
