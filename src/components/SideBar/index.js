import React from "react";
import { CSideBar } from "./style";
import wine from '../../assets/wine-home.jpg'

const SideBar = () => {
  return (
    <CSideBar>
      <img src={wine} alt="wine" />
      <h2>
        60% 
        <br />
        Chardonnay
        <br /> 
        40% 
        <br />
        Pinot Noir, 
        <br />
        matured
        <br /> 
        12 months
      </h2>
    </CSideBar>
  );
};

export default SideBar;
