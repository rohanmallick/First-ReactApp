import React from "react";
import "../css/contact-us.css";
import "../css/nav.css";

export const contact = () => {
  return (
    <>
      <section className="  pb-5 bg-info contact-my">
        <div className="container ">
          <div className="row mb-3 ">
            <div className="col-sm text-center">
              <h1 className="div-heading display-3 mt-2">
                <span className="link">Contact Me</span>
              </h1>
              <h4 className="div-heading  mt-1">
                <span className="text-danger">Get in touch with me</span>
              </h4>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6">
              <form>
                <div className="form-group mb-3">
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Your Full Name..."
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your Email Address..."
                  />
                </div>

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    style={{ height: "14vh" }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning btn-lg btn-block"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-6 para-con">
              <h5>
                Email:
                <small className="p-2">rohanmallick1075@gmail.com</small>
              </h5>
              <h5>
                Contact:
                <small>
                  <span className="p-2">
                    +91 98765 10278 || +91 76589 14244
                  </span>
                </small>
              </h5>
              <h5>
                Follow Me:
                <small className="social-links">
                  <a href="https://www.facebook.com/profile.php?id=100015495889466">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/rohanmallick1075/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/RohanMa23013570">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://github.com/rohanmallick">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/rohan-mallick-515317210/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </small>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default contact;
