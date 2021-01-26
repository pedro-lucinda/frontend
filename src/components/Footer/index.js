/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CFooter, CSocialMedia } from "./style";

const Footer = () => {
  return (
    <CFooter>
      <section>
        <input placeholder="Type in your email..." />
        <button> Subscribe </button>
      </section>

      <CSocialMedia>
        <p> CC Dom Maria 2020 </p>
        <div>
          <a> Facebook </a>
          <a> Instagram </a>
        </div>
        <div>
          <a> Privacy </a>
          <a> Shipping Policy </a>
          <a> Disclaimer </a>
        </div>
      </CSocialMedia>
    </CFooter>
  );
};

export default Footer;
