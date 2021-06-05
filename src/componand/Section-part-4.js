import React from "react";
import Pic1 from "../image/pic1.jpeg";

export const Section4 = () => {
  return (
    <>
      <div className="container-fluid  bg-dark mt-5 pt-3 pb-3 shadow-lg mb-3">
        <h1 className=" text-white text-center">ABOUT ME</h1>
        <div className="container text-white mrg-right pt-3">
          <div className="row">
            <div className="col-lg-4">
              <div className="col-hd">
                <img
                  src={Pic1}
                  className="bd-placeholder-img rounded-circle"
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
                <a className="btn btn-secondary col-hd" href="#">
                  View details
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <div className="col-hd">
                <img
                  src={Pic1}
                  className="bd-placeholder-img rounded-circle"
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
                <a className="btn btn-secondary col-hd" href="#">
                  View details
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <div className="col-hd">
                <img
                  src={Pic1}
                  className="bd-placeholder-img rounded-circle"
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
                <a className="btn btn-secondary col-hd" href="#">
                  View details ;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
