import React from "react";
import Meta from "../components/Meta";
import BredCrumb from "../components/BredCrumb";
import BlogCard from "../components/BlogCard";
const Blog = () => {
  return (
    <>
      <Meta title="blog" />
      <BredCrumb title="blog" />
      <section className=" py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12 ">
              <div className="card mb-2 p-2">
                <h5 className="card-title text-center fs-5">
                  find by categories
                </h5>
                <div className="card-body">
                  <ul className="ps-0">
                    <li className="fs-6 mb-2 text-muted">Laptops</li>
                    <li className="fs-6 mb-2 text-muted">Phones</li>
                    <li className="fs-6 mb-2 text-muted">Cameras</li>
                    <li className="fs-6 mb-2 text-muted">Accessories</li>
                  </ul>
                </div>
              </div>
            </div>

            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
