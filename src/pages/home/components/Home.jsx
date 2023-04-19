import React from "react";
import photo from "../../../assets/img/photo.jpg";
import { Link } from "react-router-dom";
// import Login from "../../login/Index";

const Home = () => {
  const handleClick = () => {
    localStorage.clear();
    // window.location.reload;
  };
  return (
    <div className="container-lg " id="Home">
      <div className="row min-vh-100 align-items-center align-content-center">
        <div className="col-md-6 mt-5 mt-md-0">
          <div className="home-img">
            <img className="" src={photo} alt="profile" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="home-text mt-5 mt-md-0">
            <p className="text-muted mb-1">Hello I'm</p>
            <h1 className="text-danger text-uppercase fs-1 fw-bold">
              Software Developer
            </h1>
            <h2 className="fs-4">Arth Darji</h2>
            <p className="mt-4 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="service " className="btn btn-danger px-3 mt-3">
              My Work
            </Link>
            <Link
              to="signup"
              onClick={handleClick}
              className="btn btn-danger px-3 mt-3 ms-5"
            >
              Clear All Data
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
