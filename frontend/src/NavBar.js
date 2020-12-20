import React from 'react';
import './App.css';

function NavBar(props) {
    return (
      <nav className={`navbar navbar-dark bg-dark ${props.className}`}>
        <div className="container-fluid">
          <a className="navbar-brand">{props.navLabel}</a>
          <div className="d-flex flex-grow-1">
            {props.children}
          </div>
          <div>{props.extraComponent}</div>
        </div>
      </nav>
    )
  }

  export default NavBar;