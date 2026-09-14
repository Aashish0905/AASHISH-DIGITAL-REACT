import SEO from "../components/SEO";

const projects = [
  {
    number: "01",
    title: "Aashish Sandwich",
    category: "Business Website",
    type: "Real Project",
    description:
      "A business-focused website concept created to present products, brand identity and customer contact information in a professional way.",
    tags: ["Website", "UI/UX", "Business"],
  },
  {
    number: "02",
    title: "Legal Helping Hands",
    category: "Legal Website",
    type: "Real Project",
    description:
      "A professional legal-services website structure focused on credibility, practice areas, contact information and local search visibility.",
    tags: ["Website", "SEO", "Local"],
  },
  {
    number: "03",
    title: "Chhatarpur Digital",
    category: "Digital Marketing",
    type: "Real Project",
    description:
      "A digital marketing website concept presenting website development, SEO, social media and online business solutions.",
    tags: ["Digital Marketing", "SEO", "Web"],
  },
  {
    number: "04",
    title: "Real Estate Website",
    category: "Real Estate",
    type: "Demo Concept",
    description:
      "A modern property website concept designed around property discovery, enquiry generation and a clean user experience.",
    tags: ["Real Estate", "UI/UX", "Lead Generation"],
  },
  {
    number: "05",
    title: "Salon Website",
    category: "Beauty & Lifestyle",
    type: "Demo Concept",
    description:
      "A premium salon website concept designed to showcase services, visual branding, location and customer enquiries.",
    tags: ["Salon", "Branding", "Website"],
  },
  {
    number: "06",
    title: "Fitness & Gym Website",
    category: "Fitness",
    type: "Demo Concept",
    description:
      "A high-energy fitness website concept with service presentation, membership enquiry and strong mobile-first design.",
    tags: ["Fitness", "UI/UX", "Responsive"],
  },
  {
    number: "07",
    title: "Coaching Institute",
    category: "Education",
    type: "Demo Concept",
    description:
      "An education website concept for presenting courses, batches, enquiries and important institute information.",
    tags: ["Education", "Website", "Lead Generation"],
  },
];

function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio & Website Projects"
        description="Explore AASHISH DIGITAL website projects and demo concepts across business, legal, digital marketing, real estate, salon, fitness and education."
        path="/portfolio"
      />

      <div className="inner-page portfolio-page">
        <section className="page-hero">
          <div className="container page-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              OUR WORK
            </span>

            <h1>
              Websites designed to
              <span> make businesses look better.</span>
            </h1>

            <p>
              Explore selected websites and concepts created by
              AASHISH DIGITAL. Each project is designed around
              usability, mobile experience and business goals.
            </p>

            <div className="page-hero-actions">
              <a
                href="/contact"
                className="button button-primary"
              >
                Start Your Project
                <span>↗</span>
              </a>

              <a
                href="/services"
                className="button button-secondary"
              >
                Explore Services
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section portfolio-showcase-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  SELECTED PROJECTS
                </span>

                <h2>
                  Work that focuses on
                  <span> clarity and conversion.</span>
                </h2>
              </div>

              <p>
                Real projects and clearly labelled demo concepts.
                More project visuals can be added here as the
                portfolio grows.
              </p>
            </div>

            <div className="portfolio-grid portfolio-page-grid">
              {projects.map((project) => (
                <article
                  className="portfolio-card portfolio-page-card"
                  key={project.number}
                >
                  <div className="portfolio-image">
                    <div className="portfolio-placeholder">
                      <span>{project.category}</span>

                      <strong>{project.title}</strong>

                      <small>
                        Project Preview
                      </small>
                    </div>

                    <span className="portfolio-index">
                      {project.number}
                    </span>

                    <span className="portfolio-type">
                      {project.type}
                    </span>
                  </div>

                  <div className="portfolio-info">
                    <div>
                      <span className="section-label">
                        {project.category}
                      </span>

                      <h3>{project.title}</h3>
                    </div>

                    <span className="service-arrow">
                      ↗
                    </span>

                    <p>{project.description}</p>

                    <div className="service-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="notice-box portfolio-note">
              <div>
                <span className="section-label">
                  PORTFOLIO NOTE
                </span>

                <h3>
                  More real project screenshots can be added
                  here.
                </h3>

                <p>
                  When you provide your final project images,
                  logos or live links, this section can be
                  upgraded into a complete visual case-study
                  portfolio.
                </p>
              </div>

              <a
                href="/contact"
                className="button button-primary"
              >
                Add Your Project
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section portfolio-process-section">
          <div className="container">
            <div className="split-heading">
              <div>
                <span className="section-label">
                  HOW WE BUILD
                </span>

                <h2>
                  Every project starts
                  <span> with the right questions.</span>
                </h2>
              </div>

              <div className="intro-points">
                <p>
                  Before designing a website, we understand the
                  business, target audience, services and desired
                  customer action.
                </p>

                <p>
                  This helps us create a website that is not just
                  visually attractive, but also useful for the
                  business.
                </p>
              </div>
            </div>

            <div className="process-grid">
              <div className="process-card">
                <span className="process-number">
                  01
                </span>

                <h3>Understand</h3>

                <p>
                  Business, audience, services and goals.
                </p>
              </div>

              <div className="process-card">
                <span className="process-number">
                  02
                </span>

                <h3>Plan</h3>

                <p>
                  Structure, content, user journey and
                  technology.
                </p>
              </div>

              <div className="process-card">
                <span className="process-number">
                  03
                </span>

                <h3>Design</h3>

                <p>
                  Responsive UI with a clear visual identity.
                </p>
              </div>

              <div className="process-card">
                <span className="process-number">
                  04
                </span>

                <h3>Launch</h3>

                <p>
                  Testing, deployment and future improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section inner-cta">
          <div className="container">
            <div className="inner-cta-box">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                YOUR BUSINESS COULD BE NEXT
              </span>

              <h2>
                Have a website idea?
                <span> Let's build it.</span>
              </h2>

              <p>
                Share your business details and we'll discuss
                the right website and digital strategy for your
                goals.
              </p>

              <div className="hero-actions">
                <a
                  href="/contact"
                  className="button button-light"
                >
                  Get Free Consultation
                  <span>↗</span>
                </a>

                <a
                  href="https://wa.me/919074755317"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  WhatsApp Us
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

export default Portfolio;