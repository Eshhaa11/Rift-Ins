import "./Navbar.css";
import { Link } from "react-router-dom";

function NavbarComp() {
  return (
    <div>
      <nav>
        <ul>
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/services">
            Insurance Services
          </Link>
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarComp;
