import React from "react";

import { Product } from "./components/Product/Product";

import * as SC from "./styles";
import { cartKey } from "../../../../helpers/constant";

export const Products = ({ products, changeProducts }) => {

  const changeCount = (productId, count) => {
   const updatedProducts = products.map((product) => {
    if(product.id === productId) {
      const newCount = +count;
      return newCount <= 0 ? null : {...product, count: newCount}  
    }
    return product
   }).filter(product => product !== null);

   localStorage.setItem(cartKey, JSON.stringify(updatedProducts));

   changeProducts(updatedProducts)
  }
  return (
    <SC.Products>
      {products.map((product) => <Product key={product.id} product={product} changeCount={changeCount} />)}
    </SC.Products>

  )
}