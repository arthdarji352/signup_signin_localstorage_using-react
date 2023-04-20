import { useState, useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";

const reactImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";

function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getUsers = localStorage.getItem("users");
  const [users, setUsers] = useState(getUsers ? JSON.parse(getUsers) : []);
  console.log(users);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name": {
        if (!value.match(/^[a-zA-Z\s]+$/) || value.length < 3) {
          setError((pre) => ({
            ...pre,
            [name]: "plz enter valid Name",
          }));
        } else {
          setError((pre) => ({ ...pre, [name]: "" }));
        }
        break;
      }
      case "email": {
        if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
          setError((pre) => ({ ...pre, [name]: "Pleaese Enter Valid Email" }));
        } else {
          setError((pre) => ({ ...pre, [name]: "" }));
        }
        break;
      }

      case "password": {
        if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/)) {
          setError((pre) => ({
            ...pre,
            [name]:
              "password must contain 8 letters  and include min 1 capital,small,num,special char",
          }));
        } else {
          setError((pre) => ({ ...pre, [name]: "" }));
        }
        break;
      }

      default: {
        break;
      }
    }
    setInput((pre) => ({ ...pre, [name]: value }));
  };

  console.log(input.email);
  const allEmail = users.map((user) => {
    return user.email;
  });
  console.log(allEmail);

  const emailCheck = allEmail.some((email) => {
    return email === input.email;
  });

  console.log(emailCheck);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.name !== "" && input.email !== "" && input.password !== "") {
      if (!emailCheck) {
        const newUser = input;

        setUsers((prev) => [...prev, newUser]);
        alert("register successfully");
        // navigate("/login");
      } else {
        alert("email already there");
      }
    } else {
      alert(" please enter require fields");
    }

    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <section className="bg-danger bg-opacity-25">
      <div className="d-flex flex-column min-vh-100 justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 mx-auto bg-white rounded shadow">
              <div className="row">
                <div className="col-md-6">
                  <div className="m-5 text-center">
                    <h1>
                      Welcome!
                      <br />
                      SignUp
                    </h1>
                  </div>

                  <form onSubmit={handleSubmit} className="m-5">
                    <div className="mb-3">
                      <label className="form-label">Your Name</label>
                      <input
                        className="form-control"
                        type="text"
                        id="username"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                        autoComplete="username"
                      />

                      {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                      )}
                    </div>

                    <div className="">
                      <input
                        type="submit"
                        className="form-control btn btn-primary mt-3"
                        // disabled={!validate()}
                        // disabled={isSubmit}
                      />
                      {/* <SubmitButton /> */}
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <div>
                    <img
                      src={reactImage}
                      alt="login"
                      className="img-fluid p-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
