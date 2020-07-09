import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => (
  <div>
    <header className="MH-Header">
      {/* <h1>Welcome to Monster Hunter Chef</h1> */}
      <img
        src={
          "https://hardcore-gamer.s3.amazonaws.com/uploads/2019/09/IceborneSelianaHeader.jpeg"
        }
        alt="Monster Hunter Header"
        width="100%"
      />
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Meowscular Chef</NavLink>
        </li>
        <li>
          <NavLink to="/">Grammeowster Chef</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
      </ul>
    </header>
  </div>
);

export default Header;
