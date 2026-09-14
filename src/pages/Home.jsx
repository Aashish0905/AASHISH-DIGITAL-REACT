
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Home() {
  const services = [
    {
      number: "01",
      title: "Website Development",
      text: "Fast, responsive and conversion-focused websites designed around your business.",
    },
    {
      number: "02",
      title: "SEO",
      text: "Search-friendly website structure and practical SEO strategies for better visibility.",
    },
    {
      number: "03",
      title: "Social Media Marketing",
      text: "Consistent social content and creative direction that helps your brand stay visible.",
    },
    {
      number: "04",
      title: "Google & Meta Ads",
      text: "Campaign setup and creative support for businesses ready to use paid advertising.",
    },
    {
      number: "05",
      title: "Local SEO",
      text: "Improve your local digital presence and make it easier for nearby customers to discover you.",
    },
    {
      number: "06",
      title: "AI Creatives",
      text: "AI-assisted visual concepts, campaign ideas and creative content for modern brands.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Aashish Sandwich",
      category: "Business Website",
      type: "Real Project",
    },
    {
      number: "02",
      title: "Legal Helping Hands",
      category: "Legal Website",
      type: "Real Project",
    },
    {
      number: "03",
      title: "Chhatarpur Digital",
      category: "Digital Business",
      type: "Real Project",
    },
    {
      number: "04",
      title: "Business Website Concept",
      category: "Website Design",
      type: "Demo",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      text: "Understand your business, audience and goals.",
    },
    {
      number: "02",
      title: "Plan",
      text: "Choose the right digital direction and priorities.",
    },
    {
      number: "03",
      title: "Build",
      text: "Create the website, content or campaign assets.",
    },
    {
      number: "04",
      title: "Improve",
      text: "Use feedback and real information to keep improving.",
    },
  ];

  return (
    <div className="home-page">
      <SEO
        title="Digital Marketing & Web Solutions"
        description="AASHISH DIGITAL provides website development, SEO, social media marketing, Google Ads, Meta Ads, local SEO and AI creative solutions for modern businesses."
        path="/"
      />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              DIGITAL MARKETING & WEB SOLUTIONS
            </div>

            <h1>
              Grow Your Business.
              <span> Get More Customers.</span>
            </h1>

            <p>
              Website Development, SEO, Social Media Marketing,
              Google Ads, Meta Ads, AI Creatives and complete
              digital growth solutions for modern businesses.
            </p>

            <div className="hero-actions">
              <Link
                to="/contact"
                className="button button-primary"
              >
                Get Free Consultation
                <span>↗</span>
              </Link>

              <Link
                to="/portfolio"
                className="button button-secondary"
              >
                View Our Work
                <span>↗</span>
              </Link>
            </div>

            <div className="hero-trust">
              <span>Websites</span>
              <i />
              <span>SEO</span>
              <i />
              <span>Marketing</span>
              <i />
              <span>AI Creatives</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="dashboard-card">
              <div className="dashboard-top">
                <div>
                  <span className="mini-label">
                    DIGITAL PRESENCE
                  </span>

                  <strong>
                    AASHISH
                    <br />
                    DIGITAL
                  </strong>
                </div>

                <span className="status-pill">
                  <span />
                  ACTIVE
                </span>
              </div>

              <div className="dashboard-chart">
                <div className="chart-label">
                  <span>Growth System</span>
                  <span>01 — 04</span>
                </div>

                <div className="chart-bars">
                  <span style={{ height: "34%" }} />
                  <span style={{ height: "48%" }} />
                  <span style={{ height: "42%" }} />
                  <span style={{ height: "64%" }} />
                  <span style={{ height: "58%" }} />
                  <span style={{ height: "78%" }} />
                  <span style={{ height: "72%" }} />
                  <span style={{ height: "92%" }} />
                </div>
              </div>

              <div className="dashboard-services">
                <div>
                  <span>WEB</span>
                  <strong>Development</strong>
                </div>

                <div>
                  <span>SEO</span>
                  <strong>Visibility</strong>
                </div>

                <div>
                  <span>ADS</span>
                  <strong>Campaigns</strong>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-one">
              <span>01</span>
              <strong>Strategy</strong>
              <small>Plan first. Build smart.</small>
            </div>

            <div className="floating-card floating-card-two">
              <span>✦</span>
              <strong>Creative</strong>
              <small>Design that communicates.</small>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <div className="section-label">
                A DIGITAL PARTNER
              </div>

              <h2>
                Build a stronger
                <span> online presence.</span>
              </h2>
            </div>

            <p>
              Your website and marketing should work together.
              We combine development, SEO, advertising and
              creative solutions to build a practical digital
              foundation for your business.
            </p>
          </div>

          <div className="intro-points">
            <div>
              <span>01</span>
              <strong>Modern websites</strong>
              <p>
                Responsive experiences designed for today's
                customers.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>Search visibility</strong>
              <p>
                SEO-friendly foundations that help search
                engines understand your website.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>Marketing support</strong>
              <p>
                Social, advertising and creative support under
                one digital direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">
              WHAT WE DO
            </div>

            <h2>
              Digital services built
              <span> for business.</span>
            </h2>

            <p>
              Choose the services you need or combine them into
              a custom digital growth plan.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
              >
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-arrow">
                  ↗
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <Link to="/services">
                  Explore Service
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="section-link">
            <Link to="/services">
              View All Services
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section portfolio-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <div className="section-label">
                SELECTED WORK
              </div>

              <h2>
                Work that shows
                <span> what we build.</span>
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="text-link"
            >
              View Full Portfolio
              <span>↗</span>
            </Link>
          </div>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <article
                className="portfolio-card"
                key={project.number}
              >
                <div className="portfolio-image">
                  <span className="portfolio-index">
                    {project.number}
                  </span>

                  <div className="portfolio-placeholder">
                    <span>✦</span>
                    <strong>
                      {project.title}
                    </strong>
                  </div>

                  <span className="portfolio-type">
                    {project.type}
                  </span>
                </div>

                <div className="portfolio-info">
                  <div>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <Link to="/portfolio">
                    ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="notice-box">
            <strong>Portfolio transparency</strong>

            <p>
              Projects are clearly identified as real projects
              or demos. No fabricated client results,
              testimonials or performance numbers are used.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <div className="section-label">
              HOW IT WORKS
            </div>

            <h2>
              Simple process.
              <span> Clear communication.</span>
            </h2>

            <p>
              We keep the project journey straightforward from
              the first conversation to launch and improvement.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <article
                className="process-card"
                key={item.number}
              >
                <span className="process-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="process-link">
            <Link to="/how-it-works">
              See Our Complete Process
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section home-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <div className="section-label">
                LET'S WORK TOGETHER
              </div>

              <h2>
                Ready to take your
                <span> business online?</span>
              </h2>

              <p>
                Tell us about your business and what you want
                to build. We'll start with a simple conversation.
              </p>
            </div>

            <Link
              to="/contact"
              className="button button-light"
            >
              Get Free Consultation
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

