import { Link } from "react-router-dom";
import { links } from "../utils/links";
import "../App.css";
import logo from "../assets/logo.jpeg";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo-sweet-delight" />
      </Link>
      <div className="links-container">
        {links.map((link) => (
          <Link to={link.route} key={link.name} className="links-nav">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
