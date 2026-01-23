import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Obtenir le nom de la page active
  const getActivePage = () => {
    switch (location.pathname) {
      case "/":
        return "Accueil";
      case "/a-propos":
        return "À propos";
      case "/modeles":
        return "Modèles";
      case "/contact":
        return "Contact";
      default:
        return "Accueil";
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">Reveal Beauty</span>
        </NavLink>

        <div className="header-right">
          <span className="current-page">{getActivePage()}</span>
          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            À propos
          </NavLink>
          <NavLink
            to="/modeles"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Modèles
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
