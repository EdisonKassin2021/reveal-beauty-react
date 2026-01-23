import { Link } from "react-router-dom";
import "./Accueil.css";

const Accueil = () => {
  return (
    <div className="accueil">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <span className="hero-welcome">WELCOME TO</span>
          <h1 className="hero-title">
            <span>Reveal</span>
            <span>Beauty</span>
          </h1>
          <p className="hero-subtitle">
            Reveal Beauty révèle ce qui existe déjà.
          </p>
          <div className="hero-buttons">
            <Link to="/modeles" className="btn btn-primary">
              Découvrir la collection
            </Link>
            <Link to="/a-propos" className="btn btn-secondary">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <h2 className="section-title-elegant">
            Reveal Beauty, c'est choisir une mode qui vous respecte.
          </h2>
          <p className="intro-text">
            Chaque création Reveal Beauty est pensée pour révéler l'allure, la
            confiance et la douceur de celle qui la porte.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <h3>Valorisation de soi</h3>
              <p>
                Un univers qui célèbre chaque femme, sans comparaison, en
                honorant son identité et son allure.
              </p>
            </div>
            <div className="value-card">
              <h3>Élégance consciente</h3>
              <p>
                Une féminité raffinée qui sublime sans exposer, pour une
                confiance sereine et assumée.
              </p>
            </div>
            <div className="value-card">
              <h3>Respect du corps</h3>
              <p>
                Des coupes pensées pour accompagner le corps avec naturel, sans
                le contraindre ni le transformer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="main-quote">
            <p>Et si votre corps n'était pas le problème?</p>
            <span className="quote-subtitle">
              Une autre idée de la féminité, la confiance se porte...
            </span>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>La classe à petit prix</h2>
          <p>
            Reveal Beauty n'impose pas un idéal. Elle accompagne chaque femme
            dans l'expression de sa propre élégance.
          </p>
          <Link to="/modeles" className="btn btn-primary">
            Voir nos modèles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
