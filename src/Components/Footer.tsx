import "../Styles/Footer.css";

const Footer = () => {
  const CurrentYear = () => {
    const currentYear = new Date().getFullYear();

    return <span>{currentYear}</span>;
  };
  return (
    <footer>
      <hr />
      <section>
        <div>jochem7405@gmail.com</div>
        <div id="location">
          Landowne, <br /> Cape Town,
          <br /> South Africa <br />
        </div>
      </section>
      <div id="copyright">WaydinJochem@{<CurrentYear/>}</div>
    </footer>
  );
};

export default Footer;
