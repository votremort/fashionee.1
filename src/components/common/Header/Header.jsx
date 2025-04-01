import React from "react";
import "./style.css";

import { NavLink } from "../../ui/NavLink/NavLink";
import { HeaderIconMenu } from "./components/HeaderIconMenu/HeaderIconMenu";

import burgerImg from "../../../images/header/burger menu.svg";
import chevronImg from "../../../images/header/chevron-down.svg";
import heartImg from "../../../images/header/heart.svg";
import logoImg from "../../../images/logo.svg";
import searchImg from "../../../images/search.svg"
import shopCartImg from "../../../images/header/shopping-bag.svg";
import userImg from "../../../images/header/user.svg"


export function Header ({ switchPage }) {
  return (
    <header className="container">
      <section className="burger-menu">
        <img src={burgerImg} alt="burger-menu"/>
      </section>
      <section className="header-logo">
        <img src={logoImg} alt="fashionee"/>
      </section>
      <section className="header-nav">
        <nav className="header-nav">
          <NavLink className="h-nav-link" href="#" text="Home"/>
          <NavLink className="h-nav-link" href="#" text="Pages" img={chevronImg}/>
          <NavLink className="h-nav-link" href="#" text="Shop" img={chevronImg}/>
          <NavLink className="h-nav-link" href="#" text="Blog"/>
          <NavLink className="h-nav-link" href="#" text="Contact"/>
        </nav>
      </section>
      <section className="header-icon-menu">
        <HeaderIconMenu img={searchImg}/>
        <HeaderIconMenu img={userImg}/>
        <HeaderIconMenu img={heartImg} notification="0"/>
        <HeaderIconMenu img={shopCartImg} onClick={()=>switchPage("Cart")} notification="0"/>
      </section>
    </header>
  )
}