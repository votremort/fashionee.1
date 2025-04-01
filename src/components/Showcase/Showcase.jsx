import React, { useEffect, useState } from "react";

import "./style.css";

import data from "../../products.json"
import { favoritesKey } from "../../helpers/constant";

import { SideBar } from "./components/SideBar/SideBar";
import { Products } from "./components/Products/Products";

const itemsPerPage = 12;

export function Showcase() {
  //получение массива продукта
  const [products, setProducts] = useState(data.products);
  //для компонента сортировки устанав начальное знач
  const [sortType, setSortType] = useState('priceAsk');
  //для компонента пагинации устанв нач знач
  const [page, setPage] = useState(0);
  //изменение значение сортировки
  const changeSortType = (type) => setSortType(type);

  
  return (
    <div className="container">
      <div className="showcase">
        <SideBar />
        <Products
         products={products}
         changeSortType={changeSortType}
         sortType={sortType}
         />
    </div>
    </div>

  )
}