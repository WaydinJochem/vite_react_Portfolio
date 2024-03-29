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
      <hr id="hr"/>
      <section>
        <div id="email">
          <img src={gmail} alt="" id="email" style={{width: "4rem"}}/> jochem7405@gmail.com
        </div>
        <div id="location">
          <img src={img} alt="location"  style={{width: "2.5rem"}}/>
          <div id="map">
            Lansdowne, <br /> Cape Town,
            <br /> South Africa <br />
          </div>
        </div>
      </section>
      <div id="copyright">WaydinJochem&copy;{<CurrentYear />}</div>
    </footer>
  );
};

export default Footer;