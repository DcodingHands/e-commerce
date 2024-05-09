import { Link } from "react-router-dom";
import "../styles/footer.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="py-3  ">
        <div className="container xxl">
          <div className="row align-items-center">
            <div className="col-md-5 col-xs-6">
              <div className="footer-logo d-flex gap-3 align-items-center">
                <Link to={"/"}>
                  <h1>Logo</h1>
                </Link>
                <h5 className="text-white">Sign Up For Our NEWSLETTER</h5>
              </div>
            </div>
            <div className="col-md-7 col-xs-6">
              <div className="input-group">
                <input
                  className="form-control py-1"
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                  aria-describedby="basic-addOn"
                />
                <span
                  className="input-group-text text-white p-1 bg-danger cursor-pointer"
                  id="basic-addOn"
                >
                  Subscribed
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3  ">
        <div className="container xxl">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <h4 className="text-white mb-4">ABOUT US</h4>
              <div className="footer-links">
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <ul className="d-flex flex-column">
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white ">
                      <FaMapMarker className="footer-icons" />
                      1734 Stonecoal Road
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white ">
                      <FaPhone className="footer-icons" />
                      +021-95-51-84
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white ">
                      <FaEnvelope className="footer-icons" />
                      email@email.com
                    </Link>
                  </li>
                </ul>
                <ul class="d-flex gap-3 mt-3">
                  <li>
                    <Link to={"/"}>
                      <FaFacebook size={25} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaTwitter size={25} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaInstagram size={25} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <h4 className="text-white mb-4">CATEGORIES</h4>
              <div>
                <ul>
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white">
                      Hot deals
                    </Link>
                  </li>
                  <li className="py-1 mb-1">
                    <Link to="#" className="text-white ">
                      Laptops
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white">
                      Smartphones
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white">
                      Cameras
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <h4 className="text-white mb-4">INFORMATION</h4>
              <div className="footer-links">
                <ul className="d-flex flex-column">
                  <li className=" py-1 mb-1">
                    <Link to="/privacy-policy" className="text-white ">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white ">
                      Orders and Returns
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="/term-and-condition" className="text-white ">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links">
                <ul className="d-flex flex-column">
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white py-2 mb-1">
                      My Account
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="/cart" className="text-white ">
                      View Cart
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="/about" className="text-white ">
                      About Us
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="/contact" className="text-white ">
                      Contact Us
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="/wishlist" className="text-white">
                      Wishlist
                    </Link>
                  </li>
                  <li className=" py-1 mb-1">
                    <Link to="#" className="text-white ">
                      Track My Order
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3  ">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white">
                &copy;{new Date().getFullYear()}; Design By DcodingHands
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
