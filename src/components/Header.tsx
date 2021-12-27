import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { login, logout } from "../store/userSlice";
import "./Header.css";

interface MyProps {}

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuDisplay = showMenu ? "side__menu" : "side__menu menu-hidden";

  console.log(props.user.name);
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
        <Link to="/gift-cards" className="header__link">
          Gift Cards
        </Link>
      </div>
      <div className="header__right" style={{ cursor: "pointer" }}>
        <div className="header_right_buttons">
          {!props.user.name ? (
            <Fragment>
              <Link to="/login">
                <button className="side__menu-login-btn">Sign in</button>
              </Link>
              <Link to="/signup">
                <button className="side__menu-signup-btn">Join now</button>
              </Link>
            </Fragment>
          ) : (
            <span> John Doe </span>
          )}
        </div>
        <div className="side__menu-open" onClick={() => setShowMenu(true)}>
          |||
        </div>
        <div className={`${menuDisplay}`}>
          <div className="side__menu-close" onClick={() => setShowMenu(false)}>
            X
          </div>
          <ul>
            <li className="side__menu-li">
              <Link to="#">Menu</Link>
            </li>
            <li className="side__menu-li">
              <Link to="#">Rewards</Link>
            </li>
            <li className="side__menu-li">
              <Link to="/gift-cards">Gift Cards</Link>
            </li>
            <hr style={{ margin: "0 40px 20px 20px" }} />
            {!props.user.name ? (
              <Fragment>
                <Link to="/login">
                  <button className="side__menu-login-btn">Sign in</button>
                </Link>
                <Link to="/signup">
                  <button className="side__menu-signup-btn">Join now</button>
                </Link>
              </Fragment>
            ) : (
              <span> John Doe </span>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface PropToState {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

interface DispatchProps {
  login: (user: { id: number; name: string; email: string }) => void;
  logout: () => void;
}

const mapStateToProps = (state: RootState): PropToState => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
  return {
    login: (user: { id: number; name: string; email: string }) =>
      dispatch(login(user)),
    logout: () => dispatch(logout()),
  };
};

type Props = PropToState & DispatchProps & MyProps;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
