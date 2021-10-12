import React from 'react';
import logo from "../assets/logo.svg"
import {RiDownloadLine} from "react-icons/ri";

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="30"
            />
            <span className="fw-bold ms-3">VPN Owl</span>
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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="#reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="#contact">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-warning">
                Download <RiDownloadLine/>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
