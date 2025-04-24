import React from "react";
import "./style.css";
import * as SC from "./styles";

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
    <SC.HeaderWrap>
      <SC.BurgerMenu>
        <img src={burgerImg} alt="burger-menu"/>
      </SC.BurgerMenu>
      <SC.HeaderLogo>
        <img src={logoImg} alt="fashionee"/>
      </SC.HeaderLogo>
      <SC.HeaderNavWrap>
        <SC.HeaderNav>
          <NavLink className="h-nav-link" href="#" text="Home"/>
          <NavLink className="h-nav-link" href="#" text="Pages" img={chevronImg}/>
          <NavLink className="h-nav-link" href="#" text="Shop" img={chevronImg}/>
          <NavLink className="h-nav-link" href="#" text="Blog"/>
          <NavLink className="h-nav-link" href="#" text="Contact"/>
        </SC.HeaderNav>
      </SC.HeaderNavWrap>
      <SC.HeaderIconWrap>
        <HeaderIconMenu img={searchImg}/>
        <HeaderIconMenu img={userImg}/>
        <HeaderIconMenu img={heartImg} notification="0"/>
        <HeaderIconMenu img={shopCartImg} onClick={()=>switchPage("Cart")} notification="0"/>
      </SC.HeaderIconWrap>
    </SC.HeaderWrap>
  )
}