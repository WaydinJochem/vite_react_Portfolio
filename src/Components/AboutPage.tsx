import "../Styles/About.css";
import Carousel from "./Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AboutPage = () => {
  return (
    <>
      <div className="card mx-5 py-5 row">
        <Carousel />
        <div className="col-6 ms-auto">
          <h4>Passions & Hobbies</h4>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
