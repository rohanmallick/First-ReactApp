import React from "react";

export const Section2 = (props) => {
  return (
    <>
      <div className="row featurette">
        <div className={props.normal}>
          <h2 className="featurette-heading">
            {props.title}
            <span className="text-muted">{props.span}</span>
          </h2>
          <p className="lead">{props.head}</p>
        </div>

        <div className="col-md-5">
          <img
            src={props.img}
            alt="section "
            style={{ width: "450px", height: "400px" }}
            className="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto 
            "
          />
        </div>
      </div>
    </>
  );
};

export default Section2;
