import React, {useEffect, useState} from "react";

import "./style.css";

import data from "../../../../../../products.json";
import { threeRandomProducts } from "../../../../../../helpers/randomProduct";

export const LastViewed = () => {
  const [randomProducts, setRandomProducts] = useState([]) //создаем состояние, где будем хранить массив продуктов

  //получаем массив продуктов ОДИН  раз при монтировании компонента
  useEffect(() => {
    const randomProducts = threeRandomProducts(data);
    setRandomProducts(randomProducts);
  }, [])
  return (
<section className="last-viewed">
      <div className="sidebar-title">Reviewed by you</div>
      <div className="last-products">
        {
          randomProducts.map((product)=>
            <div className="last-product-card" key={product.id}>
              <img src={product.image} alt=" " />
              <div className="last-prod-info">
                <div className="last-prod-name">{product.name}</div>
                <div className="last-prod-price">{product.price}</div>
                <div className="last-prod-oldPrice">{product.oldPrice}</div>
              </div>
            </div>
        )}
      </div>
    </section>
  )
}