import React from "react";

import "./style.css";

import { Search } from "./components/Search/Search";
import { Filters } from "./components/Filters/Filters";
import { LastViewed } from "./components/LastViewed/LastViewed";

export function SideBar () {
  return(
    <div className="sidebar">
      <Search />
      <Filters />
      <LastViewed />
    </div>
  )
}