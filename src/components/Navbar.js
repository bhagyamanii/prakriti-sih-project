import React from "react";

const navStyle={
  backgroundImage: "linear-gradient(to bottom, #00b33c, white)",
}


export default function Navbar() {
  return (
    <div>
      <nav style={navStyle}className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <p className="navbar-brand fs-5 fw-bold" href="#">
            [hexTech]
          </p>

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
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <li className="nav-item fs-4 fw-bolder fst-italic">
                <p className="nav-link active" aria-current="page" href="#">
                Ayurveda - The Way of Life
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
