import React from "react";

import * as SC from "./styles"
//changeCount
//onClick={() => changeCount(product.id, product.count - 1)}

export const Product = ({ product, changeCount }) => {
  const handleDecrease = () => {
    changeCount(product.id, product.count - 1);
  };

  const handleIncrease = () => {
    changeCount(product.id, product.count + 1);
  };

  return(
    <SC.Product>
      <SC.ProductInfo>
        <SC.Photo alt={product.name} src={product.image} />
        <SC.InfoWrap>
          <SC.Name>{product.name}</SC.Name>
          <SC.PricesWrap>
            <SC.Prices>
              { product.oldPrice && <SC.OldPrice>${product.oldPrice}</SC.OldPrice>}
              <SC.Price>${product.price}</SC.Price>
            </SC.Prices>
            <SC.Counter>
              <SC.CounterBtn onClick={handleDecrease} >−</SC.CounterBtn>
              <SC.Count 
                type="text" 
                value={product.count} 
                readOnly
              />
              <SC.CounterBtn onClick={handleIncrease}>+</SC.CounterBtn>
            </SC.Counter>
          </SC.PricesWrap>
        </SC.InfoWrap>
      </SC.ProductInfo>
      <SC.Sum>${+(product.price * product.count).toFixed(2)}</SC.Sum>
    </SC.Product>
  )
}