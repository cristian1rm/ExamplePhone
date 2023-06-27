import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

function Nav() {
  return (
  <nav className="nav-wrapper">
  <div className="nav-content">
    <ul className="list-styled">
      <li>
        <img src={Logo} alt="Apple" />
      </li>
      <li>
      <a className="link-styled">Home</a>
      </li>
      <li>
      <a className="link-styled">Motions</a>
      </li>
      <li>
      <a className="link-styled">Jobs</a>
      </li>
      <li>
      <a className="link-styled">Ai</a>
      </li>
      <li>
      <a className="link-styled">Web</a>
      </li>
      <li>
      <a className="link-styled">Contact</a>
      </li>
      <li>
        <img src={Search} alt="Search" />
      </li>
      <li>
        <img src={Store} alt="Store" />
      </li>
    </ul>
  </div>
  </nav>  
  );
}

export default Nav;