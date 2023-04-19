import React from "react";
import first from "../../../assets/img/1.jpg";
import second from "../../../assets/img/2.jpg";
import third from "../../../assets/img/3.jpg";
import forth from "../../../assets/img/4.jpg";
import five from "../../../assets/img/5.jpg";
import six from "../../../assets/img/6.jpg";

const Project = () => {
  return (
    <>
      <div className="project  my-5 py-2" id="Project">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-5">Project</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="project-item">
                <img
                  src={first}
                  alt="project item"
                  className="w-100 img-thumbnail"
                />
                <h3 className="text-capitalize fs-5 my-2 ">Team Section</h3>
                <p className="mb-4">
                  <a href="#Home" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-item">
                <img
                  src={second}
                  alt="project item"
                  className="w-100 img-thumbnail"
                />
                <h3 className="text-capitalize fs-5 my-2 ">Team Section</h3>
                <p className="mb-4">
                  <a href="#Home" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-item">
                <img
                  src={third}
                  alt="project item"
                  className="w-100 img-thumbnail"
                />
                <h3 className="text-capitalize fs-5 my-2 ">Team Section</h3>
                <p className="mb-4">
                  <a href="#Home" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-item">
                <img
                  src={forth}
                  alt="project item"
                  className="w-100 img-thumbnail"
                />
                <h3 className="text-capitalize fs-5 my-2 ">Team Section</h3>
                <p className="mb-4">
                  <a href="#Home" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-item">
                <img
                  src={five}
                  alt="project item"
                  className="w-100 img-thumbnail"
                />
                <h3 className="text-capitalize fs-5 my-2 ">Team Section</h3>
                <p className="mb-4">
                  <a href="#Home" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-item">
                <img
                  src={six}
                  alt="project item"
                  className="w-100 img-thumbnail"
                />
                <h3 className="text-capitalize fs-5 my-2 ">Team Section</h3>
                <p className="mb-4">
                  <a href="Home" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
