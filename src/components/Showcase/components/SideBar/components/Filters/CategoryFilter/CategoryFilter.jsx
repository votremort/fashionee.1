import React from "react";

import * as SC from "./styles";

export const CategoryFilter = ({ infoForCategory, changeCategory, selectedCategory }) => {
  
  const categories = infoForCategory.categories;

  return(
    <SC.Categories>
    <SC.Title>Categories</SC.Title>
    <nav>
      <SC.CtgList>
        <SC.Category isActive={selectedCategory === ''}>
          <SC.CtgLink onClick={() => changeCategory('')}>All</SC.CtgLink>
        </SC.Category>
        {
          categories.map((category)=>
            <SC.Category isActive={selectedCategory === category} key={category.id}>
              <SC.CtgLink onClick={() => changeCategory(category)}>{category}</SC.CtgLink>
            </SC.Category>
        )}
      </SC.CtgList>
    </nav>
  </SC.Categories>
  )
}