import React, { useState } from "react";
import "../styles/priceRange.css";

const PriceRange = ({ minValue, maxValue, onChange }) => {
  const [minPrice, setMinPrice] = useState(minValue);
  const [maxPrice, setMaxPrice] = useState(maxValue);
  const [minThumbLeft, setMinThumbLeft] = useState(0);
  const [maxThumbLeft, setMaxThumbLeft] = useState(0);

  const handleMinChange = (event) => {
    const value = parseInt(event.target.value);
    setMinPrice(value);
    setMinThumbLeft(((value - minValue) / (maxValue - minValue)) * 100);
    onChange({ minPrice: value, maxPrice });
  };
  const handleMinInput = (event) => {
    const value = parseInt(event.target.value);
    if (value < maxValue) {
      setMinPrice(value);
      setMinThumbLeft(((value - minValue) / (maxValue - minValue)) * 100);
    }
  };
  const handleMaxChange = (event) => {
    const value = parseInt(event.target.value);
    setMaxPrice(value);
    setMaxThumbLeft(((value - maxValue) / (minValue - maxValue)) * 100);
    onChange({ minPrice, maxPrice: value });
  };
  const handleMaxInputValue = (event) => {
    const value = parseInt(event.target.value);
    if (value <= maxValue) {
      setMaxPrice(value);
      setMaxThumbLeft(((value - maxValue) / (minValue - maxValue)) * 100);
    }
  };

  return (
    <>
      <h6 className="card-title text-center fs-6">Price</h6>
      <div className="slider-range">
        <span
          className="slider-track"
          style={{ left: minThumbLeft + "%", right: maxThumbLeft + "%" }}
        ></span>
        <input
          type="range"
          name="min"
          className="min-value"
          min={minValue}
          max={maxValue}
          value={minPrice}
          onChange={handleMinChange}
        />
        <input
          type="range"
          className="max-value"
          min={minValue}
          max={maxValue}
          value={maxPrice}
          onChange={handleMaxChange}
        />
        <div
          className="tool-tip min-tooltip"
          style={{ left: minThumbLeft + "%" }}
        >
          {"$" + minPrice}
        </div>
        <div
          className="tool-tip max-tooltip"
          style={{ right: maxThumbLeft + "%" }}
        >
          {"$" + maxPrice}
        </div>
      </div>
      <div className="input-box">
        <div className="min-box">
          <div className="input-wrapper">
            <span className="input-addOn">$</span>
            <input
              type="text"
              name="min"
              value={minPrice}
              className="input-field min-value"
              onChange={handleMinInput}
            />
          </div>
        </div>
        <div className="max-box">
          <div className="input-wrapper">
            <span className="input-addOn">$</span>
            <input
              type="text"
              name="max"
              value={maxPrice}
              className="input-field max-value"
              onChange={handleMaxInputValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
