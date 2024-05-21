

function Home() {
    return (
      <>
        <section className="home section" id="home">
          <div className="max-w-md mx-6 grid gap-socail-gap"> 
            <div className="home__content grid gap-6">
              <div className="grid grid-cols-max gap-y-socail-gap">
                <a href="https://www.linkedin.com/" className="home__social-icon">
                  <i className="uil uil-linkedin-alt"></i>
                </a>
                <a href="https://github.com/" className="home__social-icon">
                  <i className="uil uil-github-alt"></i>
                </a>
              </div>
              <div className="home__img">
                <svg
                  className="home__blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                    <image className="home__blob-img" x='12' y='18'  />
                  </g>
                </svg>
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi, I'am Ammad</h1>
                <h3 className="home__subtitle">Frontend Developer</h3>
                <p className="home__description">
                  A solid foundation in web design and development and strive to
                  consistently deliver high-quality work
                </p>
                <a href="#contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>
            <div className="home__scroll">
               <a href="" className="home_scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse">
                Scroll Down<span className="uil uil-arrow-down home__scroll-arrow"></span>
                </i>
               </a>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Home;
  