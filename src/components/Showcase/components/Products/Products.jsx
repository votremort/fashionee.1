import React from "react";

import "./style.css";
import data from "../../../../products.json"
import { Product } from "./components/Product/Product";
export function Products () {
  const { products } = data;
  return(
    <div className="products">
      <div className="prod-action">
        <div>There are {products.length} products in this category</div>
        <div className="sort"></div>
      </div>
      <div className="products-list">
      {
        products.map((product) => <Product key={product.id} product={product}/>)
      }
      </div>
      <div className="pagination"></div>
    </div>
  )
}