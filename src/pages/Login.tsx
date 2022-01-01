import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { AppDispatch, RootState } from "../store";
import { connect } from "react-redux";
import { loginWithEmailAndPassword } from "../store/userSlice";
import { Fragment, useEffect, useState } from "react";
// import { connect } from "react-redux";

interface MyProps {}

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  /*   const handleLogin = async (e: any) => {
    e.preventDefault();
    if (email && password) {
      await props.loginWithEmailAndPassword({
        email: email,
        password: password,
      });
      if (props.user.uid) {
        navigate("/");
      }
    } else alert("Please fill in all fields");
  }; */

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (email && password) {
      props.loginWithEmailAndPassword({
        email: email,
        password: password,
      });
    } else alert("Please fill in all fields");
  };

  useEffect(() => {
    if (props.user.uid) {
      navigate("/");
    }
  }, [navigate, props.user.uid]);

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
          {props.status === "loading" ? (
            <div>Loading...</div>
          ) : (
            <Fragment>
              <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <Input
                  placeholder="Username or email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
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
                <SubmitButton text="Sign in" onClick={(e) => handleLogin(e)} />
              </div>
            </Fragment>
          )}
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

interface PropToState {
  user: {
    email: string | null;
    uid: string | null;
  };
  status: "idle" | "loading" | "failed";
}

interface DispatchProps {
  loginWithEmailAndPassword: (user: {
    email: string;
    password: string;
  }) => void;
}

const mapStateToProps = (state: any): PropToState => {
  return {
    user: state.user.user,
    status: state.user.status,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
  return {
    loginWithEmailAndPassword: (user: { email: string; password: string }) =>
      dispatch(loginWithEmailAndPassword(user)),
  };
};

type Props = PropToState & DispatchProps & MyProps;

export default connect<PropToState, DispatchProps, MyProps>(
  mapStateToProps,
  mapDispatchToProps
)(Login);
