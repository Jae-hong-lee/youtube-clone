import React from "react";

const Header = () => {
  return (
    <header id="header" role="banner">
      <h1 className="header__logo">
        <a href="">
          <em aria-hidden="true"></em>
          <span>
            webs
            <br />
            youtube
          </span>
        </a>
      </h1>
      <nav className="header__menu"></nav>
      <div className="header__sns"></div>
    </header>
  );
};

export default Header;
