import React from "react";
import * as SC from "./styles"

export const Sort = ({ onSort, value }) => (
  <SC.Sort id=" " onChange={onSort} value={value}>
    <option value="nameAsc">По названию A-Z</option>
    <option value="nameDesc">По названию Z-A</option>
    <option value="priceAsk">Сначала дешевле</option>
    <option value="priceDesk">Сначала дороже</option>
  </SC.Sort>
)