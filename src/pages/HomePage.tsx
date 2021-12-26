import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./HomePage.css";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <div className="home__container">
        <div className="home__image">
          <div className="home__image-description">
            <h1>
              COFFEE FOR <br></br> LIFE
            </h1>
            <p>
              Coffee for life is a social enterprise that provides a platform
              for people to buy coffee and share their experiences with others.
            </p>
          </div>
          <div className="home__image-feature">
            <img src="/images/homepage-image-1.png" alt="" />
          </div>
        </div>
        <div className="home__image home__image-color">
          <div className="home__image-description home__image_header-color home__image-order-2 ">
            <h1>
              MINTY, <br></br> CHOCOLATY JOY
            </h1>
            <p>
              Our handcrafted Peppermint Mocha is like a winter wonderland of
              flavors.
            </p>
          </div>
          <div className="home__image-feature home__image-order-1 ">
            <img
              src="/images/homepage-image-2.png"
              style={{ maxHeight: "600px" }}
              alt=""
            />
          </div>
        </div>
        <div className="home__image home__image-color">
          <div className="home__image-description home__image_header-color ">
            <h1>
              MINTY, <br></br> CHOCOLATY JOY
            </h1>
            <p>
              Our handcrafted Peppermint Mocha is like a winter wonderland of
              flavors.
            </p>
          </div>
          <div className="home__image-feature">
            <img
              src="/images/homepage-image-3.png"
              style={{ maxHeight: "600px" }}
              alt=""
            />
          </div>
        </div>
        <div className="home__image">
          <div className="home__image-description">
            <h1>
              COFFEE FOR <br></br> LIFE
            </h1>
            <p>
              Coffee for life is a social enterprise that provides a platform
              for people to buy coffee and share their experiences with others.
            </p>
          </div>
          <div className="home__image-feature">
            <img src="/images/homepage-image-5.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
