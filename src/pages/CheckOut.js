import React from "react";
import BredCrumb from "../components/BredCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import "../styles/checkout.css";
import Immage from "../images/images.jpeg";
const CheckOut = () => {
  return (
    <>
      <Meta title="Checkout" />
      <BredCrumb title="Checkout" />
      <section className=" py-4">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 col-lg-7 ">
              <div class="item left styled">
                <h1>Shipping address</h1>
                <form action="#">
                  <p>
                    <label for="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                    />
                  </p>
                  <p>
                    <label for="fname">first name</label>
                    <input
                      type="fname"
                      name="fname"
                      id="fname"
                      placeholder="first name"
                    />
                  </p>
                  <p>
                    <label for="lname">last name</label>
                    <input
                      type="lname"
                      name="lname"
                      id="lname"
                      placeholder="last name"
                    />
                  </p>
                  <p>
                    <label for="address">Address</label>
                    <input
                      type="address"
                      name="address"
                      id="address"
                      placeholder="address"
                    />
                  </p>
                  <p>
                    <label for="state">State</label>
                    <input
                      type="state"
                      name="state"
                      id="state"
                      placeholder="state"
                    />
                  </p>
                  <p>
                    <label for="City">City</label>
                    <input
                      type="City"
                      name="City"
                      id="City"
                      placeholder="City"
                    />
                  </p>

                  <p>
                    <label for="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="phone no"
                    />
                  </p>
                  <p>
                    <label for="phone">comment (optional)</label>
                    <textarea name="comment" cols="30" rows="10"></textarea>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 ">
              <div class="item right">
                <h2>order details</h2>
                <div class="summary-order is_sticky">
                  <div class="summary-totals">
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>200,000.00</span>
                      </li>
                      <li>
                        <span>Discount</span>
                        <span>100.00</span>
                      </li>
                      <li>
                        <span>Shipping</span>
                        <span>10,000.00</span>
                      </li>
                      <li>
                        <span>Total</span>
                        <strong>210,000.00</strong>
                      </li>
                    </ul>
                  </div>
                  <ul class="products mini">
                    <li class="item">
                      <div class="thumbnail object-cover">
                        <img src={Immage} alt="" />
                      </div>
                      <div class="item-content">
                        <p>Hp elite note book 8040</p>
                        <span class="price">
                          <span>120,000</span>
                          <span>x 3</span>
                        </span>
                      </div>
                    </li>
                    <li class="item">
                      <div class="thumbnail object-cover">
                        <img src={Immage} alt="" />
                      </div>
                      <div class="item-content">
                        <p>Hp elite note book 8040</p>
                        <span class="price">
                          <span>120,000</span>
                          <span>x 3</span>
                        </span>
                      </div>
                    </li>
                    <li class="item">
                      <div class="thumbnail object-cover">
                        <img src={Immage} alt="" />
                      </div>
                      <div class="item-content">
                        <p>Hp elite note book 8040</p>
                        <span class="price">
                          <span>120,000</span>
                          <span>x 3</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mt-5">
                <button class="primary-btn --btn-block">Place order</button>
                <p className="mt-3">
                  <Link to="/shop">continue Shopping</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
