import React, { useState } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaBars,
  FaHeart,
  FaRegArrowAltCircleRight,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);
  const closeMenu = () => setOpenMenu(false);
  return (
    <header className="shadow-sm ">
      <div className="container d-flex align-items-center justify-content-between px-4">
        <div className="">
          <Link to="/">Logo</Link>
        </div>
        <div className={`menu ${openMenu ? "open" : ""}`}>
          <ul className="d-flex gap-4">
            <li className="">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={closeMenu}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu}>
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="d-flex gap-4 align-items-center">
            <li>
              <FaSearch size={20} className="icons" />
            </li>
            <li className="position-relative">
              <Link to="/cart">
                <span>
                  <FaShoppingCart size={20} className="icons" />
                </span>
              </Link>
              <div className="bg-danger cursor-pointer text-white text-center position-absolute top-0 start-100 translate-middle badge rounded-circle cart-height">
                <p className="text-sm">0</p>
              </div>
            </li>
            <li className="position-relative">
              <Link to="/wishlist">
                <span>
                  <FaHeart size={20} className="icons" />
                </span>
                <div className="bg-danger text-white  cursor-pointer text-center position-absolute top-0 start-100 translate-middle badge rounded-circle cart-height ">
                  <p className="text-sm ">0</p>
                </div>
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className="border-0 bg-transparent dropdown-toggle "
                  data-bs-toggle="dropdown"
                  type="button"
                  aria-expanded="false"
                >
                  <FaUser size={20} />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">Profile</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Orders</Link>
                  </li>
                  <li>
                    <Link to="/login" className="dropdown-item">
                      Login <FaRegArrowAltCircleRight size={18} />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Logout</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="mobile-btn" onClick={handleClick}>
          {openMenu ? (
            <FaTimes size={20} className="close" />
          ) : (
            <FaBars size={20} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
