import React from "react";
import BredCrumb from "../components/BredCrumb";
import Meta from "../components/Meta";
import "../styles/cart.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import CartImages from "../images/phone2.jpeg";
const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BredCrumb title="Cart" />
      <section className=" py-4">
        <div className="container">
          <div className="row">
            <div className="page-title">
              <h1>Shopping Cart</h1>
            </div>
            <div className="col-md-12 col-lg-8">
              <form className="form-cart">
                <div className="item">
                  <table id="cart-table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Sub-total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="flex-item">
                          <div className="thumbnail object-cover">
                            <Link to="">
                              <img src={CartImages} alt="" />
                            </Link>
                          </div>
                          <div className="content">
                            <strong>
                              <Link to="#">Hp elite note book 8080</Link>
                            </strong>
                            <p>Color: Black</p>
                          </div>
                        </td>

                        <td>250,000</td>
                        <td>
                          <div className="qty-control flex-item ">
                            <button className="minu">-</button>
                            <input type="text" value="1" min="1" />
                            <button className="plus">+</button>
                          </div>
                        </td>
                        <td>500,000.00</td>
                        <td>
                          <Link to="#" className="item-remove">
                            <i className="fa-solid fa-times"></i>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="flex-item">
                          <div className="thumbnail object-cover">
                            <Link to="">
                              <img src={CartImages} alt="" />
                            </Link>
                          </div>
                          <div className="content">
                            <strong>
                              <Link to="#">Hp elite note book 8080</Link>
                            </strong>
                            <p>Color: Black</p>
                          </div>
                        </td>

                        <td>250,000</td>
                        <td>
                          <div className="qty-control flex-item">
                            <button className="minu">-</button>
                            <input type="text" value="1" min="1" />
                            <button className="plus">+</button>
                          </div>
                        </td>
                        <td>500,000.00</td>
                        <td>
                          <Link to="#" className="item-remove">
                            <i className="fa-solid fa-times"></i>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="flex-item">
                          <div className="thumbnail object-cover">
                            <Link to="">
                              <img src={CartImages} alt="" />
                            </Link>
                          </div>
                          <div className="content">
                            <strong>
                              <Link to="#">Hp elite note book 8080</Link>
                            </strong>
                            <p>Color: Black</p>
                          </div>
                        </td>

                        <td>250,000</td>
                        <td>
                          <div className="qty-control flex-item">
                            <button className="minu">-</button>
                            <input type="text" value="1" min="1" />
                            <button className="plus">+</button>
                          </div>
                        </td>
                        <td>500,000.00</td>
                        <td>
                          <Link to="#" className="item-remove">
                            <FaTimes />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="col-md-12 col-lg-4 ">
              <div class="cart-summary styled">
                <div class="item">
                  <div class="coupon">
                    <input type=" text" placeholder="Enter coupon" />
                    <button>Apply</button>
                  </div>
                  <div class="shipping-rate">
                    <div class="has-drop-down">
                      <p class="my-3">Estimate shipping &amp; tax</p>
                      <div class="content">
                        <div class="states">
                          <form action="#">
                            <label for="states">State</label>
                            <select name="state" id="state">
                              <option value=""></option>
                              <option value="Abia">Abia</option>
                              <option value="Akwa ibom">Akwa ibom</option>
                              <option value="Rivers">Rivers</option>
                              <option value="Lagos" selected="selected">
                                Lagos
                              </option>
                            </select>
                          </form>
                        </div>
                        <div class="cities">
                          <form action="#">
                            <label for="cities">City</label>
                            <select name="city" id="city">
                              <option value=""></option>
                              <option value="Aba">Aba</option>
                              <option value="Uyo">Uyo</option>
                              <option value="Porthar-court">
                                Porthar-court
                              </option>
                              <option value="Lagos">Ikeja</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-total">
                    <table>
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>1,500,000.00</td>
                        </tr>
                        <tr>
                          <th>Discount</th>
                          <td>1,500.00</td>
                        </tr>
                        <tr>
                          <th>Shipping fee</th>
                          <td>2,000.00</td>
                        </tr>
                        <tr class="grand-total">
                          <th>TOTAL</th>
                          <td>1,500,500.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <Link to="/checkout" class="primary-btn">
                      Checkout
                    </Link>
                    <Link to="/shop">continue Shopping</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
