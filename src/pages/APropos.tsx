import "./APropos.css";

// Chemin de base pour GitHub Pages
const BASE_URL = "/reveal-beauty-react/";

const APropos = () => {
  return (
    <div className="apropos">
      {/* Hero Section */}
      <section className="apropos-hero">
        <div className="apropos-hero-bg"></div>
        <div className="container">
          <h1>À propos de nous</h1>
          <p className="apropos-intro">
            Discover the story behind Reveal Beauty
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="apropos-section">
        <div className="container">
          <div className="apropos-content">
            <div className="apropos-image-wrapper">
              <div
                className="apropos-image"
                style={{
                  backgroundImage: `url('${BASE_URL}model-miroir.jpeg')`,
                }}
              ></div>
            </div>
            <div className="apropos-text">
              <h2>Qui nous sommes</h2>
              <p>
                Reveal Beauty est une marque de mode féminine qui célèbre la
                femme telle qu'elle est. Nous croyons que chaque femme possède
                une beauté unique qui n'attend qu'à être révélée.
              </p>
              <p>
                Reveal Beauty est née du constat que de nombreuses femmes
                cherchent à devenir quelqu'un d'autre, alors qu'elles sont déjà
                suffisantes. La marque a été créée pour rappeler que la beauté
                ne se construit pas : <strong>elle se révèle</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="apropos-section apropos-section-alt">
        <div className="container">
          <div className="apropos-content apropos-content-reverse">
            <div className="apropos-image-wrapper">
              <div
                className="apropos-image"
                style={{
                  backgroundImage: `url('${BASE_URL}reveal-beauty-pack.jpeg')`,
                }}
              ></div>
            </div>
            <div className="apropos-text">
              <h2>Notre vision</h2>
              <p>
                Révéler la beauté intérieure à travers des vêtements élégants et
                intemporels. Nous croyons en une mode qui accompagne la femme
                dans son évolution personnelle, sans la définir ni l'enfermer.
              </p>
              <p>
                Reveal Beauty propose des vêtements élégants et intemporels,
                conçus pour s'intégrer naturellement au quotidien, tout en
                valorisant la posture, la présence et la confiance intérieure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="apropos-section">
        <div className="container">
          <h2 className="section-title">Notre engagement</h2>
          <div className="commitment-grid">
            <div className="commitment-card">
              <div className="commitment-icon">✨</div>
              <h3>Respect du corps</h3>
              <p>
                Des vêtements pensés pour accompagner le corps avec naturel,
                sans le contraindre ni le transformer.
              </p>
            </div>
            <div className="commitment-card">
              <div className="commitment-icon">💫</div>
              <h3>Mode chic, non excessive</h3>
              <p>
                Une élégance sobre et raffinée qui sublime sans en faire trop.
              </p>
            </div>
            <div className="commitment-card">
              <div className="commitment-icon">🌟</div>
              <h3>Confiance en soi</h3>
              <p>
                Des créations qui renforcent la confiance intérieure et
                valorisent l'allure naturelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="apropos-quote">
        <div className="container">
          <blockquote>
            <p>
              "Reveal Beauty n'impose pas un idéal. Elle accompagne chaque femme
              dans l'expression de sa propre élégance."
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default APropos;
