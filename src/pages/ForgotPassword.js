import React from "react";
import Meta from "../components/Meta";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <div>
        <div className="container-xxl py-5 ">
          <div className="row">
            <div className=" col-md-6 col-xs-6 shadow-sm mx-auto rounded">
              <h3 className="text-dark text-center fs-6">
                Reset Your password
              </h3>
              <hr></hr>
              <p className="text-muted text-center fs-6">
                To reset Your Password, enter the email address you used when
                registering. <br />
                An email will be send to you on how to reset your password
              </p>
              <form>
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

                <div className="d-flex justify-content-between mb-3 ">
                  <button className="btn primary-btn my-2">Continue</button>
                  <Link to="/login">
                    <button className="btn primary-btn my-2">Back Login</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
