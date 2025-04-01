import React from "react";

import "./style.css";

import { NavLink } from "../../ui/NavLink/NavLink"
export function ContentBlock ({ switchPage, currentPage }) {
  return(
    <section className="container">
      <div className="content-block">
        <div className="cb-content">
          <h1 className="content-title">{currentPage}</h1>
          <div className="content-nav">
            <NavLink className="cb-nav-link" href="#" text="Cart" onClick={()=>switchPage("Cart")} />
            <NavLink className="cb-nav-link" href="#" text="Shop" onClick={()=>switchPage("Shop")} />
          </div>
        </div>
        <div className="cb-image"></div>
      </div>
    </section>
  )
}