import React from "react";

import "./style.css";

import { NavLink } from "../../ui/NavLink/NavLink"
export function ContentBlock () {
  return(
    <section className="container">
      <div className="content-block">
        <div className="cb-content">
          <h1 className="content-title">Shop</h1>
          <div className="content-nav">
            <NavLink className="cb-nav-link" href="#" text="Cart" />
            <NavLink className="cb-nav-link" href="#" text="Shop"/>
          </div>
        </div>
        <div className="cb-image"></div>
      </div>
    </section>
  )
}