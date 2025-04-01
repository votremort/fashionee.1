import React, {useEffect, useState} from "react";

import "./style.css";

import { favoritesKey } from "../../../../helpers/constant";

import { Product } from "./components/Product/Product";
import { Sort } from "./components/Sort/Sort";

export function Products ({products, changeSortType, sortType}) {
  //нужно для хранения массива товаров находящегося в ЛС, что бы при перезагрузке
  //корректно отображать и окрашивать сердечки избранного
  const [productsInLS, setProductsInLS] = useState([]);

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
    <div className="products">
      <div className="prod-action">
        <div>There are {products.length} products in this category</div>
        <Sort onSort={(e) => {
          changeSortType(e.target.value)
          }} value={sortType} />
      </div>
      <div className="products-list">
      {
        products.map((product) => 
          <Product 
            key={product.id} 
            product={product}
            favoriteActions={favoriteActions}
            inFavorites={productsInLS.includes(product.id)} //true => соответсвенно сердце красное
        />)
      }
      </div>
      <div className="pagination"></div>
    </div>
  )
}