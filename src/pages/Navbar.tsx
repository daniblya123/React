import { Outlet, Link } from "react-router-dom";
import { CONTACT_PATH, INDEX_PATH, NEWS_PATH } from "../constants/paths";
import "../NavbarLayout.css"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul className = "navigation">
          <li>
            <Link to={INDEX_PATH}>Home</Link>
          </li>
          <li>
            <Link to={NEWS_PATH}>News</Link>
          </li>
          <li>
            <Link to={CONTACT_PATH}>Contact</Link>
          </li>
        </ul>
        </div>

      <Outlet />
    </>
  );
}

export default Navbar;
