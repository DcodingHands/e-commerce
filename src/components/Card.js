import React from "react";
import StarRating from "./StarRating";
import AddToCartButton from "./AddToCartButton";
import { FaHeart } from "react-icons/fa";
import "../styles/card.css";
import { Link, useLocation } from "react-router-dom";
const Card = (props) => {
  let location = useLocation();

  const { status, discount, url, name, price, brand, grid, discountedPrice } =
    props;
  return (
    <div
      className={`${
        location.pathname === "/shop" ? `my-grid-${grid}` : "col-12"
      }`}
    >
      <div className="card pb-2">
        <div className="card-header border-0 bg-transparent d-flex justify-content-between m-2 ">
          <span className="badge rounded-pill bg-success">{status}</span>
          <span
            className={`${
              location.pathname === "/wishlist" ? "d-none" : "sales "
            } `}
          >
            {discount}%
          </span>
        </div>

        <div class="card-body">
          <Link to="/product/:id">
            <img src={url} class="card-image" alt="title" />
          </Link>
        </div>
        <div className="card-footer">
          <div class="mt-2 text-center">
            <Link to="/brand" className="mt-2">
              {brand}
            </Link>
          </div>
          <div class="clearfix my-3">
            <del class="float-start badge rounded-pill bg-danger">{price}</del>

            <span class="float-end badge rounded-pill bg-success">
              {discountedPrice}
            </span>
          </div>
          <div className="mt-2">
            <h6 class="text-center">{name}</h6>
          </div>

          <div className=" clearfix my-2">
            <span
              className={`${
                location.pathname === "/wishlist" ? "d-none" : "float-start "
              } `}
            >
              <FaHeart className="icons" />
            </span>
            <span className=" float-end ">
              <StarRating />
            </span>
          </div>

          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
