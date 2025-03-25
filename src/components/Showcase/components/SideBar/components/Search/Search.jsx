import React from "react";
import "./style.css";

import searchImg from "../../../../../../images/search.svg"

export function Search () {

  return(
    <div className="sidebar-search">
      <input className="search-input" type="text" placeholder="Search"/>
      <button className="search-btn">
        <img src={searchImg} alt="search" />
      </button>
    </div>
  )
}