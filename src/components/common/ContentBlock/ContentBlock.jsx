import React from "react";

import "./style.css";
import * as SC from "./styles";

import { NavLink } from "../../ui/NavLink/NavLink"
export function ContentBlock ({ switchPage, currentPage }) {
  return(
    <SC.Container>
      <SC.ContentBlock>
        <SC.Content>
          <SC.ContentTitle>{currentPage}</SC.ContentTitle>
          <SC.ContentNav>
            <NavLink className="cb-nav-link" href="#" text="Cart" onClick={()=>switchPage("Cart")} />
            <NavLink className="cb-nav-link" href="#" text="Shop" onClick={()=>switchPage("Shop")} />
          </SC.ContentNav>
        </SC.Content>
        <SC.ContentImg></SC.ContentImg>
      </SC.ContentBlock>
    </SC.Container>
  )
}