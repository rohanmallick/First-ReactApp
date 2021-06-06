import React from "react";
import "../css/Section-part5.css";

export const aboutmid = () => {
  return (
    <>
      <div className=" row container">
        <h1 className="display-4 text-center my-3">Technologies skills</h1>
        <div className="card col-md-3 col-sm-6 item" style={{ width: "18rem" }}>
          <i
            className="fab fa-js-square  text-center  mt-5 icn"
            style={{ color: "#f0db4f" }}
          ></i>
          <div className="card-body">
            <h5 className="card-title text-center">Javascript</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card col-md-3 col-sm-6 item" style={{ width: "18rem" }}>
          <i
            className="fab fa-php  text-center  mt-5 icn"
            style={{ color: "#8993be" }}
          ></i>
          <div className="card-body">
            <h5 className="card-title text-center">Php</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card col-md-3 col-sm-6 item" style={{ width: "18rem" }}>
          <i
            className="fab fa-react  text-center  mt-5 icn"
            style={{ color: "#61dbfb" }}
          ></i>
          <div className="card-body">
            <h5 className="card-title text-center">React</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card col-md-3 col-sm-6 item" style={{ width: "18rem" }}>
          <i
            className="fab fa-python  text-center  mt-5 icn"
            style={{ color: "#4B6EF5" }}
          ></i>
          <div className="card-body">
            <h5 className="card-title text-center">python</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutmid;
