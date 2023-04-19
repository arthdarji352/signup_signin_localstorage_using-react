import React from "react";

const About = () => {
  return (
    <>
      <section className="about bg-white my-5 py-5" id="About">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-5">About Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="about-text">
                <h3 className="fs-4 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="row text-center text-uppercase my-3">
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">50</h4>
                    <p className="text-muted">Projects Completed</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">40</h4>
                    <p className="text-muted">Happy Clients</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">80</h4>
                    <p className="text-muted">Positive Reviews</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex align-items-center">
                  <a href="#portfolio" className="btn btn-danger px-3 me-5">
                    DownLoad CV
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div className="skill-item mb-4">
                <h3 className="fs-6">HTML</h3>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example 1px high"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "5px" }}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">CSS</h3>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example 1px high"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "5px" }}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">JAVASCRIPT</h3>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example 1px high"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "5px" }}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">Bootstrap</h3>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example 1px high"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "5px" }}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
