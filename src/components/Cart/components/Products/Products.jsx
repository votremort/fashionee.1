import React from "react";
import { useLS } from "../../../../context/LScontext";

import { Product } from "./components/Product/Product";

import * as SC from "./styles";
import { cartKey } from "../../../../helpers/constant";

export const Products = ({ products, changeProducts }) => {
  const { updateCart } = useLS(); //функции для обновления состояния

  const changeCount = (productID, newCount) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productID) {
        return {...product, count: newCount};
      }
      return product
    }).filter(product => product.count > 0);

    //обновление стейта в Cart
    changeProducts(updatedProducts);

    //обновление данных в ЛС
    const cartItems = updatedProducts.map((product) => ({
      productID: product.id,
      count: product.count
    }));
    updateCart(cartItems)
  };




  console.log(products)
  
  return (
    <SC.Products>
      {products.map((product) => <Product key={product.id} product={product} changeCount={changeCount} />)}
    </SC.Products>

  )
}