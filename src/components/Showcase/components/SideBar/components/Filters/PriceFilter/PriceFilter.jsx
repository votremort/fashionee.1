import React from "react";

import "./style.css";

export const PriceFilter = ({ infoForPrice }) => {
  const minPrice = infoForPrice.prices.min;
  const maxPrice = infoForPrice.prices.max;
  return (
    <section className="price">
      <div className="sidebar-title">Price</div>
      <span className="price"></span>
      <div className="price-range">
        <label className="price-label">
          Min:
          <input className="price-input" placeholder={minPrice}/>
        </label>
        <label className="price-label">
          Max:
          <input className="price-input" placeholder={maxPrice}/>
        </label>
      </div>
    </section>
  )
}