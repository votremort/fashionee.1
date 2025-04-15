import React, { useEffect, useState } from "react";

import "./style.css";

import { Search } from "./components/Search/Search";
import { Filters } from "./components/Filters/Filters";
import { LastViewed } from "./components/LastViewed/LastViewed";

export function SideBar ({ 
  changeSearch, changeCategory, selectedCategory, changePrices, 
  selectedColors, setSelectedColors, changeColors  }) {


  return(
    <div className="sidebar">
      <Search changeSearch={changeSearch} />
      <Filters 
        changeCategory={changeCategory} 
        selectedCategory={selectedCategory}
        changePrices={changePrices}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        changeColors={changeColors}
      />
      <LastViewed/>
    </div>
  )
}