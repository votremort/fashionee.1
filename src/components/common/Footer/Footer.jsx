import React from "react";

import "./style.css";
import * as SC from "./styles";

import { Socials } from "../../ui/Socials/Socials";
import { NavLink } from "../../ui/NavLink/NavLink";

import logoImg from "../../../images/logo.svg";
import visaImg from "../../../images/footer/visa.svg";
import masterImg from "../../../images/footer/master.svg";
import paypalImg from "../../../images/footer/paypal.svg";
import payoneerImg from "../../../images/footer/payoneer.svg";

export function Footer() {
  return(
    <SC.FooterWrap>
      <SC.BorderTop />
      <SC.ContainerWrap>
        <SC.RowInfo>
          <SC.LogoLink>
            <SC.LogoWrap>
              <SC.LogoImg src={logoImg} alt="fashionee"/>
              <SC.LogoText>Cillum eu id enim aliquip aute ullamco anim.<br />Culpa deserunt nostrud excepteur voluptate.
              </SC.LogoText>
            </SC.LogoWrap>
            <SC.SocialsWrap>
              <SC.SocialTitle>Find us here:</SC.SocialTitle>
              <Socials /> 
            </SC.SocialsWrap>
          </SC.LogoLink>
          <SC.AboutWrap>
            <SC.Title>About</SC.Title>
            <SC.List>
              <li><NavLink className="f-nav-link" href="#" text="About us"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Collections"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Shop"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Blog"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Contact us"/></li>
            </SC.List>
          </SC.AboutWrap>
          <SC.UsefulLinksWrap>
            <SC.Title>Useful Links</SC.Title>
            <SC.List>
              <li><NavLink className="f-nav-link" href="#" text="Privacy Policy"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Terms of use"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Support"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Shipping details"/></li>
              <li><NavLink className="f-nav-link" href="#" text="FAQs"/></li>
            </SC.List>
          </SC.UsefulLinksWrap>
        </SC.RowInfo>
        <SC.BottomBar>
          <SC.CopyPayWrap>
            <SC.Copyright>
              <SC.Text>© All right reserved. Fashionee 2020</SC.Text>
            </SC.Copyright>
            <SC.Payments>
              <SC.Text>Payment methods:</SC.Text>
              <SC.PaymentsList>
                <SC.PayImg src={visaImg} alt="visa"/>
                <SC.PayImg src={masterImg} alt="masterCard"/>
                <SC.PayImg src={paypalImg} alt="paypal"/>
                <SC.PayImg src={payoneerImg} alt="payoneer"/>
              </SC.PaymentsList>
            </SC.Payments>
          </SC.CopyPayWrap>
        </SC.BottomBar>
      </SC.ContainerWrap>
    </SC.FooterWrap>
  )
}