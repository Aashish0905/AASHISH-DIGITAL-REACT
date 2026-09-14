import SEO from "../components/SEO";

const reasons = [
  {
    number: "01",
    title: "Business-First Strategy",
    text: "We focus on your business goals first, then choose the right website, marketing and advertising strategy.",
    tags: ["Strategy", "Planning"],
  },
  {
    number: "02",
    title: "Modern Websites",
    text: "Mobile-first, responsive and conversion-focused websites designed to give your business a professional online presence.",
    tags: ["React", "Responsive", "UI/UX"],
  },
  {
    number: "03",
    title: "SEO-Focused Growth",
    text: "We build websites and content with a strong technical and on-page SEO foundation from the beginning.",
    tags: ["Technical SEO", "Local SEO"],
  },
  {
    number: "04",
    title: "Creative Marketing",
    text: "Social media creatives, AI-assisted visuals and campaign content designed to make your brand more noticeable.",
    tags: ["Social Media", "AI Creatives"],
  },
  {
    number: "05",
    title: "Performance Marketing",
    text: "Google Ads and Meta Ads campaigns can be planned around your audience, offer, budget and business objectives.",
    tags: ["Google Ads", "Meta Ads"],
  },
  {
    number: "06",
    title: "Direct Communication",
    text: "Clear communication through WhatsApp and direct support so you can discuss your project without unnecessary complexity.",
    tags: ["WhatsApp", "Support"],
  },
];

const values = [
  "Clear communication",
  "Transparent pricing",
  "Mobile-first approach",
  "Practical solutions",
  "Fast project coordination",
  "Long-term growth mindset",
];

function WhyUs() {
  return (
    <>
      <SEO
        title="Why Choose AASHISH DIGITAL"
        description="Discover why businesses can choose AASHISH DIGITAL for website development, SEO, digital marketing, social media, paid advertising and AI creative solutions."
        path="/why-us"
      />

      <div className="inner-page why-page">
        <section className="page-hero">
          <div className="container page-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              WHY AASHISH DIGITAL
            </span>

            <h1>
              Digital solutions built
              <span> around your business.</span>
            </h1>

            <p>
              We combine websites, SEO, marketing, advertising and
              creative solutions to help businesses build a stronger
              digital presence.
            </p>

            <div className="page-hero-actions">
              <a
                href="/contact"
                className="button button-primary"
              >
                Start a Project
                <span>↗</span>
              </a>

              <a
                href="/portfolio"
                className="button button-secondary"
              >
                View Our Work
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section why-intro-section">
          <div className="container">
            <div className="split-heading">
              <div>
                <span className="section-label">
                  OUR APPROACH
                </span>

                <h2>
                  Simple process.
                  <br />
                  <span>Serious execution.</span>
                </h2>
              </div>

              <div className="intro-points">
                <p>
                  A good digital presence is more than just having
                  a website. Your website, search visibility,
                  social media, creatives and advertising should
                  work together.
                </p>

                <p>
                  Our approach is focused on creating practical
                  digital solutions that are easy to understand,
                  maintain and improve over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section why-reasons-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  WHAT YOU GET
                </span>

                <h2>
                  Built for businesses
                  <span> that want to grow.</span>
                </h2>
              </div>

              <p>
                From your first website to ongoing digital
                marketing, we focus on useful solutions instead
                of unnecessary complexity.
              </p>
            </div>

            <div className="services-grid why-reasons-grid">
              {reasons.map((reason) => (
                <article
                  className="service-card why-reason-card"
                  key={reason.number}
                >
                  <div className="service-number">
                    {reason.number}
                  </div>

                  <div className="service-card-content">
                    <h3>{reason.title}</h3>

                    <p>{reason.text}</p>

                    <div className="service-tags">
                      {reason.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <span className="service-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section values-section">
          <div className="container">
            <div className="notice-box why-values-box">
              <div>
                <span className="section-label">
                  OUR VALUES
                </span>

                <h2>
                  What matters when
                  <span> we work with you.</span>
                </h2>

                <p>
                  We believe good client relationships come from
                  clear communication, realistic expectations and
                  consistent execution.
                </p>
              </div>

              <div className="intro-points values-list">
                {values.map((value) => (
                  <div className="value-item" key={value}>
                    <span>✓</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section inner-cta">
          <div className="container">
            <div className="inner-cta-box">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                LET'S BUILD SOMETHING
              </span>

              <h2>
                Ready to improve your
                <span> digital presence?</span>
              </h2>

              <p>
                Tell us about your business, your current
                website or your marketing goals. We'll discuss
                the right next step.
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
                  Chat on WhatsApp
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

export default WhyUs;