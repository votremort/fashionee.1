import React, { useState } from "react";
import "./style.css";

import searchImg from "../../../../../../images/search.svg"

export function Search ({ changeSearch }) {
  // const [searchInputValue, setSearchInputValue] = useState('');

  // const handleInputChange = (e) => setSearchInputValue(e.target.value);
  // const handleSearchClick = () => search(searchInputValue);

  return(
    <div className="sidebar-search">
      <input className="search-input" type="text" placeholder="Search" onChange={(e) => changeSearch(e.target.value)}/>
      <button className="search-btn">
        <img src={searchImg} alt="search" />
      </button>
    </div>
  )
}