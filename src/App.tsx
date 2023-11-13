import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import imagePath from './assets/react.svg'

function App() {
  const items = ["Home", "About", "Projects", "Skills","Contact"]
  return (
    <>
      <Navbar brandName="Menu" imageScrPath={imagePath} navItems={items}/>
      <Footer/>
    </>
  );
}

export default App;
