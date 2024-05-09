import React from "react";
import BredCrumb from "../components/BredCrumb";
import Meta from "../components/Meta";
import "../styles/singleBlog.css";
const SingleBlog = () => {
  return (
    <>
      <Meta title="Blog title" />
      <BredCrumb title="Blog title" />
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
            <div className="col-lg-9 col-md-6 col-xs-12 ">
              <article className="blog-detail card-box overflow-hidden mb-30">
                <div className="blog-image-container">
                  {/* <img
                    src="../images/images.jpeg"
                    alt="Post Thumbnail"
                    className="w-100"
                    loading="lazy"
                    decoding="async"
                  /> */}
                </div>
                <div className="blog-caption">
                  <h4 className="mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                  <h5 className="mb-10">
                    Lorem ipsum dolor sit amet, consectetur.
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <h5 className="mb-10">Unordered List</h5>
                  <ul>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate.
                    </li>
                    <li>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </li>
                    <li>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate.
                    </li>
                    <li>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </li>
                    <li>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                  </ul>
                  <h5 className="mb-10">Ordered List</h5>
                  <ol>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate.
                    </li>
                    <li>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </li>
                    <li>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate.
                    </li>
                    <li>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </li>
                    <li>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                  </ol>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
