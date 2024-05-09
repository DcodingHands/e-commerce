import React, { useState } from "react";
import BredCrumb from "../components/BredCrumb";
import Meta from "../components/Meta";
import "../styles/shop.css";
import PriceRange from "../components/PriceRange";
import {
  FaGripHorizontal,
  FaGripLinesVertical,
  FaGripVertical,
} from "react-icons/fa";
import Card from "../components/Card";
import { data } from "../data/rawData";
import Colors from "../components/Colors";

const Shop = () => {
  const [grid, setGrid] = useState(4);
  const [prices, setPrices] = useState({ minPrice: 5000, maxPrice: 500000 });
  const handlePriceChange = ({ minPrice, maxPrice }) => {
    setPrices({ minPrice, maxPrice });
  };
  const product = data.map((item) => {
    return (
      <Card
        grid={grid}
        status={item.status}
        discount={item.discount}
        url={item.url}
        brand={item.brand}
        name={item.name}
        price={item.price}
        discountedPrice={item.discountedPrice}
      />
    );
  });
  return (
    <>
      <Meta title="Shop" />
      <BredCrumb title="Shop" />
      <section className=" py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3">
              <div className="card mb-2 p-2">
                <h5 className="card-title text-center fs-5">
                  shop by categories
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
              <div className="card mb-2 p-2">
                <h5 className="card-title text-center fs-5">Filter By</h5>
                <div className="">
                  <PriceRange
                    minValue={5000}
                    maxValue={250000}
                    onChange={handlePriceChange}
                  />
                  {/* just show filtered price */}
                  <p className="mt-3">{prices.minPrice}</p>
                </div>

                <div className="mt-3">
                  <h6 className="card-title fs-6">Availability</h6>
                  <form className="form-check">
                    <input type="checkbox" className="from-check-input" />
                    <label className="mx-1  text-muted form-check-label">
                      In Stock (4)
                    </label>
                  </form>
                  <form className="form-check">
                    <input type="checkbox" className="from-check-input" />
                    <label className="mx-1  text-muted form-check-label">
                      Out Of Stock (0)
                    </label>
                  </form>
                </div>
              </div>
              <div className="card mb-2 p-2">
                <h5 className="card-">Colors</h5>
                <Colors />
              </div>
            </div>
            <div className="col-md-12 col-lg-9">
              <div className="filter-sort-grid ">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <p
                      className="mb-0 d-block text-white"
                      style={{ width: "100px" }}
                    >
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select">
                      <option value="popularity">popularity</option>
                      <option value="best-selling">best selling</option>
                      <option value="created">latest</option>
                      <option value="price-ascending">high to low price</option>
                      <option value="price-descending">
                        low to high price
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <p className="total-products mb-0 text-white">
                      1234 products
                    </p>
                    <div className="d-flex align-items-center gap-3 grid">
                      <FaGripLinesVertical
                        className="text-white icon"
                        onClick={() => setGrid(12)}
                      />

                      <FaGripVertical
                        className="text-white icon"
                        onClick={() => setGrid(6)}
                      />

                      <FaGripHorizontal
                        className="text-white icon"
                        onClick={() => setGrid(4)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" products-list my-4 d-flex gap-3 flex-wrap">
                {product}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
