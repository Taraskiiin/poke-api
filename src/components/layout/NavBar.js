import React from "react";
import logo from "../../assets/pokeball-pokemon-svgrepo-com.svg";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a
          className="nav-brand col-sm-3 col-md-2 mr-0 aling-item-center logo-app"
          href="#"
        >
          <img src={logo} alt="logo">  
          </img>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
