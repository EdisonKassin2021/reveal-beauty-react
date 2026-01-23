import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">Reveal Beauty</span>
          <p className="footer-tagline">Révéler ce qui existe déjà.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/modeles">Modèles</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <p>📍 Dakar, Sénégal</p>
          <p>📞 +221 77 499 9961</p>
          <p>✉️ Massouki.aude@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Reveal Beauty. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
