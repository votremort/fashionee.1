import React from "react";

import * as SC from "./styles";

export const ColorFilter = ({ infoForColor, onColorSelect }) => {
  const colors = infoForColor.colors;
  return (
    <SC.Colors>
      <SC.Title>Colors</SC.Title>
      <SC.ColorList>
        {
          colors.map((color) =>
            <SC.ColorFilter key={color.id}> 
              <input type="checkbox" onChange={onColorSelect} value={color}/>
              {color}
            </SC.ColorFilter>
          )
        }
      </SC.ColorList>
    </SC.Colors>
  )
}