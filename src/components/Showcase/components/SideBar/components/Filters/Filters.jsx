import React, { useState } from "react";


import * as SC from "./styles";

import { CategoryFilter } from "./CategoryFilter/CategoryFilter";
import { PriceFilter } from "./PriceFilter/PriceFilter";
import { ColorFilter } from "./ColorFilter/ColorFilter";
import { getFilters } from "../../../../../../helpers/getFilters";

import data from "../../../../../../products.json";

const infoForFilters = getFilters(data);

export const Filters = ({ 
  changeCategory, selectedCategory, changePrices, 
 changeColors }) => {


  const [selectedMinPrice, setSelectedMinPrice] = useState(infoForFilters.prices.min);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(infoForFilters.prices.max);
  const [selectedColors, setSelectedColors] = useState([]);
  

  const changeMinPrice = (e) => {
    const price = +e.target.value;
    setSelectedMinPrice(price);
  }
  const changeMaxPrice = (e) => {
    const price = +e.target.value;
    if(price <= infoForFilters.prices.max) {
      setSelectedMaxPrice(price);
    } else {
      alert('Максимально возможная цена: $210.99');
    }
    
  }

  const onColorSelect = (e) => {
    const color = e.target.value;
      if(selectedColors.includes(color)) {
        const filteredColors = selectedColors.filter((selectedColor) => selectedColor !== color);
        setSelectedColors(filteredColors)
        return
      }
    setSelectedColors([...selectedColors, color])
  };

  const applyFilter = () => {
    changePrices(selectedMinPrice, selectedMaxPrice)
    changeColors(selectedColors)
  }



  return(
    <div className="filters">
      <CategoryFilter 
        infoForCategory={infoForFilters}
        changeCategory={changeCategory}
        selectedCategory={selectedCategory}
      />
      <PriceFilter 
        infoForPrice={infoForFilters}
        changeMinPrice={changeMinPrice}
        changeMaxPrice={changeMaxPrice}
      />
      <ColorFilter 
        infoForColor={infoForFilters}
        onColorSelect={onColorSelect}
      />
      <SC.ApplyBtn onClick={applyFilter} className="apply-btn">Apply filter</SC.ApplyBtn>
    </div>
  )
}
  