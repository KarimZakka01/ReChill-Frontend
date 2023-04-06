import "./Navbar.css";
//import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

export default function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="nav-logo">ReChill</h1>
      <ul className="nav-menu">
        {/*making a dynamic list tag, to avoid repetition */}
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
