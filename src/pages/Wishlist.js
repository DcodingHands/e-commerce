import React from "react";
import BredCrumb from "../components/BredCrumb";
import Meta from "../components/Meta";
import { FaTimes } from "react-icons/fa";
import Card from "../components/Card";

const Wishlist = () => {
  return (
    <>
      <Meta title="wishlist" />
      <BredCrumb title="wishlist" />
      <section className=" py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12 wishlist">
              <div className="position-relative">
                <FaTimes
                  className="position-absolute bg-warning text-white rounded"
                  style={{
                    zIndex: "5",
                    top: "10",
                    right: "10",
                    cursor: "pointer",
                  }}
                />
              </div>
              <Card
                url={"../images/images.jpeg"}
                status={"sale"}
                name={"laptop"}
                price={1200}
                discountedPrice={1000}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 wishlist">
              <div className="position-relative">
                <FaTimes
                  className="position-absolute bg-warning text-white rounded"
                  style={{
                    zIndex: "5",
                    top: "10",
                    right: "10",
                    cursor: "pointer",
                  }}
                />
              </div>
              <Card
                url={"../images/images.jpeg"}
                status={"sale"}
                name={"laptop"}
                price={1200}
                discountedPrice={1000}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
