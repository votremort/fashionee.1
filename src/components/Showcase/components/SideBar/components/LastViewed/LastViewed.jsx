import React, {useEffect, useState} from "react";

import * as SC from "./styles";

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
    <section>
      <SC.Title>Reviewed by you</SC.Title>
      <SC.LastProducts>
        {
          randomProducts.map((product)=>
            <SC.ProductCard key={product.id}>
              <SC.ProductImg src={product.image} alt=" " />
              <SC.InfoWrap>
                <SC.NameProduct>{product.name}</SC.NameProduct>
                <SC.PriceProduct>{product.price}</SC.PriceProduct>
                <SC.OldPriceProduct>{product.oldPrice}</SC.OldPriceProduct>
              </SC.InfoWrap>
            </SC.ProductCard>
        )}
      </SC.LastProducts>
    </section>
  )
}