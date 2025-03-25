import React from "react";

import "./style.css";

import { SideBar } from "./components/SideBar/SideBar";
import { Products } from "./components/Products/Products";

export function Showcase() {
  return (
    <div className="container">
      <div className="showcase">
        <SideBar />
        <Products />
    </div>
    </div>

  )
}