import "../Styles/Navigation.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

interface NavProps {
  itemName: string;
  dwnImg: string;
  navItems: string[];
}

const Navigation = ({ itemName, dwnImg, navItems }: NavProps) => {
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <nav className="container-fluid">
      <h1>{itemName}</h1>
      <div className="nav-items">
        <ul>
          {navItems.map((items, index) => (
            <li
              key={items}
              className={`nav-item ${index === selectedIndex ? "active" : ""}`}
              onClick={() => setselectedIndex(index)}
            >
              <a className="nav-link" href="#">
                {items}
              </a>
            </li>
          ))}
          <li>
            <a href="#">Download</a>
            <div>
            <img src={dwnImg} alt="image" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
