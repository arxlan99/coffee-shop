import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="header__left">
        <Link className="header__logo" to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <Link to="/menu" className="header__link">
          Menu
        </Link>
        <Link to="#" className="header__link">
          Rewards
        </Link>
        <Link to="#" className="header__link">
          Gift Cards
        </Link>
      </div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
