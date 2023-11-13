import "./App.css";
import Navbar from "./Components/Navbar";
import Navigation from "./Components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imagePath from './assets/react.svg'

function App() {
  const items = ["Home", "About", "Projects", "Skills","Contact"]
  return (
    <>
    <Navigation/>
      {/* <Navbar brandName="Menu" imageScrPath={imagePath} navItems={items}/> */}
    </>
  );
}

export default App;
