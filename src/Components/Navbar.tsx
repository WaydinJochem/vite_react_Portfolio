import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface NavbarProps {
  brandName: string;
  imageScrPath: string;
  navItems: string[];
}

const Navbar = ({ brandName, imageScrPath, navItems }: NavbarProps) => {
  const [selectedIndex, setselectedIndex] = useState(-1);
  return (
    <>
      <nav className="navbar navbar-light bg-black fw-bold navbar-expand-lg w-sm-25 px-md-5">
        <div className="container-fluid">
          <a className="navbar-brand d-none d-md-block" href="#">
            <span className="fw-bolder fs-4 text-white">{brandName}</span>
          </a>
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
            <ul className="navbar-nav ms-auto d-flex justify-content-between align-items-center me-5-md py-2 flex-column flex-lg-row">
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
              <li className="nav-item">
                <a className="nav-link text-decoration-none" href="#" id="dwn">
                  Download CV
                </a>
                <div
                  className="d-flex justify-content-center align-items-center"
                >
                  <img src={imageScrPath} alt="" />
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
