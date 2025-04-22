import React from "react";
import * as SC from "./styles";

export const Promocode = ({ promoCode, changePromo, addDiscount }) => {
  return(
    <SC.Promocode>
      <SC.PromoTitle>You have a promo code?</SC.PromoTitle>
      <SC.PromoText>To receive up-to-date promotional codes, subscribe to us on social networks.</SC.PromoText>
      <SC.InputWrap>
        <SC.PromoInput type="text" placeholder="Enter promo code" value={promoCode} onChange={changePromo}/>
        <SC.PromoBtn onClick={addDiscount}>→</SC.PromoBtn>
      </SC.InputWrap>
    </SC.Promocode>
  )
}