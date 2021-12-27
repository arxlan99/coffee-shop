import "./Login.css";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

interface Props {}

const Login = (props: Props) => {
  return (
    <div>
      <div className="login__navbar">
        <Link className="login__logo" to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="login__form">
        <h1 className="login__form--title">Sign in or create an account</h1>
        <div className="login__form--card">
          <div style={{ marginTop: "20px", marginBottom: "10px" }}>
            <Input placeholder="Username or email address" />
          </div>
          <div>
            <Input placeholder="Password" />
          </div>
          <div className="login__form-checkboxContainer">
            <input
              className="login__form-checkbox"
              type="checkbox"
              name=""
              id="rememberMe"
            />
            <label htmlFor="rememberMe">Remember me?</label>
          </div>
          <div className="login__form--reset">
            <Link to="#">Forgot your username?</Link>
            <Link to="#">Forgot your password?</Link>
          </div>

          <div className="login__form--submit">
            <SubmitButton text="Sign in" />
          </div>
        </div>
        <div className="login__authIcons">
          <a href="!">
            <img src="/images/google.png" alt="" />
          </a>

          <a href="!">
            <img src="/images/facebook.png" width={44} alt="" />
          </a>
        </div>
        <div className="login__joinCard">
          <h1>JOIN COFFEE® REWARDS</h1>
          <p>
            Join Starbucks® Rewards to earn free food and drinks, get free
            refills, pay and order with your phone, and more.
          </p>
          <Link to="/signup">
            <button>Join now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
