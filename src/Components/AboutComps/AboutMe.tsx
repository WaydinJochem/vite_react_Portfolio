const AboutMe = () => {
  return (
    <div className="card p-5 my-5" id="firstcard">
      <div>
        <img
          src="https://i.postimg.cc/DwkPHvTm/Waydin-auto-x2-removebg-preview.png"
          alt=""
          id="img"
        />
      </div>
      <div className="info">
        <h3 className="text-center">More About Me:</h3>
        <div
          className="card mx-auto  p-5 text-center my-5"
          style={{ width: "30.938rem" }}
          id="add_on"
        >
          <p>
            I'm Waydin Jochem, a dedicated web developer. Having embarked on my journey within web
            development in early March 2023, I've since honed my skills in multiple web development tools some being
            HTML5, CSS3, MySQL and React. With a keen eye for detail and a passion for
            crafting seamless digital experiences, I'm eager to contribute to
            innovative projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
