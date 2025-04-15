import React from "react";

import "./style.css"

export const ColorFilter = ({ infoForColor, onColorSelect }) => {
  const colors = infoForColor.colors;
  return (
    <section className="colors">
      <div className="sidebar-title">Colors</div>
      <div className="color-list">
        {
          colors.map((color) =>
            <label className="color-filter" key={color.id}> 
              <input type="checkbox" onChange={onColorSelect} value={color}/>
              {color}
            </label>
          )
        }
      </div>
    </section>
  )
}