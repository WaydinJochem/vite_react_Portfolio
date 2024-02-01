import Hobbies from "../Components/AboutComps/Hobbies"
import AboutMe from '../Components/AboutComps/AboutMe'
import Testimonials from "../Components/AboutComps/Testimonials";
import '../Styles/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


const AboutPage = () => {
  return (
    <div id="aboutPage" className="container">
    <AboutMe/>
    <Testimonials/>
    <Hobbies/>
    </div>
  )
}

export default AboutPage