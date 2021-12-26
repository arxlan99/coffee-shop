import "./Footer.css";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="footer__listContainer">
        <ul>
          <li className="footer__listContainer_header">About Us</li>
          <li>Our Company</li>
          <li>Our Coffee</li>
          <li>Stories and News</li>
          <li>Starbucks Archive </li>
          <li>Investor Relations</li>
          <li>Customer Service</li>
        </ul>
      </div>
      <div className="footer__listContainer">
        <ul>
          <li className="footer__listContainer_header">Careers</li>
          <li>Culture and Values</li>
          <li>Our Coffee</li>
          <li>Inclusion, Diversity, and Equity</li>
          <li>College Achievement Plan </li>
          <li>Alumni Community</li>
          <li>U.S. Careers</li>
          <li>International Careers</li>
        </ul>
      </div>
      <div className="footer__listContainer">
        <ul>
          <li className="footer__listContainer_header">Social Impact</li>
          <li>People</li>
          <li>Planet</li>
          <li>Environmental and Social Impact Reporting</li>
        </ul>
      </div>
      <div className="footer__listContainer">
        <ul>
          <li className="footer__listContainer_header">
            For Business Partners
          </li>
          <li>Landlord Support Center</li>
          <li>Suppliers</li>
          <li>Corporate Gift Card Sales</li>
          <li>Office and Foodservice Coffee</li>
        </ul>
      </div>
      <div className="footer__listContainer">
        <ul>
          <li className="footer__listContainer_header">Order and Pickup</li>
          <li>Order on the App</li>
          <li>Order on the Web</li>
          <li>Delivery</li>
          <li>Order and Pickup Options</li>
          <li>Explore and Find Coffee for Home</li>
        </ul>
      </div>
      <hr className="footer__hr"></hr>
      <div className="footer__iconContainer">
        <a href="!">
          <img src="/images/spotify-brands.svg" alt="" width={32} />
        </a>
        <a href="!">
          <img src="/images/facebook-brands.svg" alt="" width={32} />
        </a>
        <a href="!">
          <img src="/images/pinterest-brands.svg" alt="" width={32} />
        </a>
        <a href="!">
          <img src="/images/instagram-square-brands.svg" alt="" width={32} />
        </a>
      </div>
      <div className="footer__policies">
        <p>
          <a href="!">
            Privacy Policy
            <span className="footer__policies_tags">
              &emsp;&emsp;|&emsp;&emsp;
            </span>
          </a>
          <a href="!">
            Terms of Use
            <span className="footer__policies_tags">
              &emsp;&emsp;|&emsp;&emsp;
            </span>
          </a>
          <a href="!">
            CA Supply Chain Act
            <span className="footer__policies_tags">
              &emsp;&emsp;|&emsp;&emsp;
            </span>
          </a>
          <a href="!">Cookie Preferences </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
