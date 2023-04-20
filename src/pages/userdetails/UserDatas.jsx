import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// const UserDatas = ({ name, email }) => {
const UserDatas = () => {
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));
  console.log(authData);
  const [all, setAll] = useState(authData);
  const handleClick = () => {
    localStorage.removeItem("auth");
    // window.location.reload;
    navigate("/");
  };

  return (
    <>
      <section className="services text-center py-5 my-5">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-5">User Data</h2>
                <h2 className="fw-bold mb-5">name :- {all.name}</h2>
                <h2 className="fw-bold mb-5">Email :-{all.email}</h2>
                <div
                  className="btn btn-danger px-3 mt-3 ms-5"
                  onClick={handleClick}
                >
                  LogOut
                </div>
                {/* <Link
                  to="signup"
                  //   onClick={handleClick}
                  className="btn btn-danger px-3 mt-3 ms-5"
                >
                  Log Out
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDatas;
