import React, {useEffect, useState} from "react";

import * as SC from "./styles";

import { favoritesKey, cartKey } from "../../../../helpers/constant";

import { Product } from "./components/Product/Product";
import { Sort } from "./components/Sort/Sort";
import { Pagination } from "./components/Pagination/Pagination";

export function Products ({ 
  products, changeSortType, sortType, countOfProducts, 
  changePage, totalPages, currentPage, 
 }) {
  //нужно для хранения массива товаров находящегося в ЛС, что бы при перезагрузке
  //корректно отображать и окрашивать сердечки избранного
  const [productsInLS, setProductsInLS] = useState([]);
  const productsWithCount = [];
  products.map((product) => {
    return productsWithCount.push({...product, count: 0});
  });

  const buyProduct = (product) => {
    const fromCart = localStorage.getItem(cartKey);
     
    if (!fromCart) { 
      localStorage.setItem(cartKey, JSON.stringify([{product, count: 1}]));
      return;
    }
    
    const products = JSON.parse(fromCart);
    const inCart = products.find((productInLs) => productInLs.id === product.id);

    if (inCart) {
      const newProducts = products.map((productsInLS) => {
        if (productsInLS.id === product.id) {
          return {
            ...productsInLS,
            count: productsInLS.count + 1
          }
        }
        return productsInLS
      })
        localStorage.setItem(cartKey, JSON.stringify(newProducts));
        return
      }
      products.push({...product, count: 1}) 
      localStorage.setItem(cartKey, JSON.stringify(products));
  } 

//ДОБАВЛЕНИЕ В ИЗБРАННОЕ
  const favoriteActions = (productId) => {
    //получаем товар, который уже есть в избранном
    const fromLS = localStorage.getItem(favoritesKey);
     //если это первое добавление в избранное, то передаем туда массив + первый id, который далее будет наполняться
    if (!fromLS) {
      setProductsInLS([productId]); //добавляем в состояние для моментального обновления
      localStorage.setItem(favoritesKey, JSON.stringify([productId]));
      return;
    }
    const products = JSON.parse(fromLS);
    //проверяем, есть ли этот товар в избранном
    const inLS = products.find((id) => id === productId);
    
    if(inLS) {
      //удаляем товар если он уже есть
      //фильтруем те товары, которые НЕ НУЖНО удалять
      const filteredProducts = products.filter((id) => id !== productId);
      //добавляем в состояние для моментального обновления
      setProductsInLS(filteredProducts);
      //обновляем массив в локал сторадж
      localStorage.setItem(favoritesKey, JSON.stringify(filteredProducts));
      return;
    } 
    //если товара нет, то добавляем в массив
    products.push(productId);
    //добавляем в состояние для моментального обновления
    setProductsInLS(products);
    //обновляем массив в локал сторадж
    localStorage.setItem(favoritesKey, JSON.stringify(products));
  };

  useEffect(() => {
    //получаем товар, который уже есть в избранном
    const fromLS = localStorage.getItem(favoritesKey);
    //если товар уже в лс то
    if(fromLS) {
      const products = JSON.parse(fromLS);
      //записываем это в состояние
      setProductsInLS(products);
    }
  }, [])

  return(
    <SC.Products>
      <SC.ActionProduct>
        <div>There are {countOfProducts} products in this category</div>
        <Sort 
          onSort = {(e) => changeSortType(e.target.value)}
          value = {sortType}
         />
      </SC.ActionProduct>
      <SC.ProductsList>
      {
        productsWithCount.map((product) => 
          <Product 
            key={product.id} 
            product={product}
            favoriteActions={favoriteActions}
            inFavorites={productsInLS.includes(product.id)} //true => соответсвенно сердце красное
            buyProduct={buyProduct}
        />)
      }
      </SC.ProductsList>
      <Pagination 
        setPage={changePage} 
        totalPages={totalPages}
        currentPage={currentPage} 
      />
    </SC.Products>
  )
}