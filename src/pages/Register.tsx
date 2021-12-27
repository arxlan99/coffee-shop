import { Link } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import "./Register.css";

interface Props {}

const Register = (props: Props) => {
  return (
    <div>
      <div className="register__navbar">
        <Link className="register__logo" to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="register__form">
        <h1 className="register__form--title">Create an account</h1>
        <div className="register__form--card">
          <div
            className="register__form--card-title"
            style={{ marginTop: "30px" }}
          >
            Personal Information
          </div>
          <div style={{ marginTop: "20px", marginBottom: "10px" }}>
            <Input placeholder="Firstname" />
          </div>
          <div>
            <Input placeholder="Lastname" />
          </div>

          <div
            className="register__form--card-title"
            style={{ marginTop: "50px" }}
          >
            Account Security
          </div>
          <div style={{ marginTop: "20px", marginBottom: "10px" }}>
            <Input placeholder="Email address" />
          </div>
          <div>
            <Input placeholder="Password" />
          </div>
          <div className="register__form-checkboxContainer">
            <input
              className="register__form-checkbox"
              type="checkbox"
              name=""
              id="iLike"
            />
            <label htmlFor="iLike">Yes, I’d like email from Coffee Shop</label>
          </div>
          <div className="register__form-checkboxContainer">
            <input
              className="register__form-checkbox"
              type="checkbox"
              name=""
              id="iLike"
            />
            <label htmlFor="iLike">I agree to the .... and the ..</label>
          </div>
          <div className="register__form--reset">
            <Link to="#">Forgot your username?</Link>
            <Link to="#">Forgot your password?</Link>
          </div>

          <div className="register__form--submit">
            <SubmitButton text="Create Account" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
