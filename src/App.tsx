import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SkillComp from "./Components/SkillComp";
import imagePath from "./assets/icons8-download-80.png";

function App() {
  const items = ["Home", "About", "Projects", "Skills", "Contact"];
  return (
    <>
      <Navbar brandName="Menu" imageScrPath={imagePath} navItems={items} />
      <main>
       <SkillComp/>
      </main>
      <Footer />
    </>
  );
}

export default App;
