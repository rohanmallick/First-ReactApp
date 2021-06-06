import React from "react";
import Typed from "react-typed";
import "../css/hrk.css";
import "../css/nav.css";

export const Hrk = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-2 ">
              <span className="link text-warning">Rohan Mallick</span>
            </div>
            <div className="text-3">
              He is a Passionate
              <Typed
                strings={[
                  " Web Developer",
                  " Mentor",
                  " Open Source Contributor",

                  " Freelancer",
                  " AI Enthusiast",
                  " Front End Enthusiast",
                  " UI Designer",

                  " Technical Writer",

                  " Cloud Computing Enthusiast",
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop
              />
              from India
            </div>
            <br />

            <a
              href="https://www.linkedin.com/in/rohan-mallick-515317210/"
              className="btn btn-danger btn-lg active   "
            >
              Let's work together
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hrk;
