import React from "react";
import * as SC from "./styles"
export function HeaderIconMenu ({img, notification, onClick}) {
  return (
    <SC.IconMenuBtn onClick={onClick}> <SC.IconImg src={img} alt='' /> 
    {notification && <SC.IconNotification>{notification}</SC.IconNotification>}
    </SC.IconMenuBtn>
  )
}