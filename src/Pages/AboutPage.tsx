import Hobbies from "../Components/AboutComps/Hobbies"
import AboutMe from '../Components/AboutComps/AboutMe'
import Testimonials from "../Components/AboutComps/Testimonials";
import "../Styles/About.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const AboutPage = () => {
  return (
    <div id="aboutPage" className="d-flex flex-column align-items-center gap-5">
    <Hobbies/>
    <AboutMe/>
    <Testimonials/>
    </div>
  )
}

export default AboutPage