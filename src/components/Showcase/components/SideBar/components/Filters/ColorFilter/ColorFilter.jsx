import React from "react";

import "./style.css"

export const ColorFilter = ({ infoForColor }) => {
  const colors = infoForColor.colors;
  return (
    <section className="colors">
      <div className="sidebar-title">Colors</div>
      <div className="color-list">
        {
          colors.map((color) =>
            <label className="color-filter" key={color.id}> 
              <input type="checkbox" />
              {color}
            </label>
          )
        }
      </div>
    </section>
  )
}