import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="fixed-top">
      <div className="d-flex bg-danger">
        <div className="p-4">
          <Link to="/signup" className="text-decoration-none text-light">
            SignUp
          </Link>
        </div>

        <div className="p-4">
          <Link to="/login" className="text-decoration-none text-light">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
