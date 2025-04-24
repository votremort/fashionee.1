import React from "react";

import * as SC from "./styles";

export const PriceFilter = ({ infoForPrice, changeMinPrice, changeMaxPrice }) => {
  const minPrice = infoForPrice.prices.min;
  const maxPrice = infoForPrice.prices.max;
  return (
    <section>
      <SC.Title>Price</SC.Title>
      <SC.PriceWrap>
        <SC.PriceLabel>
          Min:
          <SC.PriceInput placeholder={minPrice} onChange={changeMinPrice} />
        </SC.PriceLabel>
        <SC.PriceLabel>
          Max:
          <SC.PriceInput placeholder={maxPrice} onChange={changeMaxPrice} max={maxPrice} />
        </SC.PriceLabel>
      </SC.PriceWrap>
    </section>
  )
}