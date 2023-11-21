import "../Styles/Footer.css";
import scr from "../assets/icons8-location-50.png";
import mail from "../assets/icons8-gmail-50.png";

const Footer = () => {
  const CurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return <span>{currentYear}</span>;
  };

  const img = scr;
  const gmail = mail;
  return (
    <footer>
      <hr />
      <section>
        <div id="email">
          <img src={gmail} alt="" id="email" /> jochem7405@gmail.com
        </div>
        <div id="location">
          <img src={img} alt="location" />
          <div id="map">
            Landowne, <br /> Cape Town,
            <br /> South Africa <br />
          </div>
        </div>
      </section>
      <div id="copyright">WaydinJochem@{<CurrentYear />}</div>
    </footer>
  );
};

export default Footer;