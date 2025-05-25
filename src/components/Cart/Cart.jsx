import React,  { useState, useEffect } from "react";

import  * as SC from "./styles"

import { Products } from "./components/Products/Products";
import { Order } from "./components/Order/Order";
import { Promocode } from "./components/Promocode/Promocode";
import { cartKey } from "../../helpers/constant";
import data from "../../products.json";

export const Cart = () => {
  const  { products }  = data;
  const allProducts = products
  
  const [productsForOrder, setProductsForOrder] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const changeProducts = (products) => setProductsForOrder(products);
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
      const cartItems = JSON.parse(productsFromCart);
      const updatedProducts = cartItems.map(item => {
        const product = allProducts.find(product => product.id === item.productID);
        return {
          ...product,
          count: item.count
        };
      });
      setProductsForOrder(updatedProducts)
    }
  }, [])
  return(
    <SC.Cart>
    <SC.OrderInfo>
      <Products products={productsForOrder} changeProducts={changeProducts}/>
      <Order products={productsForOrder} discount={discount}/>
    </SC.OrderInfo>
    <Promocode 
      promoCode={promoCode} 
      changePromo={changePromo}
      addDiscount={addDiscount}
    />
  </SC.Cart>
  )
}