import React from "react";
import { Link , useLocation} from "react-router-dom";

export default function NavBar() {
  let location = useLocation();
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            MyNotebook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                  About
                </Link>
                </li>
                <li>
                <Link className={`nav-link ${location.pathname==="/login"?"active":""}`} to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className={`nav-link ${location.pathname==="/signup"?"active":""}`} to="/signup">
                  Sign Up
                </Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
