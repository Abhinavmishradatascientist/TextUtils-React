import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="#">{props.aboutText}</a>
              </li>
               */}
          </ul>

          <div className="d-flex">
              <div className="bg-primary rounded-circle mx-2" onClick ={()=> {props.toggleMode('primary')}} style = {{height:"30px",width:"30px",cursor:"pointer"}}></div>
              <div className="bg-danger rounded-circle mx-2" onClick ={()=> {props.toggleMode('danger')}} style = {{height:"30px",width:"30px",cursor:"pointer"}}></div>
              <div className="bg-success rounded-circle mx-2" onClick ={()=> {props.toggleMode('success')}} style = {{height:"30px",width:"30px",cursor:"pointer"}}></div>
              <div className="bg-warning rounded-circle mx-2" onClick ={()=> {props.toggleMode('warning')}} style = {{height:"30px",width:"30px",cursor:"pointer"}}></div>
              <div className="bg-light rounded-circle mx-2" onClick ={()=> {props.toggleMode('light')}} style = {{height:"30px",width:"30px",cursor:"pointer",border:"2px solid black"}}></div>
              <div className="bg-dark rounded-circle mx-2" onClick ={()=> {props.toggleMode('dark')}} style = {{height:"30px",width:"30px",cursor:"pointer"}}></div>


          </div>

          {/* <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "Dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick ={()=> {props.toggleMode(null)}}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
};
