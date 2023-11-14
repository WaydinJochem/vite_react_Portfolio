import "../Styles/Footer.css";
interface footerProps{
  imageSrc: string;
}

const Footer = ({imageSrc}: footerProps) => {
  const CurrentYear = () => {
    const currentYear = new Date().getFullYear();

    return <span>{currentYear}</span>;
  };
  return (
    <footer>
      <hr />
      <section>
        <div>jochem7405@gmail.com</div>
        <div  id="location">
        <img src={imageSrc} alt="location"/>
        <div id="map">
          Landowne, <br /> Cape Town,
          <br /> South Africa <br />
        </div>
        </div>
      </section>
      <div id="copyright">WaydinJochem@{<CurrentYear/>}</div>
    </footer>
  );
};

export default Footer;
