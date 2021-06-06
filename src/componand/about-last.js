import React from "react";
import me from "../image/pic10.jpg";
import "../css/about.css";

export const about3 = () => {
  return (
    <>
      <div className="container mb-5 about-intro">
        <div className="para-ab">
          <h1 className="display-3 font-weight-bold mt-2">THIS IS MY STORY</h1>

          <p className="mb-3" style={{ lineHeight: "23px", fontSize: "20px" }}>
            My name is Rohan Mallick and I am a full-stack Web Application
            Developer and Software Developer, currently living in India, west
            bengal. I have a Bachelor of Computer Applications from George
            College, and my primary focus and inspiration for my studies is Web
            Development.
          </p>
          <p className="mb-4" style={{ lineHeight: "23px", fontSize: "20px" }}>
            I have been studying web development since 2018 and I develop in
            both C# and PHP. I am experienced in both front and back-end
            development, and I am proficient in HTML/HTML5, CSS/CSS3, LESS,
            SASS, XML, JavaScript, jQuery, AJAX, and SQL/MySQL to name a few. I
            am also proficient in many non-web-based languages, including but
            not limited to Java, Scheme/Racket, C, Python projects,.
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
