import React from "react";
import BredCrumb from "../components/BredCrumb";
import Meta from "../components/Meta";
import "../styles/contact.css";

import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <Meta title="contact" />
      <BredCrumb title="contact" />
      <section className=" py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between gap-5">
                <div className="col-6">
                  <h4 className=" mb-3 fs-6">Contact Us</h4>
                  <form>
                    <div className="mb-2 d-flex input-border rounded align-items-center">
                      <input
                        type="text"
                        className="form-control border-0 "
                        placeholder="name"
                      />
                    </div>
                    <div className="mb-2 d-flex input-border rounded align-items-center">
                      <input
                        type="email"
                        className="form-control border-0 "
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="mb-2 d-flex input-border rounded align-items-center">
                      <textarea
                        name="message"
                        id=""
                        cols="20"
                        rows="8"
                        className="form-control border-0 "
                      ></textarea>
                    </div>

                    <div>
                      <button className="btn primary-btn my-2">Send</button>
                    </div>
                  </form>
                </div>
                <div className="col-6">
                  <h4 className=" mb-3 fs-6">Get In Touch With Us</h4>
                  <ul className="pb-0">
                    <li className="mb-3 d-flex align-items-center h-100 gap-3 fs-6 ">
                      <FaHome />
                      <address className=" mb-0">
                        No 33 Sateru Lane Lekki Lagos, Nigeria
                      </address>
                    </li>
                    <li className="d-flex align-items-center gap-3 fs-6 mb-3">
                      <FaPhone />
                      <a href="tel:07054289883">+234 7054289883</a>
                    </li>
                    <li className="d-flex align-items-center gap-3 fs-6 mb-3">
                      <FaEnvelope />
                      <a href="mailto:dcreativehand@gmail.com">
                        dcreativehand@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
