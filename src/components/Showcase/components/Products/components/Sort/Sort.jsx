import React from "react";

export const Sort = ({onSort, value}) => (
  <select className="sort" id=" " onChange={onSort} value={value}>
    <option value="nameAsc">По названию A-Z</option>
    <option value="nameDesc">По названию Z-A</option>
    <option value="priceAsk">Сначала дешевле</option>
    <option value="priceDesk">Сначала дороже</option>
  </select>
)