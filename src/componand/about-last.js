import React from "react";
import me from "../image/me.jpeg";
import "../css/about.css";

export const about3 = () => {
  return (
    <>
      <div className="container mb-5 about-intro">
        <div className="para-ab">
          <h1 className="display-3 font-weight-bold mt-2">THIS IS MY STORY</h1>

          <p className="mb-3" style={{ lineHeight: "25px", fontSize: "20px" }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page.
          </p>
          <p className="mb-4" style={{ lineHeight: "25px", fontSize: "20px" }}>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide
          </p>
          <a
            href="https://www.instagram.com/rohanmallick1075/"
            className="btn btn-danger"
          >
            Follow Me
          </a>
        </div>

        <div className=" mt-5">
          <img src={me} className="about-intro-img" alt="Rohan" />
        </div>
      </div>
    </>
  );
};

export default about3;
