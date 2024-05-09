import React from "react";
import { Link } from "react-router-dom";

const BredCrumb = (props) => {
  return (
    <>
      <div className="breadcrumb py-4 ">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-dark">
              <Link to="/">Home / </Link>
              {props.title}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BredCrumb;
