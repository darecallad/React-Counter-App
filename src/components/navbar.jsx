import React, { Component } from "react";

//Stateless functional Components
// sfc
// add props as parameter and remove this.

// Destructiring Argument
// replace props. into {arugment}
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

// cc

// class NavBar extends Component {
//   render() {}
// }

export default NavBar;
