import SEO from "../components/SEO";

const focusAreas = [
  {
    number: "01",
    title: "Web Development",
    text: "Modern, responsive websites designed around your business, customers and online goals.",
  },
  {
    number: "02",
    title: "Digital Marketing",
    text: "SEO, social media and paid advertising strategies that connect your business with digital audiences.",
  },
  {
    number: "03",
    title: "Creative Solutions",
    text: "Graphic design, AI-assisted creatives and campaign concepts for stronger digital communication.",
  },
];

const principles = [
  "Understand the business before building",
  "Keep communication simple",
  "Build mobile-first experiences",
  "Use SEO-friendly foundations",
  "Keep pricing and scope clear",
  "Improve the digital presence over time",
];

function About() {
  return (
    <>
      <SEO
        title="About AASHISH DIGITAL"
        description="Learn about AASHISH DIGITAL and its approach to website development, SEO, social media marketing, paid advertising and AI creative solutions."
        path="/about"
      />

      <div className="inner-page about-page">
        <section className="page-hero">
          <div className="container page-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              ABOUT AASHISH DIGITAL
            </span>

            <h1>
              Building digital
              <span> experiences for businesses.</span>
            </h1>

            <p>
              AASHISH DIGITAL focuses on websites, SEO, digital
              marketing, advertising and creative solutions that
              help businesses build a stronger online presence.
            </p>

            <div className="page-hero-actions">
              <a
                href="/contact"
                className="button button-primary"
              >
                Work With Us
                <span>↗</span>
              </a>

              <a
                href="/portfolio"
                className="button button-secondary"
              >
                See Our Work
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section about-story-section">
          <div className="container">
            <div className="about-story">
              <div className="about-story-main">
                <span className="section-label">
                  OUR STORY
                </span>

                <h2>
                  Digital presence should
                  <span> work for the business.</span>
                </h2>

                <p>
                  A website should do more than simply look good.
                  It should communicate what a business offers,
                  make information easy to find and give customers
                  a clear next step.
                </p>

                <p>
                  AASHISH DIGITAL brings website development,
                  SEO, marketing, advertising and creative work
                  together so businesses can build their digital
                  presence in a more organised way.
                </p>

                <p>
                  The goal is simple: understand the business,
                  create the right digital experience and keep
                  improving it as the business grows.
                </p>
              </div>

              <div className="about-story-visual">
                <div className="about-brand-card">
                  <span className="about-brand-symbol">
                    ✦
                  </span>

                  <strong>AASHISH</strong>

                  <strong>DIGITAL</strong>

                  <span className="about-brand-line" />

                  <small>
                    Websites • SEO • Marketing
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-focus-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  WHAT WE FOCUS ON
                </span>

                <h2>
                  Three areas.
                  <span> One digital direction.</span>
                </h2>
              </div>

              <p>
                Our services are designed to work independently
                or together depending on what your business
                actually needs.
              </p>
            </div>

            <div className="services-grid">
              {focusAreas.map((area) => (
                <article
                  className="service-card"
                  key={area.number}
                >
                  <div className="service-number">
                    {area.number}
                  </div>

                  <div className="service-card-content">
                    <h3>{area.title}</h3>

                    <p>{area.text}</p>
                  </div>

                  <span className="service-arrow">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-principles-section">
          <div className="container">
            <div className="notice-box about-principles-box">
              <div>
                <span className="section-label">
                  OUR PRINCIPLES
                </span>

                <h2>
                  How we approach
                  <span> digital projects.</span>
                </h2>

                <p>
                  Every business is different. That's why we
                  prefer understanding the actual requirement
                  before recommending a solution.
                </p>
              </div>

              <div className="intro-points">
                {principles.map((principle) => (
                  <div
                    className="value-item"
                    key={principle}
                  >
                    <span>✓</span>
                    <p>{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section about-services-section">
          <div className="container">
            <div className="split-heading">
              <div>
                <span className="section-label">
                  DIGITAL SOLUTIONS
                </span>

                <h2>
                  From one website
                  <span> to a complete strategy.</span>
                </h2>
              </div>

              <div className="intro-points">
                <p>
                  Some businesses need only a website. Others
                  need SEO, social media, advertising or creative
                  support.
                </p>

                <p>
                  We can start with one requirement and expand
                  the digital strategy when it makes sense for
                  the business.
                </p>

                <a
                  href="/services"
                  className="section-link"
                >
                  Explore all services
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-contact-section">
          <div className="container">
            <div className="about-contact-card">
              <div>
                <span className="section-label">
                  LET'S CONNECT
                </span>

                <h2>
                  Have a business
                  <span> you want to grow online?</span>
                </h2>

                <p>
                  Tell us about your business, your current
                  website or your digital marketing requirement.
                </p>
              </div>

              <div className="about-contact-actions">
                <a
                  href="mailto:aashishraikwar9593@gmail.com"
                  className="button button-primary"
                >
                  Send an Email
                  <span>↗</span>
                </a>

                <a
                  href="https://wa.me/919074755317"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  WhatsApp
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section inner-cta">
          <div className="container">
            <div className="inner-cta-box">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                AASHISH DIGITAL
              </span>

              <h2>
                Let's build your
                <span> digital presence.</span>
              </h2>

              <p>
                Start with a conversation and let's understand
                what your business actually needs.
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
                  href="/pricing"
                  className="button button-secondary"
                >
                  View Pricing
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;