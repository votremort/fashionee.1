import React from "react";

import * as SC from "./styles"

import searchImg from "../../../../../../images/search.svg"

export function Search ({ changeSearch }) {
  return(
    <SC.SearchWrap>
      <SC.SearchInput type="text" placeholder="Search" onChange={(e) => changeSearch(e.target.value)}/>
      <SC.SearchBtn>
        <img src={searchImg} alt="search" />
      </SC.SearchBtn>
    </SC.SearchWrap>
  )
}