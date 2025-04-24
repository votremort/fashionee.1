import React, { useEffect, useState } from "react";

import * as SC from "./styles";

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
  //получение значения поиска
  const [searchValue, setSearchValue] = useState('');
  //знач выбранной категории
  const [selectedCategory, setSelectedCategory] = useState('');
  //диапозон цены
  const [prices, setPrices] = useState({});
  //выбранные цвета
  const [selectedColors, setSelectedColors] = useState([]);

  //изменение значение сортировки
  const changeSortType = (type) => setSortType(type);
  //Изменение значение страницы
  const changePage = (page) => setPage(page);
  //изменения значения поиска  
  const changeSearch = (value) => setSearchValue(value);
  //Изменение знач категории
  const changeCategory = (category) => setSelectedCategory(category);
  //изменение диапазона цены
  const changePrices = (min, max) => setPrices({ min, max });
  //
  const changeColors = (colors) => setSelectedColors(colors);
  


  useEffect(() => {
    const pagination = {
      page: page,
      itemsPerPage: itemsPerPage
    }

    const filters = {
      search: searchValue,
      category: selectedCategory,
      prices,
      colors: selectedColors
    }
    
    const info = getProducts(pagination, sortType, filters);

    setProducts(info.products);
    setCountOfProducts(info.total);
  }, [page, sortType, searchValue, selectedCategory, prices, selectedColors])


  return (
    <SC.Container>
      <SC.Showcase>
        <SideBar 
          changeSearch={changeSearch} 
          changeCategory={changeCategory}
          selectedCategory={selectedCategory}
          changePrices={changePrices}
          changeColors={changeColors}
        />
        <Products
         products = {products}
         changeSortType = {changeSortType}
         sortType = {sortType}
         countOfProducts = {countOfProducts}
         changePage = {changePage}
         totalPages = {Math.ceil(countOfProducts / itemsPerPage)}
         currentPage = {page}
         />
    </SC.Showcase>
    </SC.Container>

  )
}