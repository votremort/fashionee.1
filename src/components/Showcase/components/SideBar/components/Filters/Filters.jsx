import React from "react";

import "./style.css"

import { CategoryFilter } from "./CategoryFilter/CategoryFilter";
import { PriceFilter } from "./PriceFilter/PriceFilter";
import { ColorFilter } from "./ColorFilter/ColorFilter";
import { getFilters } from "../../../../../../helpers/getFilters";

import data from "../../../../../../products.json";

const infoForFilters = getFilters(data)

export const Filters = () => (
  <div className="filters">
    <CategoryFilter infoForCategory={infoForFilters}/>
    <PriceFilter infoForPrice={infoForFilters}/>
    <ColorFilter infoForColor={infoForFilters}/>
    <button className="apply-btn">Apply filter</button>
  </div>
)