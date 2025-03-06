import aboutImage from "../../assets/images/about image.jpeg";
import CV from "../../assets/pdf/Mehreen_Mumtaz.pdf";
export const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
          <img src={aboutImage} alt="" className="about__img" />
        </div>
        <div className="about__data">
          <p className="about__description">
            I am an artist driven by curiosity and creativity, exploring the
            boundless possibilities of all mediums and art forms. My work
            transcends traditional boundaries, blending diverse techniques to
            create pieces that are as unique as the emotions and stories they
            convey. From painting and sketching to mixed media and beyond, my
            journey is one of constant discovery and innovation. Each creation
            is a testament to the transformative power of art and its ability to
            connect, inspire, and evoke.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">+08</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">+08</span>
              <span className="about__info-name">
                Completed <br /> Project
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              href={CV}
              target="_blank"
              className="button button--flex"
            >
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
