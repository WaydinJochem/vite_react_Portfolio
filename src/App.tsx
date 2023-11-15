import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import imagePath from "./assets/icons8-download-80.png";

function App() {
  const items = ["Home", "About", "Projects", "Skills", "Contact"];
  return (
    <>
      <Navbar brandName="Menu" imageScrPath={imagePath} navItems={items} />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
