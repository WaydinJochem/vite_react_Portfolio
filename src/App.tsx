import "./App.css";
import Footer from "./Components/Footer";
import scr from "./assets/icons8-location-50.png"


function App() {
  const items = ["Home", "About", "Projects", "Skills","Contact"]
  return (
    <>
      <Footer imageSrc={scr}/>
    </>
  );
}

export default App;
