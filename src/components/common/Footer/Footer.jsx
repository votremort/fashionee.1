import React from "react";

import "./style.css"

import { Socials } from "../../ui/Socials/Socials";
import { NavLink } from "../../ui/NavLink/NavLink";

import logoImg from "../../../images/logo.svg";
import visaImg from "../../../images/footer/visa.svg";
import masterImg from "../../../images/footer/master.svg";
import paypalImg from "../../../images/footer/paypal.svg";
import payoneerImg from "../../../images/footer/payoneer.svg";

export function Footer() {
  return(
    <footer>
      <div className="border-top" />
      <div className="container">
        <section className="footer-row-info">
          <div className="footer-logo-link">
            <div className="footer-logo">
              <img className="f-logo-img" src={logoImg} alt="fashionee"/>
              <p className="f-logo-text">Cillum eu id enim aliquip aute ullamco anim.<br />Culpa deserunt nostrud excepteur voluptate.
              </p>
            </div>
            <div className="footer-socials">
              <p className="f-soc-title">Find us here:</p>
              <Socials /> 
            </div>
          </div>
          <section className="footer-about">
            <p className="f-title">About</p>
            <ul>
              <li><NavLink className="f-nav-link" href="#" text="About us"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Collections"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Shop"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Blog"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Contact us"/></li>
            </ul>
          </section>
          <section className="footer-usefulLinks">
            <p className="f-title">Useful Links</p>
            <ul>
              <li><NavLink className="f-nav-link" href="#" text="Privacy Policy"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Terms of use"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Support"/></li>
              <li><NavLink className="f-nav-link" href="#" text="Shipping details"/></li>
              <li><NavLink className="f-nav-link" href="#" text="FAQs"/></li>
            </ul>
          </section>
        </section>
        <section className="footer-bottomBar">
          <div className="footer-copy-pay">
            <div className="footer-copyright">
              <p className="f-text">© All right reserved. Fashionee 2020</p>
            </div>
            <div className="footer-payments">
              <p className="f-text">Payment methods:</p>
              <div className="f-payments-list">
                <img className="f-pay-img" src={visaImg} alt="visa"/>
                <img className="f-pay-img" src={masterImg} alt="masterCard"/>
                <img className="f-pay-img" src={paypalImg} alt="paypal"/>
                <img className="f-pay-img" src={payoneerImg} alt="payoneer"/>
              </div>
            </div>
          </div>
        
        </section>
      </div>
    </footer>
  )
}