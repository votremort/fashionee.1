import React, { useEffect, useState } from "react";

import "./style.css";

import data from "../../products.json"
import { favoritesKey } from "../../helpers/constant";
import { getProducts } from "../../helpers/getProducts";

import { SideBar } from "./components/SideBar/SideBar";
import { Products } from "./components/Products/Products";

const itemsPerPage = 12;

export function Showcase() {
  //получение массива продукта
  const [products, setProducts] = useState([]);
  //для компонента сортировки устанав начальное знач
  const [sortType, setSortType] = useState('priceAsk');
  //для компонента пагинации устанв нач знач
  const [page, setPage] = useState(0);
  //кол-во товаров для отображения надписи на странице
  const [countOfProducts, setCountOfProducts] = useState(0);
  //изменение значение сортировки
  const changeSortType = (type) => setSortType(type);
  //Изменение значение страницы
  const changePage = (page) => setPage(page);


  useEffect(() => {
    const pagination = {
      page: page,
      itemsPerPage: itemsPerPage
    }
    const info = getProducts(pagination, sortType);
    setProducts(info.products);
    setCountOfProducts(info.total);
  }, [page, sortType])


  return (
    <div className="container">
      <div className="showcase">
        <SideBar />
        {!products.length && <>Loading...</>}
        <Products
         products = {products}
         changeSortType = {changeSortType}
         sortType = {sortType}
         countOfProducts = {countOfProducts}
         changePage = {changePage}
         totalPages = {Math.round(countOfProducts / itemsPerPage)}
         currentPage = {page}
         />
    </div>
    </div>

  )
}