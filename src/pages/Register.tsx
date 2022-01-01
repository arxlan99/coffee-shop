import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { AppDispatch } from "../store";
import { createUserWithEmail } from "../store/userSlice";
import "./Register.css";

interface MyProps {}

const Register = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email && password) {
      props.createUser({
        email: email,
        password: password,
      });
    } else {
      setPassword("");
      setEmail("");
      alert("Please fill in all fields");
    }
  };

  useEffect(() => {
    if (props.user.uid) {
      navigate("/");
    }
  }, [navigate, props.user.uid]);

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
          {props.status === "loading" ? (
            <div>Loading...</div>
          ) : (
            <Fragment>
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
                <Input placeholder="Lastname" isEmpty={false} />
              </div>

              <div
                className="register__form--card-title"
                style={{ marginTop: "50px" }}
              >
                Account Security
              </div>
              <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <Input
                  placeholder="Email address"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  isEmpty={!!email}
                />
              </div>
              <div>
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  isEmpty={!!password}
                />
              </div>
              <div className="register__form-checkboxContainer">
                <input
                  className="register__form-checkbox"
                  type="checkbox"
                  name=""
                  id="iLike"
                />
                <label htmlFor="iLike">
                  Yes, I’d like email from Coffee Shop
                </label>
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
                <SubmitButton text="Create Account" onClick={handleSubmit} />
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

interface PropToState {
  user: {
    email: string | null;
    uid: string | null;
  };
  status: "idle" | "loading" | "failed";
}

interface DispatchProps {
  createUser: (user: { email: string; password: string }) => void;
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user.user,
    status: state.user.status,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch): any => {
  return {
    createUser: (user: { email: string; password: string }) =>
      dispatch(createUserWithEmail(user)),
  };
};

type Props = PropToState & DispatchProps & MyProps;

export default connect<PropToState, DispatchProps, MyProps>(
  mapStateToProps,
  mapDispatchToProps
)(Register);
