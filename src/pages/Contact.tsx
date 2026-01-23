import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset après 5 secondes
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="container">
          <h1>Contactez-nous</h1>
          <p className="contact-intro">
            Pour toute question ou collaboration, n'hésitez pas à nous écrire.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Commander ?</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Dakar, Sénégal</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+221774999961">+221 77 499 9961</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:Massouki.aude@gmail.com">
                    Massouki.aude@gmail.com
                  </a>
                </div>
              </div>

              <div className="social-links">
                <h3>Suivez-nous</h3>
                <div className="social-icons">
                  <a
                    href="https://instagram.com/revealbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Écrivez-nous</h2>

              {submitted ? (
                <div className="form-success">
                  <span className="success-icon">✓</span>
                  <p>Merci pour votre message !</p>
                  <p>Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Votre message..."
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="contact-quote">
        <div className="container">
          <blockquote>
            <p>"Reveal Beauty révèle ce qui existe déjà."</p>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Contact;
