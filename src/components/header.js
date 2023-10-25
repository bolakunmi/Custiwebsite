import React, { useState } from "react";
import Main from "./main";
import { Link } from "react-router-dom";

const General = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <header>
      <nav className="bigscreen_navbar">
        <div className="UniName">
          <Link to={"/"}>
            <div className="Title-container">
              <img
                src={require("../pictures/custi.gif")}
                alt="Logo"
                className="custi-logo"
              />
              <div>
                <img
                  src={require("../pictures/title.png")}
                  alt="Logo"
                  className="custi-title"
                />
                <img
                  src={require("../pictures/name.png")}
                  alt="Logo"
                  className="custi-name"
                />
              </div>
            </div>
          </Link>
          <div className="UniNameSecond">
            <div className="container">
              <div className="input-group mb-3">
                <input
                  type={"text"}
                  className="form-control search_input"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="bi bi-search search_icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <a>apply</a>
              </li>
              <li onClick={openModal}>Login</li>
              <li>Donations</li>
            </ul>
          </div>
        </div>

        <div className="Header_main ">
          <ul className="Header_list_left">
            <li>Admissions</li>
            <li>
              <Link rel="noreferrer" to="faculty">
                Faculty
              </Link>
            </li>
            <li>Research</li>
            <li>
              <Link rel="noreferrer" to="about">
                About
              </Link>
            </li>
          </ul>

          <ul className="Header_list_right">
            <li>Locations</li>
            <li>Student Life</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-body-tertiary smallscreen_navbar">
        <div className="container-fluid">
          <Link to={"/"}>
            <div className="Title-container">
              <img
                src={require("../pictures/custi.gif")}
                alt="Logo"
                className="custi-logo"
              />
              <div>
                <img
                  src={require("../pictures/title.png")}
                  alt="Logo"
                  className="custi-title"
                />
                <img
                  src={require("../pictures/name.png")}
                  alt="Logo"
                  className="custi-name"
                />
              </div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <span className="navbar-toggler-icon"></span>
            {showNav}
          </button>
        </div>

        <div className="smallnavbar">
          <ul
            className="navbar-nav "
            style={{ display: showNav ? "block" : "none" }}
          >
            <Link to={"/"}>
              <li className="nav-item">Home</li>
            </Link>

            <Link rel="noreferrer" to="faculty">
              <li className="nav-item">Faculty</li>
            </Link>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Research
              </a>
            </li>

            <Link rel="noreferrer" to="about">
              <li className="nav-item">About</li>
            </Link>

            <li className="input-group mb-3">
              <input
                type={"text"}
                className="form-control search_input"
                placeholder="Search..."
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  <i className="bi bi-search search_icon"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-hidden={!showModal}
        id="exampleModal"
      >
        <div className="modal-dialog my_modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In/Sign Up</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>CUSTI welcomes you! are you a new or returning student?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeModal}
              >
                <Link rel="noreferrer" to="signin">
                  Sign In
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeModal}
              >
                <Link rel="noreferrer" to="signup">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default General;
