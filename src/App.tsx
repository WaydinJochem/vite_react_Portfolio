import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import imagePath from "./assets/icons8-download-80.png"
import scr from "./assets/icons8-location-50.png"
import AboutPage from "./Components/AboutPage";


function App() {
  const items = ["Home", "About", "Projects", "Skills","Contact"];
  const img = ["https://i.postimg.cc/qq5kwftf/Premium-Photo-Astronaut-couple-holding-hands-as-they-look-out-into-the-galaxy.jpg"];
  return (
    <>
      <Navbar brandName="Menu" imageScrPath={imagePath} navItems={items}/>
      <AboutPage/>
      <Footer imageSrc={scr}/>
    </>
  );
}

export default App;
