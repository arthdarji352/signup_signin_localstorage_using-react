import React from "react";

const Service = () => {
  return (
    <>
      <section className="services text-center py-5 my-5" id="Services">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-5">What I do</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="service-item shadow-sm p-4 rounded">
                <div className="icon my-3 text-danger fs-2">
                  <i className="fas fa-code"> </i>
                </div>
                <h3 className="fs-5 py-2">Web Development</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="service-item shadow-sm p-4 rounded">
                <div className="icon my-3 text-danger fs-2">
                  <i className="fas fa-lightbulb"> </i>
                </div>
                <h3 className="fs-5 py-2">Design</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="service-item shadow-sm p-4 rounded">
                <div className="icon my-3 text-danger fs-2"></div>
                <h3 className="fs-5 py-2">PhotoShop</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
