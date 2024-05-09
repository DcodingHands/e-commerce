import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Meta from "../components/Meta";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword(!showPassword);
  return (
    <>
      <Meta title="Reset Password" />
      <div>
        <div className="container-xxl py-5 ">
          <div className="row">
            <div className=" col-md-6 col-xs-6 shadow-sm mx-auto rounded">
              <h3 className="text-dark text-center fs-6">Reset Password</h3>
              <hr></hr>

              <form>
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
                  <button className="btn primary-btn --btn-block my-2">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
