import React from "react";
import {NavLink} from 'react-router-dom';
import web from "../src/images/logojg.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
              <img src={web}  style={{height: '40px', width: '30px'}} />
                <NavLink className="navbar-brand" style={{fontFamily: 'Lobster'}} to="/">
                  Jalganga
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/product">
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">
                        Contact Us
                      </NavLink>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
