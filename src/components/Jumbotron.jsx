import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

function Jumbotron() {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">Web Animation</h2>
      <img className="logo" src={Iphone} alt="iPhone 14 Pro" />
      <p className="text">Cristian Rios Maqueda</p>
      <span className="description">Example of a website</span>
      <ul className="links">
        <li>
          <button className="button">Jobs</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
    </div>
  );
}

export default Jumbotron;
