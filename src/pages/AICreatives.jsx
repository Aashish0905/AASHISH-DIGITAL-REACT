import SEO from "../components/SEO";

const creativeServices = [
  {
    number: "01",
    title: "AI Social Creatives",
    text: "Create scroll-stopping visual concepts for Instagram, Facebook and other social platforms.",
    tags: ["Social Media", "AI Design"],
  },
  {
    number: "02",
    title: "AI Ad Creatives",
    text: "Develop multiple creative concepts for paid advertising campaigns and different audience segments.",
    tags: ["Meta Ads", "Google Ads"],
  },
  {
    number: "03",
    title: "Product Visuals",
    text: "Turn product ideas, photos or descriptions into polished visual concepts for marketing.",
    tags: ["Products", "Branding"],
  },
  {
    number: "04",
    title: "Campaign Concepts",
    text: "Build creative directions around offers, launches, festivals, promotions and business campaigns.",
    tags: ["Campaigns", "Strategy"],
  },
  {
    number: "05",
    title: "Short Video Concepts",
    text: "Plan short-form video concepts, reels and visual storytelling ideas for digital platforms.",
    tags: ["Reels", "Video"],
  },
  {
    number: "06",
    title: "Brand Visual System",
    text: "Create consistent visual directions so your digital content feels connected across platforms.",
    tags: ["Branding", "Content"],
  },
];

const workflow = [
  {
    number: "01",
    title: "Brief",
    text: "We understand your business, product, audience and campaign objective.",
  },
  {
    number: "02",
    title: "Concept",
    text: "Creative directions, visual ideas and messaging are planned.",
  },
  {
    number: "03",
    title: "Create",
    text: "The selected concept is turned into polished digital creatives.",
  },
  {
    number: "04",
    title: "Refine",
    text: "Feedback is used to improve the final creative direction.",
  },
];

function AICreatives() {
  return (
    <>
      <SEO
        title="AI Creatives & AI Marketing"
        description="AASHISH DIGITAL creates AI-assisted social media creatives, ad visuals, product concepts, campaign ideas and short-form content for modern businesses."
        path="/ai-creatives"
      />

      <div className="inner-page ai-creatives-page">
        <section className="page-hero ai-page-hero">
          <div className="container page-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              AI CREATIVE STUDIO
            </span>

            <h1>
              Turn ideas into
              <span> powerful digital visuals.</span>
            </h1>

            <p>
              AI-assisted creative solutions for social media,
              advertising, product marketing, campaigns and
              modern brand communication.
            </p>

            <div className="page-hero-actions">
              <a
                href="/contact"
                className="button button-primary"
              >
                Discuss Your Idea
                <span>↗</span>
              </a>

              <a
                href="/portfolio"
                className="button button-secondary"
              >
                View Portfolio
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section ai-showcase-section">
          <div className="container">
            <div className="ai-showcase">
              <div className="ai-showcase-content">
                <span className="section-label">
                  CREATIVE + TECHNOLOGY
                </span>

                <h2>
                  Faster creative
                  <span> experimentation.</span>
                </h2>

                <p>
                  AI can help explore more visual directions
                  quickly. We combine those possibilities with
                  human creative thinking, brand context and
                  marketing objectives.
                </p>

                <div className="intro-points">
                  <div className="value-item">
                    <span>✓</span>
                    <p>Multiple creative directions</p>
                  </div>

                  <div className="value-item">
                    <span>✓</span>
                    <p>Platform-ready visual concepts</p>
                  </div>

                  <div className="value-item">
                    <span>✓</span>
                    <p>Brand-focused creative planning</p>
                  </div>
                </div>
              </div>

              <div className="ai-visual">
                <div className="ai-orb ai-orb-one" />
                <div className="ai-orb ai-orb-two" />

                <div className="ai-visual-card">
                  <div className="ai-card-top">
                    <span>AI CREATIVE</span>
                    <span>✦</span>
                  </div>

                  <div className="ai-card-main">
                    <span className="ai-small-text">
                      CAMPAIGN
                    </span>

                    <strong>
                      CREATE.
                      <br />
                      TEST.
                      <br />
                      IMPROVE.
                    </strong>
                  </div>

                  <div className="ai-card-bottom">
                    <span>Social</span>
                    <span>Ads</span>
                    <span>Brand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  WHAT WE CREATE
                </span>

                <h2>
                  Creative solutions for
                  <span> modern marketing.</span>
                </h2>
              </div>

              <p>
                From one social post to a complete campaign
                visual direction, creative work can be planned
                around your business objective.
              </p>
            </div>

            <div className="services-grid">
              {creativeServices.map((service) => (
                <article
                  className="service-card"
                  key={service.number}
                >
                  <div className="service-number">
                    {service.number}
                  </div>

                  <div className="service-card-content">
                    <h3>{service.title}</h3>

                    <p>{service.text}</p>

                    <div className="service-tags">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <span className="service-arrow">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section ai-workflow-section">
          <div className="container">
            <div className="split-heading">
              <div>
                <span className="section-label">
                  OUR CREATIVE WORKFLOW
                </span>

                <h2>
                  From brief to
                  <span> final visual.</span>
                </h2>
              </div>

              <div className="intro-points">
                <p>
                  Good AI creative work still starts with a good
                  brief. We first understand what the business
                  wants to communicate.
                </p>

                <p>
                  Then we explore, create and refine the visual
                  direction for the intended platform.
                </p>
              </div>
            </div>

            <div className="process-grid">
              {workflow.map((step) => (
                <div
                  className="process-card"
                  key={step.number}
                >
                  <span className="process-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section ai-ideas-section">
          <div className="container">
            <div className="notice-box">
              <div>
                <span className="section-label">
                  HAVE AN IDEA?
                </span>

                <h2>
                  Send us your idea.
                  <span> We'll explore it.</span>
                </h2>

                <p>
                  You can share a product photo, rough concept,
                  reference image, campaign idea or simply tell
                  us what you want to promote.
                </p>
              </div>

              <a
                href="https://wa.me/919074755317"
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Share on WhatsApp
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section inner-cta">
          <div className="container">
            <div className="inner-cta-box">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                AI + DIGITAL MARKETING
              </span>

              <h2>
                Let's create something
                <span> people remember.</span>
              </h2>

              <p>
                Tell us about your product, business or upcoming
                campaign and let's plan the creative direction.
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

export default AICreatives;