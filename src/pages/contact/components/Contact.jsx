import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact my-5 py-5" id="Contact">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-5">Contact Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="contact-item d-flex mb-3">
                <div className="icon fs-4 text-danger">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text ms-3">
                  <h3 className="fs-5">email</h3>
                  <p className="text-muted">arth@gmail.com</p>
                </div>
              </div>
              <div className="contact-item d-flex mb-3">
                <div className="icon fs-4 text-danger">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text ms-3">
                  <h3 className="fs-5">Phone</h3>
                  <p className="text-muted">9632587410</p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="contact-form">
                <form action="">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      />
                    </div>
                    <div className="col-lg-6 mb-4">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-4">
                      <textarea
                        rows="5"
                        type="text"
                        placeholder="Message"
                        className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="">
                      <button type="submit" className="btn btn-danger px-3">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
