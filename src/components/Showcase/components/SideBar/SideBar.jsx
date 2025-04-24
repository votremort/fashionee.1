import React, { useEffect, useState } from "react";


import * as SC from "./styles"

import { Search } from "./components/Search/Search";
import { Filters } from "./components/Filters/Filters";
import { LastViewed } from "./components/LastViewed/LastViewed";

export function SideBar ({ 
  changeSearch, changeCategory, selectedCategory, changePrices, 
  selectedColors, setSelectedColors, changeColors  }) {


  return(
    <SC.Sidebar>
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
    </SC.Sidebar>
  )
}