import { useState , useEffect} from "react";

function Header() {
  const [showMenu , setShowMenu] = useState(false);
  
  const handleCloseMenu = () => {
    setShowMenu(false); 
    const closeMenu = document.getElementById('nav-menu');
    closeMenu.classList.remove('show-menu');
  };
  const handleShowMenu = () => {
    setShowMenu(true);
    const ShowMenu = document.getElementById('nav-menu');
    ShowMenu.classList.add('show-menu');
  };
  useEffect(() => {
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));
    return () => {
      navLink.forEach(n => n.removeEventListener('click', linkAction));
    };
  }, []);
  return (
    <>
      <header className="fixed bottom-0 left-0 w-full z-[var(--z-fixed)] bg-[var(--body-color)]">
        <nav className="max-w-[968px] flex h-[var(--header-height)] justify-between items-center max-w-md mx-6">
          <a href="" className="text-[var(--title-color)] font-[var(--font-semi-bold)] hover:text-[var(--first-color)]">
          Mehreen
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="grid grid-cols-3 gap-6">
              <li className="nav__item">
                <a href="#home" className="nav__link flex flex-col items-center text-small-font-size text-[var(--title-color)] hover:text-[var(--first-color)] ">
                  <i className="uil uil-estate text-custom" ></i> Home
                </a>
              </li>
              <li  className="nav__item">
                <a href="#about" className="nav__link flex flex-col items-center text-small-font-size text-[var(--title-color)] hover:text-[var(--first-color)]">
                  <i className="uil uil-user text-custom"></i> About
                </a>
              </li >
              <li  className="nav__item">
                <a href="#skills" className="nav__link flex flex-col items-center text-small-font-size text-[var(--title-color)] hover:text-[var(--first-color)]">
                  <i className="uil uil-file-alt text-custom"></i> Skills
                </a>
              </li>
              <li  className="nav__item">
                <a href="#services" className="nav__link flex flex-col items-center text-small-font-size text-[var(--title-color)] hover:text-[var(--first-color)]">
                  <i className="uil uil-briefcase-alt text-custom"></i> Services
                </a>
              </li>
              <li  className="nav__item">
                <a href="#portfolio" className="nav__link flex flex-col items-center text-small-font-size text-[var(--title-color)] hover:text-[var(--first-color)]">
                  <i className="uil uil-briefcase-alt text-custom"></i> Porfolio
                </a>
              </li>
              <li  className="nav__item">
                <a href="#contactme" className="nav__link flex flex-col items-center text-small-font-size text-[var(--title-color)] hover:text-[var(--first-color)]">
                  <i className="uil uil-briefcase-alt text-custom"></i>Contact Me
                </a>
              </li>
            </ul>
            <i className="uil uil-times absolute right-5 bottom-2 text-xl cursor-pointer text-[var(--first-color)] hover:text-[var(--first-color-alt)]" id="nav-close" onClick={handleCloseMenu}></i>
          </div>
          <div className="text-[var(--title-color)] font-[var(--font-semi-bold)] text-base cursor-pointer hover:text-[var(--first-color)]" id="nav-toggle" onClick={handleShowMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
