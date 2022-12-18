import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-item" to="/">
        HOME
      </Link>
      <Link className="nav-item" to="/About">
        ABOUT ME
      </Link>
      <Link className="nav-item" to="/categories">
        CATEGORIES
      </Link>
      {/* <Link to="/politics">POLITICS</Link>
      <Link to="/business">BUSINESS</Link>
      <Link to="/health">HEALTH</Link>
      <Link to="/design">DESIGN</Link>
      <Link to="/sport">SPORT</Link>
      <Link to="/contact">CONTACT</Link> */}
    </div>
  );
};

export default Navbar;
