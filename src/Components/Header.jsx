import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      {/* <img
        className="MH-Header"
        src={"https://www.monsterhunterworld.com/images/share.png"}
        alt="Monster Hunter Header"
        width="100%"
        height="350px"
      /> */}
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/fatcat">Fat Cat</NavLink>
        </li>
        <li>
          <NavLink to="/coolcat">Cool Cat</NavLink>
        </li>
        <li>
          <NavLink to="/felynefisher">Felyne Fisher</NavLink>
        </li>
        <li>
          <NavLink to="/luckycat">Luck Cat</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  </div>
);

export default Header;
