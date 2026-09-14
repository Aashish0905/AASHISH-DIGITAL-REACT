import SEO from "../components/SEO";

const steps = [
  {
    number: "01",
    title: "Discover",
    short: "Understand your business",
    text: "We start by understanding your business, services, target customers, current online presence and what you want to achieve.",
    points: [
      "Business requirements",
      "Target audience",
      "Current online presence",
      "Goals & priorities",
    ],
  },
  {
    number: "02",
    title: "Plan",
    short: "Create the right strategy",
    text: "We turn the information into a practical project plan covering structure, content, design, technology and marketing requirements.",
    points: [
      "Project structure",
      "Content planning",
      "Design direction",
      "Digital strategy",
    ],
  },
  {
    number: "03",
    title: "Build",
    short: "Create the experience",
    text: "The website, creatives or marketing assets are developed with a focus on usability, responsive design and your business identity.",
    points: [
      "Responsive development",
      "UI/UX implementation",
      "Creative production",
      "SEO foundation",
    ],
  },
  {
    number: "04",
    title: "Launch",
    short: "Go live with confidence",
    text: "Before launch, we check the important parts of the project and prepare the final website or campaign assets for use.",
    points: [
      "Responsive testing",
      "Basic technical checks",
      "Final content review",
      "Deployment support",
    ],
  },
  {
    number: "05",
    title: "Improve",
    short: "Keep moving forward",
    text: "Digital growth is ongoing. After launch, we can continue improving the website, content, SEO, creatives or campaigns.",
    points: [
      "Performance review",
      "Content improvements",
      "SEO improvements",
      "Campaign optimisation",
    ],
  },
];

function HowItWorks() {
  return (
    <>
      <SEO
        title="How It Works"
        description="Learn how AASHISH DIGITAL works on website development, SEO, social media, advertising and AI creative projects from discovery to launch and ongoing improvement."
        path="/how-it-works"
      />

      <div className="inner-page how-page">
        <section className="page-hero">
          <div className="container page-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              HOW IT WORKS
            </span>

            <h1>
              From your idea
              <span> to digital execution.</span>
            </h1>

            <p>
              A simple, transparent workflow designed to keep
              your project organised from the first conversation
              to launch and beyond.
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
                href="/services"
                className="button button-secondary"
              >
                Explore Services
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section process-detail-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  OUR PROCESS
                </span>

                <h2>
                  Five simple stages.
                  <span> One clear direction.</span>
                </h2>
              </div>

              <p>
                Every project can be different, but this basic
                workflow helps keep communication, planning and
                execution clear.
              </p>
            </div>

            <div className="process-detail-list">
              {steps.map((step) => (
                <article
                  className="process-detail-card"
                  key={step.number}
                >
                  <div className="process-detail-number">
                    {step.number}
                  </div>

                  <div className="process-detail-main">
                    <span className="section-label">
                      STAGE {step.number}
                    </span>

                    <h3>{step.title}</h3>

                    <strong>{step.short}</strong>

                    <p>{step.text}</p>
                  </div>

                  <div className="process-detail-points">
                    {step.points.map((point) => (
                      <div
                        className="value-item"
                        key={point}
                      >
                        <span>✓</span>
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section communication-section">
          <div className="container">
            <div className="split-heading">
              <div>
                <span className="section-label">
                  COMMUNICATION
                </span>

                <h2>
                  Stay connected
                  <span> throughout the project.</span>
                </h2>
              </div>

              <div className="intro-points">
                <p>
                  We keep project communication simple. You can
                  discuss requirements, feedback and updates
                  directly with us.
                </p>

                <p>
                  WhatsApp can be used for quick communication,
                  while larger project details can be organised
                  clearly before development begins.
                </p>
              </div>
            </div>

            <div className="process-grid communication-grid">
              <div className="process-card">
                <span className="process-number">
                  01
                </span>

                <h3>Discuss</h3>

                <p>
                  Share your business requirements and ideas.
                </p>
              </div>

              <div className="process-card">
                <span className="process-number">
                  02
                </span>

                <h3>Confirm</h3>

                <p>
                  Finalise scope, requirements and project
                  direction.
                </p>
              </div>

              <div className="process-card">
                <span className="process-number">
                  03
                </span>

                <h3>Review</h3>

                <p>
                  Review project progress and provide feedback.
                </p>
              </div>

              <div className="process-card">
                <span className="process-number">
                  04
                </span>

                <h3>Launch</h3>

                <p>
                  Complete final checks and move the project
                  forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section requirements-section">
          <div className="container">
            <div className="notice-box">
              <div>
                <span className="section-label">
                  BEFORE WE START
                </span>

                <h2>
                  What should you
                  <span> prepare?</span>
                </h2>

                <p>
                  Don't worry if you don't have everything ready.
                  We can help you identify what is needed before
                  the project begins.
                </p>
              </div>

              <div className="intro-points">
                <div className="value-item">
                  <span>✓</span>
                  <p>Business / brand name</p>
                </div>

                <div className="value-item">
                  <span>✓</span>
                  <p>Services or products</p>
                </div>

                <div className="value-item">
                  <span>✓</span>
                  <p>Logo and brand assets if available</p>
                </div>

                <div className="value-item">
                  <span>✓</span>
                  <p>Website or marketing requirements</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section inner-cta">
          <div className="container">
            <div className="inner-cta-box">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                READY WHEN YOU ARE
              </span>

              <h2>
                Have a project
                <span> in mind?</span>
              </h2>

              <p>
                Start with a simple conversation. Tell us about
                your business and what you want to build.
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

export default HowItWorks;