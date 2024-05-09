import React, { useState } from "react";
import BredCrumb from "../components/BredCrumb";
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";
import Card from "../components/Card";
import "../styles/productDetails.css";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import {
  FaCaretDown,
  FaCaretRight,
  FaHeart,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import AddToCartButton from "../components/AddToCartButton";
import Colors from "../components/Colors";

const ProductDetails = () => {
  const [selected, setSelected] = useState(false);
  const handleAccordion = () => {
    setSelected(!selected);
  };
  const qty = 2;
  return (
    <>
      <Meta title="Product name" />
      <BredCrumb title="Product name" />
      <section className=" py-4">
        <div className="container">
          <div className="row gap-5">
            <div className="col-lg-6 col-sx-12">
              <div className="product-images">
                <div className="big-image mb-3">
                  <div>
                    <img src="../images/images.jpeg" alt="product name" />
                  </div>
                </div>
                <div className="images d-flex align-items-center">
                  <div className="small-image">
                    <img src="../images/images.jpeg" alt="" />
                  </div>

                  <div className="small-image">
                    <img src="../images/images.jpeg" alt="" />
                  </div>
                  <div className="small-image">
                    <img src="../images/images.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg 6 col-sx-12 my-3">
              <div className="item">
                <h1>Hp elite note book</h1>
                <div className="content">
                  <div className="rating d-flex gap-2 mt-2">
                    <div className="star">
                      <FaStar color={"#ffc107"} />
                      <FaStar color={"#ffc107"} />
                      <FaStar color={"#ffc107"} />
                      <FaStar color={"#ffc107"} />
                      <FaStar color={"#ffc107"} />
                    </div>
                    <div className="mini-text">30 reviews</div>
                  </div>
                  <div className="stock-count mt-3">
                    {qty > 0 ? (
                      <span className="available ">In stock</span>
                    ) : (
                      <span className="out-of-stock">out stock</span>
                    )}
                  </div>
                  <div className="price mt-3 d-flex">
                    <span className="current">£80,000</span>
                    <span className="del">
                      <del>£120,000</del>
                    </span>
                  </div>
                  <div className="colors mt-3">
                    <p>Select Color</p>
                    <Colors />
                  </div>
                  <div className="mx-w-150 d-flex mt-3">
                    <div className="form-group">
                      <label className="fs-6 mb-2">quantity</label>
                      <div className="input-group">
                        <span className="input-group-btn input-group-prepend">
                          <button
                            className="primary-btn"
                            type="button"
                            style={{
                              borderRadius: "0",
                              height: "40px",
                              lineHeight: "0",
                            }}
                          >
                            -
                          </button>
                        </span>
                        <input
                          type="text"
                          value="1"
                          name="demo3_22"
                          className="form-control my-border"
                        />
                        <span className="input-group-btn input-group-append">
                          <button
                            className="primary-btn"
                            type="button"
                            style={{
                              borderRadius: "0",
                              height: "40px",
                              lineHeight: "0",
                            }}
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="wishlist mt-3">
                    <ul className="d-flex gap-5">
                      <li>
                        <Link
                          to="#"
                          className="d-flex gap-2 align-items-center"
                        >
                          <FaHeart />
                          <span>Wishlist</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className=" d-flex gap-2 align-items-center"
                        >
                          <FaShareAlt />
                          <span>Share</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <AddToCartButton />
                  </div>
                  <div className="description mt-4 collapse-custom">
                    <ul>
                      <li className="has-drop-down mt-3">
                        <Link
                          className="d-flex align-items-center gap-1"
                          onClick={handleAccordion}
                        >
                          {selected ? (
                            <FaCaretDown size={25} />
                          ) : (
                            <FaCaretRight size={25} />
                          )}
                          Information
                        </Link>
                        <ul className={`content ${selected ? "expand" : ""}`}>
                          <li>
                            <span>Brand : </span>
                            <span>Hp</span>
                          </li>
                          <li>
                            <span>Speed :</span>
                            <span>3.4hz</span>
                          </li>
                          <li>
                            <span>Graphic:</span>
                            <span>intel HD graphic</span>
                          </li>
                          <li>
                            <span>Processor:</span>intel
                          </li>
                        </ul>
                      </li>
                      <li className="has-drop-down mt-4">
                        <Link className="icon-small " onClick={handleAccordion}>
                          {selected ? (
                            <FaCaretDown size={25} />
                          ) : (
                            <FaCaretRight size={25} />
                          )}
                          Description
                        </Link>
                        <div className={`content ${selected ? "expand" : ""}`}>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reprehenderit eveniet fugit porro, sed a dicta
                            excepturi voluptatibus magni optio voluptatem earum,
                            voluptate ea recusandae esse! Velit, illum?
                            Necessitatibus, nisi quam?
                          </p>
                        </div>
                      </li>
                      <li className="has-drop-down mt-4  ">
                        <Link
                          to="#"
                          className="icon-small d-flex gap-2"
                          onClick={handleAccordion}
                        >
                          <span>
                            {selected ? (
                              <FaCaretDown size={25} />
                            ) : (
                              <FaCaretRight size={25} />
                            )}
                            Reviews
                          </span>

                          <span className="mini-text">20,000</span>
                        </Link>
                        <div className={`content ${selected ? "expand" : ""}`}>
                          <div className="reviews">
                            <h4>Customer's reviews</h4>
                            <div className="review-block">
                              <div className="review-block-head">
                                <div className="flex-item">
                                  <span className="rate-count">3.9</span>
                                  <span>3,456 reviews</span>
                                </div>
                                <a
                                  href="#review-form"
                                  className="secondary-button"
                                >
                                  Write Reviews
                                </a>
                              </div>
                              <div className="review-block-body">
                                <ul>
                                  <li className="item">
                                    <div className="review-form">
                                      <p className="person">Review by John</p>
                                      <p className="mini-tex">On 06/09/2023</p>
                                    </div>
                                    <div className="review-rating rating">
                                      <div className="stars">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                      </div>
                                    </div>
                                    <div className="review-title">
                                      <p>
                                        Very good battery and high quality
                                        graphic
                                      </p>
                                    </div>
                                    <div className="review-texts">
                                      <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Pariatur recusandae
                                        consectetur suscipit! Dicta culpa,
                                        necessitatibus ratione rem corporis non
                                        exercitationem. Accusamus quibusdam iste
                                        earum dicta commodi provident fugiat
                                        voluptas magni?
                                      </p>
                                    </div>
                                  </li>
                                  <li className="item">
                                    <div className="review-form">
                                      <p className="person">Review by John</p>
                                      <p className="mini-tex">On 06/09/2023</p>
                                    </div>
                                    <div className="review-rating rating">
                                      <div className="stars">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                      </div>
                                    </div>
                                    <div className="review-title">
                                      <p>
                                        Very good battery and high quality
                                        graphic
                                      </p>
                                    </div>
                                    <div className="review-texts">
                                      <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Pariatur recusandae
                                        consectetur suscipit! Dicta culpa,
                                        necessitatibus ratione rem corporis non
                                        exercitationem. Accusamus quibusdam iste
                                        earum dicta commodi provident fugiat
                                        voluptas magni?
                                      </p>
                                    </div>
                                  </li>
                                  <li className="item">
                                    <div className="review-form">
                                      <p className="person">Review by John</p>
                                      <p className="mini-tex">On 06/09/2023</p>
                                    </div>
                                    <div className="review-rating rating">
                                      <div className="stars">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                      </div>
                                    </div>
                                    <div className="review-title">
                                      <p>
                                        Very good battery and high quality
                                        graphic
                                      </p>
                                    </div>
                                    <div className="review-texts">
                                      <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Pariatur recusandae
                                        consectetur suscipit! Dicta culpa,
                                        necessitatibus ratione rem corporis non
                                        exercitationem. Accusamus quibusdam iste
                                        earum dicta commodi provident fugiat
                                        voluptas magni?
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                                <div className="second-links">
                                  <Link to="#" className="view-all">
                                    View all reviews
                                    <i className="fa-solid fa-caret-right"></i>
                                  </Link>
                                </div>
                              </div>
                              <div id="review-form" className="review-form">
                                <h4>write a Review</h4>
                                <div className="rating">
                                  <div className="rate-this d-flex">
                                    <p>Are you satisfied enough?</p>
                                    <StarRating />
                                  </div>
                                </div>
                                <form action="#">
                                  <p>
                                    <label>Name</label>
                                    <input type="text" />
                                  </p>
                                  <p>
                                    <label>Summery</label>
                                    <input type="text" />
                                  </p>
                                  <p>
                                    <label>Summery</label>
                                    <textarea cols="30" rows="10"></textarea>
                                  </p>
                                  <p>
                                    <button className="primary-btn">
                                      Submit review
                                    </button>
                                  </p>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </section>

      <section>
        <div className="container pb-3 ">
          <div className="row">
            <div className="col-12  my-3">
              <h4 className="section-heading">Related Products</h4>
            </div>
          </div>
          <div className="">
            <ProductCarousel
              products={
                <Card
                  status={"new"}
                  discount={"10"}
                  url={"../images/images.jpeg"}
                  brand={"Hp"}
                  name={"Elite note Book"}
                  discountedPrice={180}
                  price={200}
                />
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
