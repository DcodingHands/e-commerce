import React, { useState } from "react";
import "../styles/login.css";
import { FaEnvelope, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword(!showPassword);
  return (
    <>
      <Meta title="register" />
      <div>
        <div className="container-xxl py-5 ">
          <div className="row">
            <div className=" col-md-6 col-xs-6 shadow-sm mx-auto rounded">
              <h3 className="text-dark text-center"> Register</h3>
              <hr></hr>

              <form>
                <div className="mb-2 d-flex input-border rounded align-items-center">
                  <input
                    type="text"
                    className="form-control border-0 "
                    placeholder="name"
                  />
                  <div className="login-icons ">
                    <FaUser />
                  </div>
                </div>
                <div className="mb-2 d-flex input-border rounded align-items-center">
                  <input
                    type="email"
                    className="form-control border-0 "
                    placeholder="Enter Email"
                  />
                  <div className="login-icons ">
                    <FaEnvelope />
                  </div>
                </div>
                <div className="mb-2 d-flex input-border rounded align-items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control border-0 "
                    placeholder="Password"
                  />
                  <div className="login-icons " onClick={handlePassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <div className="mb-2 d-flex input-border rounded align-items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control border-0 "
                    placeholder="Confirm password"
                  />
                  <div className="login-icons " onClick={handlePassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <div>
                  <button className="btn primary-btn my-2">Register</button>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <span className="text">
                    Already have account? <Link to="/login">Login</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
