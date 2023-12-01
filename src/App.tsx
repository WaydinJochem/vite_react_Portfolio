import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavComp from "./Components/NavComp";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import SkillComp from "./Pages/SkillComp";
import Footer from "./Components/Footer";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavComp />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillComp/>}/>
            <Route path="projects" element={<ProjectPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </>
  );
}

export default App;
