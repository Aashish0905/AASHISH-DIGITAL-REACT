import SEO from "../components/SEO";

const plans = [
  {
    number: "01",
    name: "SEO",
    price: "₹2,999",
    period: "/ month",
    description:
      "A practical SEO plan for businesses that want to build a stronger search presence.",
    features: [
      "Website SEO review",
      "On-page SEO",
      "Keyword planning",
      "Technical SEO basics",
      "Content recommendations",
      "Monthly progress review",
    ],
  },
  {
    number: "02",
    name: "Social Media",
    price: "₹2,499",
    period: "/ month",
    description:
      "Social media support for businesses that want consistent and professional online communication.",
    features: [
      "Social media planning",
      "Creative direction",
      "Post content support",
      "Content ideas",
      "Profile optimisation",
      "Monthly planning",
    ],
  },
  {
    number: "03",
    name: "Google Ads",
    price: "₹3,999",
    period: "/ month",
    description:
      "Campaign management focused on reaching relevant audiences through Google advertising.",
    features: [
      "Campaign planning",
      "Keyword research",
      "Ad setup",
      "Audience targeting",
      "Campaign monitoring",
      "Performance review",
    ],
  },
  {
    number: "04",
    name: "Website",
    price: "₹5,999",
    period: " starting",
    description:
      "A responsive business website designed to present your services professionally online.",
    features: [
      "Responsive design",
      "Business pages",
      "Mobile optimisation",
      "Contact integration",
      "Basic SEO setup",
      "Deployment support",
    ],
    featured: true,
  },
  {
    number: "05",
    name: "Local Business",
    price: "₹1,999",
    period: " starting",
    description:
      "Essential digital setup for local businesses that want to improve their online presence.",
    features: [
      "Local SEO basics",
      "Business profile guidance",
      "Contact optimisation",
      "Local keyword planning",
      "Online presence review",
      "Setup guidance",
    ],
  },
  {
    number: "06",
    name: "Complete Growth",
    price: "₹9,999",
    period: " starting",
    description:
      "A combined digital package for businesses looking for website and marketing support.",
    features: [
      "Website development",
      "SEO foundation",
      "Social media support",
      "Marketing strategy",
      "Creative support",
      "Digital growth planning",
    ],
  },
];

const faqs = [
  {
    question: "Are these fixed prices?",
    answer:
      "These are starting package prices. The final cost can change depending on project scope, number of pages, features, content, advertising requirements and other business needs.",
  },
  {
    question: "Can I request a custom package?",
    answer:
      "Yes. You can combine website development, SEO, social media, advertising and creative services according to your business requirements.",
  },
  {
    question: "Is advertising budget included?",
    answer:
      "No. Google Ads or Meta Ads management fees and your advertising platform budget are separate unless specifically agreed in the project proposal.",
  },
  {
    question: "Does SEO guarantee first position on Google?",
    answer:
      "No responsible agency can guarantee a specific Google ranking position. SEO is an ongoing process affected by competition, search demand, website quality, content and many other factors.",
  },
];

function Pricing() {
  return (
    <>
      <SEO
        title="Digital Marketing Pricing"
        description="Explore AASHISH DIGITAL starting prices for SEO, social media marketing, Google Ads, website development, local business setup and complete digital growth."
        path="/pricing"
      />

      <div className="inner-page pricing-page">
        <section className="page-hero">
          <div className="container page-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              SIMPLE & TRANSPARENT
            </span>

            <h1>
              Digital marketing
              <span> that fits your budget.</span>
            </h1>

            <p>
              Start with the service you need today and build a
              bigger digital strategy as your business grows.
            </p>

            <div className="page-hero-actions">
              <a
                href="/contact"
                className="button button-primary"
              >
                Get Custom Quote
                <span>↗</span>
              </a>

              <a
                href="/services"
                className="button button-secondary"
              >
                View Services
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section pricing-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  STARTING PLANS
                </span>

                <h2>
                  Choose what your
                  <span> business needs.</span>
                </h2>
              </div>

              <p>
                Packages can be customised according to your
                business goals, requirements and project scope.
              </p>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`pricing-card ${
                    plan.featured ? "featured" : ""
                  }`}
                  key={plan.number}
                >
                  {plan.featured && (
                    <span className="pricing-badge">
                      POPULAR
                    </span>
                  )}

                  <div className="pricing-top">
                    <span className="service-number">
                      {plan.number}
                    </span>

                    <span className="pricing-name">
                      {plan.name}
                    </span>
                  </div>

                  <div className="pricing-price">
                    <strong>{plan.price}</strong>

                    <span>{plan.period}</span>
                  </div>

                  <p className="pricing-description">
                    {plan.description}
                  </p>

                  <div className="pricing-divider" />

                  <ul className="pricing-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={
                      plan.featured
                        ? "button button-primary pricing-button"
                        : "button button-secondary pricing-button"
                    }
                  >
                    Discuss This Plan
                    <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section custom-pricing-section">
          <div className="container">
            <div className="notice-box">
              <div>
                <span className="section-label">
                  CUSTOM SOLUTIONS
                </span>

                <h2>
                  Need something
                  <span> different?</span>
                </h2>

                <p>
                  Tell us what you need. We can create a custom
                  combination of website development, SEO,
                  social media, paid advertising and creative
                  services around your business.
                </p>
              </div>

              <a
                href="/contact"
                className="button button-primary"
              >
                Request Custom Quote
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section pricing-faq-section">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-label">
                PRICING FAQ
              </span>

              <h2>
                Questions before
                <span> getting started?</span>
              </h2>
            </div>

            <div className="faq-list pricing-faq-list">
              {faqs.map((faq, index) => (
                <details
                  className="faq-item"
                  key={faq.question}
                  open={index === 0}
                >
                  <summary>
                    <span>{faq.question}</span>
                    <strong>+</strong>
                  </summary>

                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section inner-cta">
          <div className="container">
            <div className="inner-cta-box">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                LET'S DISCUSS YOUR BUSINESS
              </span>

              <h2>
                Not sure which plan
                <span> is right for you?</span>
              </h2>

              <p>
                Send us your business details and requirements.
                We'll help you identify the right starting point.
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

export default Pricing;