import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // We track whether or not the mobile drawer menu is opening to avoid glitchy-looking menu behavior.
  //This is only set to false when the CSS transition ends.
  const [animating, setAnimating] = useState(false);

  // This simply represents the state of whether or not the drawer is open.
  const [isOpen, setIsOpen] = useState(false);

  // Opens the drawer menu.
  function toggleDrawer() {
    // Do not toggle the drawer if we are not currently in the open/close animation.
    if (!animating) {
      setAnimating(true);
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      {/* This navbar is shown on larger screens. */}
      <nav className="desktop-nav">
        <div className="dropdown" tabIndex="0">
          <div className="dropdown-button">
            <img
              src="/src/assets/icons/hamburger_icon.svg"
              className="hamburger-icon"
              alt="Menu Icon"
            />
            <h4 className="project-samples-heading">PROJECT SAMPLES</h4>
          </div>
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/mechanical-design">Mechanical Design</Link>
            <Link to="/models-and-renders">Models and Renders</Link>
          </div>
        </div>

        <Link to="/contact" className="contact-button-desktop">
          Contact
        </Link>
      </nav>

      {/* This navbar is shown on smaller screens. */}
      <nav className="mobile-nav">
        <div className="drawer">
          <div className="dropdown-button" onClick={toggleDrawer}>
            <img
              src="/src/assets/icons/hamburger_icon.svg"
              className="hamburger-icon"
              alt="Menu Icon"
            />
            <h4 className="project-samples-heading">PROJECT SAMPLES</h4>
          </div>
          <div
            className={"drawer-container" + (isOpen ? " container-open" : "")}
            onTransitionEnd={() => {
              setAnimating(false);
            }}
          >
            <div className={"drawer-content" + (isOpen ? " drawer-open" : "")}>
              <Link to="/">Home</Link>
              <hr />
              <Link to="/mechanical-design">Mechanical Design</Link>
              <hr />
              <Link to="/models-and-renders">Models and Renders</Link>
              <hr />
              <Link to="/contact" id="contact-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <script src="/src/common/Navbar.js" />
    </>
  );
}

export default Navbar;
