import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../App.css"

interface NavbarProps {
  brandName: string;
  imageScrPath: string;
  navItems: string[];
}

const Navbar = ({ brandName, imageScrPath, navItems }: NavbarProps) => {
  const [selectedIndex, setselectedIndex] = useState(-1);
  return (
    <>
      <nav className="navbar navbar-light fw-bold navbar-expand-lg w-sm-25 px-md-5">
        <div className="container-fluid">
            <span className="fw-bolder fs-4 text-white navbar-brand d-none d-md-block">{brandName}</span>
          {/* Nav Button */}
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
          {/* Nav Button End */}
          {/* Nav items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex justify-content-between align-items-center me-5-md py-2 flex-column flex-lg-row gap-5">
              {navItems.map((items, index) => (
                <>
                  <li
                    key={items}
                    className={`nav-item ${
                      index === selectedIndex ? "active" : ""
                    }`}
                    onClick={() => setselectedIndex(index)}
                  >
                    <a className="nav-link" href="#">
                      {items}
                    </a>
                  </li>
                </>
              ))}
              <li className="nav-item d-flex flex-column align-items-center">
                <a className="nav-link text-decoration-none" href="#" id="dwn">
                  Download CV
                </a>
                <div
                  className=""
                >
                  <img src={imageScrPath} alt="" width="32px" className=""/>
                </div>
              </li>
            </ul>
          </div>
          {/* Nav Items End */}

          <a className="navbar-brand d-md-none mx-auto" href="#">
            <span className="fw-bolder fs-4 text-white ">Navigation</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
