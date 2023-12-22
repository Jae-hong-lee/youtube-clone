import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ toggleMenu }) => {
  return (
    <h1 className="header__logo">
      <Link>
        <em aria-hidden="true" onClick={toggleMenu}></em>
        <Link to="/">
          webs
          <br />
          youtube
        </Link>
      </Link>
    </h1>
  );
};

export default Logo;
