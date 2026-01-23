import "./Modeles.css";

interface Model {
  id: number;
  name: string;
  image: string;
  description: string;
  longDescription: string;
}

const models: Model[] = [
  {
    id: 1,
    name: "Lasfora",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    description: "Ensemble tailleur élégant",
    longDescription:
      "Elle s'adresse à la femme qui assume sa féminité avec confiance, tout en restant fidèle à une élégance maîtrisée. Lasfora combine structure et fluidité, créant un équilibre entre caractère et douceur. C'est une pièce qui se remarque par sa tenue et la sensation de confiance qu'elle procure.",
  },
  {
    id: 2,
    name: "Lenicia",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    description: "Ensemble fluide en blanc",
    longDescription:
      "Elle incarne la femme qui n'a pas besoin d'en faire trop pour être remarquée. Sa force réside dans sa posture, son calme et sa manière d'occuper l'espace avec justesse. Elle offre une élégance fluide et confortable, idéale pour le quotidien comme pour les moments plus posés.",
  },
  {
    id: 3,
    name: "Lakelly",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    description: "Robe fluide en denim léger",
    longDescription:
      "Elle s'adresse à la femme qui aime se sentir bien dans ses vêtements sans compromis entre confort et allure. Avec ses lignes épurées et son tombé élégant, Lakelly s'intègre facilement à différents moments de la journée. Elle accompagne les femmes actives, conscientes de leur style, qui privilégient une élégance sincère et sans effort.",
  },
];

const Modeles = () => {
  return (
    <div className="modeles">
      {/* Hero Section */}
      <section className="modeles-hero">
        <div className="modeles-hero-bg"></div>
        <div className="container">
          <h1>Modèles</h1>
          <p className="modeles-intro">
            Découvrez notre collection pensée pour révéler votre beauté
            naturelle
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="modeles-section">
        <div className="container">
          <div className="modeles-grid">
            {models.map((model) => (
              <div key={model.id} className="model-card">
                <div className="model-image-container">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="model-image"
                  />
                </div>
                <div className="model-info">
                  <h3 className="model-name">{model.name}</h3>
                  <p className="model-description">{model.longDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming */}
      <section className="modeles-more">
        <div className="container">
          <h2>Et plus encore...</h2>
          <p>
            Notre collection s'enrichit régulièrement de nouvelles pièces,
            toujours dans le respect de notre vision : révéler la beauté qui
            existe déjà en chaque femme.
          </p>
          <p className="modeles-contact-info">
            Pour plus d'informations sur nos modèles ou pour passer commande,
            n'hésitez pas à nous contacter.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="modeles-philosophy">
        <div className="container">
          <blockquote>
            <p>
              "Chaque création Reveal Beauty est pensée pour révéler l'allure,
              la confiance et la douceur de celle qui la porte."
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Modeles;
