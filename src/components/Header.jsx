import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <div className="header__logo">
          <img src="img/logo.svg" alt="Logo: Beer search" />
        </div>
      </a>
    </header>
  );
};

export default Header;
