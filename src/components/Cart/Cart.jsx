import React,  { useState, useEffect } from "react";

import  * as SC from "./styles"

import { Products } from "./components/Products/Products";
import { Order } from "./components/Order/Order";
import { Promocode } from "./components/Promocode/Promocode";
import { cartKey } from "../../helpers/constant";

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const changeProducts = (products) => setProducts(products);
  const changePromo = (e) => setPromoCode(e.target.value);
  
  const addDiscount = () => {
    if(promoCode === 'fashionee10') {
      setDiscount(10)
    } else{
      setDiscount(0)
    }
  }

  useEffect(() => {
    const productsFromCart = localStorage.getItem(cartKey);

    if(productsFromCart) {
      setProducts(JSON.parse(productsFromCart))
    }
  }, [])
  return(
    <SC.Cart>
    <SC.OrderInfo>
      <Products products={products} changeProducts={changeProducts}/>
      <Order products={products} discount={discount}/>
    </SC.OrderInfo>
    <Promocode 
      promoCode={promoCode} 
      changePromo={changePromo}
      addDiscount={addDiscount}
    />
  </SC.Cart>
  )
}