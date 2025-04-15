import React from "react";

import "./style.css";

import * as SC from "./styles";

export const CategoryFilter = ({ infoForCategory, changeCategory, selectedCategory }) => {
  
  const categories = infoForCategory.categories;

  return(
    <section className="categories">
    <div className="sidebar-title">Categories</div>
    <nav>
      <ul className="ctg-list">
        <SC.Category isActive={selectedCategory === ''}>
          <p className="ctg-link" onClick={() => changeCategory('')}>All</p>
        </SC.Category>
        {
          categories.map((category)=>
            <SC.Category isActive={selectedCategory === category} key={category.id}>
              <p className="ctg-link" onClick={() => changeCategory(category)}>{category}</p>
            </SC.Category>
        )}
      </ul>
    </nav>
  </section>
  )
}