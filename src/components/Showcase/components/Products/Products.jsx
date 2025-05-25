import React, {useEffect, useState} from "react";
import { useLS } from "../../../../context/LScontext"; //импорт контекста

import * as SC from "./styles";

import { favoritesKey, cartKey } from "../../../../helpers/constant";

import { Product } from "./components/Product/Product";
import { Sort } from "./components/Sort/Sort";
import { Pagination } from "./components/Pagination/Pagination";

export function Products ({ 
  products, changeSortType, sortType, countOfProducts, 
  changePage, totalPages, currentPage, 
 }) {
  const { updateCart, updateFavorites } = useLS(); //функции для обновления состояния
  //нужно для хранения массива товаров находящегося в ЛС, что бы при перезагрузке
  //корректно отображать и окрашивать сердечки избранного
  const [productsInLS, setProductsInLS] = useState([]);

  const buyProduct = (product) => {
    const fromCart = localStorage.getItem(cartKey);
    let products = fromCart ? JSON.parse(fromCart) : [];

    //ищем товар по productID
    const inCart = products.find((item) => item.productID === product.id);

    if (inCart) {
      //увеличиваем count
      const newProducts = products.map((item) => {
        if (item.productID === product.id) {
          return {
            productID: item.productID,
            count: item.count + 1
          }
        }
        return item;
      })
        updateCart(newProducts)
        return
    } else{
      products.push({productID: product.id, count: 1});
      updateCart(products)
    }

  } 

  //УВЕЛИЧЕНИЕ ТОВАРА В КОРЗИНЕ
  const increaseProductCount = (product) => {
    const fromCart = localStorage.getItem(cartKey);
    if (!fromCart) return;

    const products = JSON.parse(fromCart);

    const inCart = products.find((item) => item.productID === product.id);
    if (!inCart) return;

    const newProducts = products.map((item) => {
      if(item.productID === product.id) {
        return {
          productID: item.productID,
          count: item.count + 1
        };
      } 
      return item;
    });
    updateCart(newProducts)
  }

  //УМЕНЬШЕНИЕ ТОВАРА В КОРЗИНЕ
  const decreaseProductCount = (productID) => {
    const fromCart = localStorage.getItem(cartKey);
    if (!fromCart) return; //если корзина пустая то ниче не делаем

    const products = JSON.parse(fromCart);

    const productIndex = products.findIndex(item => item.productID === productID);
    if(productIndex === -1) return; //если этого товара нет в корзине то ниче не делаем

    const product = products[productIndex];

    const newCount = product.count - 1;

    if (newCount <= 0) {
      products.splice(productIndex, 1);
    } else {
      products[productIndex] = {
        productID: product.productID,
        count: newCount
      };
    }
    updateCart(products)
  }
 
//получение количества товара в корзине
const getProductCountFromCart = (productID) => {
  const fromCart = localStorage.getItem(cartKey);
  if (!fromCart) return 0;

  const products = JSON.parse(fromCart);
  const productsInCart = products.find(item => item.productID === productID);
  return productsInCart ? productsInCart.count : 0;
}

//ДОБАВЛЕНИЕ В ИЗБРАННОЕ
  const favoriteActions = (productId) => {
    //получаем товар, который уже есть в избранном
    const fromLS = localStorage.getItem(favoritesKey);
     //если это первое добавление в избранное, то передаем туда массив + первый id, который далее будет наполняться
    if (!fromLS) {
      setProductsInLS([productId]); //добавляем в состояние для моментального обновления
      // localStorage.setItem(favoritesKey, JSON.stringify([productId]));
      updateFavorites([productId])
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
      // localStorage.setItem(favoritesKey, JSON.stringify(filteredProducts));
      updateFavorites(filteredProducts)
      return;
    } 
    //если товара нет, то добавляем в массив
    products.push(productId);
    //добавляем в состояние для моментального обновления
    setProductsInLS(products);
    //обновляем массив в локал сторадж
    // localStorage.setItem(favoritesKey, JSON.stringify(products));
    updateFavorites(products)
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
        products.map((product) => 
          <Product 
            key={product.id} 
            product={product}
            favoriteActions={favoriteActions}
            inFavorites={productsInLS.includes(product.id)} //true => соответсвенно сердце красное
            count={getProductCountFromCart(product.id)}
            buyProduct={buyProduct}
            increaseProductCount={increaseProductCount}
            decreaseProductCount={decreaseProductCount}
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