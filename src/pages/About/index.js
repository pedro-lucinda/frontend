import React from "react";
//style
import { CHome } from "./style";
//components
import Shop from "../../components/Shop";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <CHome>
      <main>
      <SideBar />
        <p>
          Allow us to introduce ourselves. 
          <br/>
          Prazer!
          <span> {`{Portuguese for: it’s nice to meet you}`} </span>. We are
          D.M. a new sparkling wine brand from Brazil, with our grapes grown in
          the Valley of the Vineyard in Southern Brazil.
          <span> An entirely new class of sparkling wine.</span> Try us and see
          what we mean.
        </p>
				
        <Shop/>

        <p>
          Made in the traditional champagne method with a Brazilian touch, D.M.
          is sparkling wine that is uniquely flexible and versatile.
          <span> You can drink </span> D.M.
          <span> however you like, whenever you like. </span> Each sip brings
          the beauty, culture, and expression that is the best of old and new
          world winemaking.
          <span> It’s what makes us unmistakably Brazilian. </span>
        </p>
      </main>
     <Footer />
    </CHome>
  );
};

export default About;
