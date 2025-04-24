import React from "react";

import * as SC from './styles'


export function Product({ product, favoriteActions, inFavorites, buyProduct, changeCount }) {


  return(
    <SC.Product>
      <SC.ProductWrap>
        {product.isSale && <SC.SaleLabel>SALE</SC.SaleLabel>}
        {product.isNew && <SC.NewLabel className='new-label'>NEW</SC.NewLabel>}
          <SC.Favorite onClick={()=>favoriteActions(product.id)} inFavorites={inFavorites}> 
            <svg width="19" height="17" viewBox="0 0 19 17"  xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.5429 0.406215C12.1901 0.138034 12.8838 0 13.5844 0C14.285 0 14.9787 0.138034 15.626 0.406215C16.2732 0.674397 16.8613 1.06747 17.3565 1.56298C17.8519 2.05821 18.2449 2.64618 18.513 3.2933C18.7812 3.94053 18.9193 4.63426 18.9193 5.33486C18.9193 6.03545 18.7812 6.72918 18.513 7.37641C18.2449 8.02359 17.8519 8.6116 17.3564 9.10685C17.3564 9.10689 17.3563 9.10693 17.3563 9.10698L9.98974 16.4735C9.84909 16.6142 9.65832 16.6932 9.45941 16.6932C9.2605 16.6932 9.06973 16.6142 8.92908 16.4735L1.56241 9.10685C0.562016 8.10646 0 6.74963 0 5.33486C0 3.92008 0.562017 2.56325 1.56241 1.56286C2.56281 0.562462 3.91964 0.000445664 5.33441 0.000445664C6.74918 0.000445604 8.10601 0.562462 9.10641 1.56286L9.45941 1.91586L9.81229 1.56298C10.3076 1.06747 10.8956 0.674397 11.5429 0.406215ZM13.5844 1.5C13.0809 1.5 12.5822 1.59921 12.117 1.79197C11.6518 1.98472 11.2292 2.26725 10.8732 2.62339L10.8731 2.62352L9.98974 3.50685C9.84909 3.6475 9.65832 3.72652 9.45941 3.72652C9.2605 3.72652 9.06973 3.6475 8.92908 3.50685L8.04575 2.62352C7.32665 1.90443 6.35136 1.50045 5.33441 1.50045C4.31746 1.50045 3.34216 1.90443 2.62307 2.62352C1.90398 3.34261 1.5 4.31791 1.5 5.33486C1.5 6.3518 1.90398 7.3271 2.62307 8.04619L9.45941 14.8825L16.2957 8.04619L16.2959 8.04607C16.652 7.69009 16.9345 7.26742 17.1273 6.80222C17.3201 6.33702 17.4193 5.83841 17.4193 5.33486C17.4193 4.8313 17.3201 4.33269 17.1273 3.86749C16.9345 3.40229 16.652 2.97962 16.2959 2.62364L16.2956 2.62339C15.9396 2.26725 15.517 1.98472 15.0518 1.79197C14.5866 1.59921 14.088 1.5 13.5844 1.5Z"/>
            </svg>
          </SC.Favorite>
        <SC.ProdImg src={product.image} alt={product.name} />
      </SC.ProductWrap>
    <SC.ProdName>{product.name}</SC.ProdName>
    <SC.PriceWrap>
      <SC.ProdPrice>${product.price}</SC.ProdPrice>
      {product.oldPrice && <SC.OldProdPrice>${product.oldPrice}</SC.OldProdPrice>}
    </SC.PriceWrap>
    <SC.BuyWrap>
      <SC.BuyBtn onClick={() => buyProduct(product)}>Купить</SC.BuyBtn>
      <SC.Counter>
        <SC.CounterBtn onClick={() => console.log(product.count)} >−</SC.CounterBtn>
          <SC.Count 
            type="text" 
            value={product.count} 
            onChange={(e) => changeCount(product.id, +e.target.value)}
          />
        <SC.CounterBtn onClick={() => changeCount(product.id, product.count + 1)} >+</SC.CounterBtn>
      </SC.Counter>
    </SC.BuyWrap>
  </SC.Product>
  )
}