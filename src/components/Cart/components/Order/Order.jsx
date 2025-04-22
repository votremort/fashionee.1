import React, { useEffect, useState } from "react";

import * as SC from './styles';

const deliveryPrice = 16

export const Order = ({ products, discount }) => {
  const [orderPrice, setOrderPrice] = useState(0);


  useEffect(() => {
    let sum = products.reduce(
      (acc, product) => acc + (product.price * product.count),
      0
    );

    setOrderPrice(+sum.toFixed(2))
  }, [products, discount])

  const getTotal = () => {
    let sum = orderPrice;
    
    if(discount) {
      sum = sum - sum * (discount / 100);
    }
    const total = sum + deliveryPrice
    return +total.toFixed(2)
  }
  return(
    <SC.Order>
        <SC.Title>Your order</SC.Title>
        <SC.Row>
          <SC.Text>Оrder price</SC.Text>
          <SC.Values>${orderPrice}</SC.Values>
        </SC.Row>
        <SC.Row>
          <SC.Text>Discount for promo code</SC.Text>
          <SC.Values>{discount ? `${discount}%` : 'No'}</SC.Values>
        </SC.Row>
        <SC.Row>
          <SC.Text>Delivery (Aug 02 at 16:00)</SC.Text>
          <SC.Values>${deliveryPrice}</SC.Values>
        </SC.Row>
        <hr />
        <SC.Row>
          <SC.Text>Total</SC.Text>
          <SC.Values>${getTotal()}</SC.Values>
        </SC.Row>
        <SC.Row>
          <SC.CheckoutBtn>Checkout</SC.CheckoutBtn>
        </SC.Row>
      </SC.Order>
  )
}