import { useState } from "react";
import SEO from "../components/SEO";

const services = [
  "Website Development",
  "SEO",
  "Social Media Marketing",
  "Google Ads",
  "Meta Ads",
  "Local SEO / Google Business",
  "Graphic Design",
  "AI Creatives",
  "WhatsApp Marketing",
  "Custom Requirement",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello AASHISH DIGITAL,

I want to discuss a digital project.

Name: ${formData.name}
Business: ${formData.business}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}

Requirement:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/919074755317?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <SEO
        title="Contact AASHISH DIGITAL"
        description="Contact AASHISH DIGITAL for website development, SEO, social media marketing, Google Ads, Meta Ads, local SEO, AI creatives and digital marketing services."
        path="/contact"
      />

      <div className="inner-page contact-page">
        <section className="page-hero contact-hero">
          <div className="container page-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              LET'S WORK TOGETHER
            </span>

            <h1>
              Let's talk about
              <span> your business.</span>
            </h1>

            <p>
              Tell us what you're building, what you're trying
              to improve or what you want to achieve online.
              We'll start with a simple conversation.
            </p>

            <div className="page-hero-actions">
              <a
                href="https://wa.me/919074755317"
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Chat on WhatsApp
                <span>↗</span>
              </a>

              <a
                href="mailto:aashishraikwar9593@gmail.com"
                className="button button-secondary"
              >
                Send Email
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section contact-main-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="section-label">
                  GET IN TOUCH
                </span>

                <h2>
                  Tell us what
                  <span> you need.</span>
                </h2>

                <p>
                  Whether you need a new website, SEO, social
                  media support, paid advertising or AI
                  creatives, share your requirements with us.
                </p>

                <div className="contact-info-list">
                  <a
                    href="https://wa.me/919074755317"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-info-item"
                  >
                    <span className="contact-icon">
                      W
                    </span>

                    <div>
                      <small>WhatsApp</small>
                      <strong>
                        +91 90747 55317
                      </strong>
                    </div>

                    <span>↗</span>
                  </a>

                  <a
                    href="tel:+919074755317"
                    className="contact-info-item"
                  >
                    <span className="contact-icon">
                      ☎
                    </span>

                    <div>
                      <small>Phone</small>
                      <strong>
                        +91 90747 55317
                      </strong>
                    </div>

                    <span>↗</span>
                  </a>

                  <a
                    href="mailto:aashishraikwar9593@gmail.com"
                    className="contact-info-item"
                  >
                    <span className="contact-icon">
                      @
                    </span>

                    <div>
                      <small>Email</small>
                      <strong>
                        aashishraikwar9593@gmail.com
                      </strong>
                    </div>

                    <span>↗</span>
                  </a>

                  <a
                    href="https://www.instagram.com/code.withaashish/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-info-item"
                  >
                    <span className="contact-icon">
                      ◎
                    </span>

                    <div>
                      <small>Instagram</small>
                      <strong>
                        @code.withaashish
                      </strong>
                    </div>

                    <span>↗</span>
                  </a>
                </div>

                <div className="contact-note">
                  <span>✦</span>

                  <p>
                    Prefer WhatsApp? You can send your
                    requirement directly and we'll continue the
                    conversation there.
                  </p>
                </div>
              </div>

              <div className="contact-form-wrapper">
                <div className="contact-form-header">
                  <span className="section-label">
                    PROJECT ENQUIRY
                  </span>

                  <h2>
                    Start with a
                    <span> quick message.</span>
                  </h2>

                  <p>
                    Fill in the details below. On submit, your
                    message will open in WhatsApp.
                  </p>
                </div>

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-row">
                    <label>
                      Your Name
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </label>

                    <label>
                      Business Name
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Your business name"
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      Phone / WhatsApp
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                      />
                    </label>

                    <label>
                      Email
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <label>
                    What do you need?
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option
                          value={service}
                          key={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Tell us about your project
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, website or marketing requirement..."
                      rows="6"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="button button-primary form-submit"
                  >
                    Send Enquiry on WhatsApp
                    <span>↗</span>
                  </button>

                  <p className="form-disclaimer">
                    Your details are used only to understand your
                    project enquiry and continue the conversation.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-services-section">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-label">
                WHAT CAN WE HELP WITH?
              </span>

              <h2>
                One requirement or
                <span> complete digital support.</span>
              </h2>

              <p>
                Start with one service or tell us about the
                complete digital requirement of your business.
              </p>
            </div>

            <div className="services-grid contact-services-grid">
              {services.map((service, index) => (
                <a
                  href="#contact-form"
                  className="service-card contact-service-card"
                  key={service}
                >
                  <div className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="service-card-content">
                    <h3>{service}</h3>

                    <p>
                      Discuss your requirement and find the
                      right solution.
                    </p>
                  </div>

                  <span className="service-arrow">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-final-section">
          <div className="container">
            <div className="inner-cta-box">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                AASHISH DIGITAL
              </span>

              <h2>
                Your next digital
                <span> project starts here.</span>
              </h2>

              <p>
                Send your requirement today and let's discuss
                what would work best for your business.
              </p>

              <div className="hero-actions">
                <a
                  href="https://wa.me/919074755317"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-light"
                >
                  Chat on WhatsApp
                  <span>↗</span>
                </a>

                <a
                  href="mailto:aashishraikwar9593@gmail.com"
                  className="button button-secondary"
                >
                  Email Us
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;