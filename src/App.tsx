import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import imagePath from "./assets/icons8-download-80.png"
import scr from "./assets/icons8-location-50.png"
import AboutPage from "./Pages/AboutPage";


function App() {
  const items = ["Home", "About", "Projects", "Skills","Contact"];
  return (
    <>
      <Navbar brandName="Menu" imageScrPath={imagePath} navItems={items}/>
    <AboutPage/>
      <Footer imageSrc={scr}/>
    </>
  );
}

export default App;
