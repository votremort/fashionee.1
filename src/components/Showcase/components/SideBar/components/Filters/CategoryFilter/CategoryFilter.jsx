import React from "react";

import "./style.css";

export const CategoryFilter = ({ infoForCategory }) => {
  
  const categories = infoForCategory.categories;

  return(
    <section className="categories">
    <div className="sidebar-title">Categories</div>
    <nav>
      <ul className="ctg-list">
        {
          categories.map((category)=>
            <li key={category.id}>
              <p className="ctg-link">{category}</p>
            </li>
        )}
      </ul>
    </nav>
  </section>
  )
}