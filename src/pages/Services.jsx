
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Services() {
  const services = [
    {
      number: "01",
      title: "Website Development",
      short: "Modern websites that turn visitors into enquiries.",
      text: "We create responsive, mobile-first business websites with clear structure, strong calls to action and a professional user experience.",
      tags: ["Responsive", "UI/UX", "SEO Ready"],
    },
    {
      number: "02",
      title: "SEO",
      short: "Build a stronger foundation for search visibility.",
      text: "We focus on search-friendly website structure, useful content, technical foundations and practical optimisation.",
      tags: ["On-Page", "Technical", "Content"],
    },
    {
      number: "03",
      title: "Social Media Marketing",
      short: "Keep your brand active, useful and consistent.",
      text: "We help businesses plan social content, creative direction and communication that keeps their audience connected with the brand.",
      tags: ["Content", "Creative", "Strategy"],
    },
    {
      number: "04",
      title: "Google Ads",
      short: "Reach people actively searching for your services.",
      text: "Campaign planning, ad structure and creative support for businesses using Google Ads as part of their digital strategy.",
      tags: ["Search Ads", "Campaigns", "Optimisation"],
    },
    {
      number: "05",
      title: "Meta Ads",
      short: "Create campaigns for Facebook and Instagram audiences.",
      text: "We help businesses plan Meta advertising campaigns with suitable creative concepts, audience direction and clear objectives.",
      tags: ["Facebook", "Instagram", "Creative"],
    },
    {
      number: "06",
      title: "Local SEO",
      short: "Make your local business easier to discover.",
      text: "Improve your local digital presence with useful business information, local search optimisation and a stronger online footprint.",
      tags: ["Local Search", "GBP", "Visibility"],
    },
    {
      number: "07",
      title: "Graphic Design",
      short: "Visuals that make your business look professional.",
      text: "Business creatives, social media graphics, promotional designs and visual assets aligned with your brand.",
      tags: ["Social", "Branding", "Promotional"],
    },
    {
      number: "08",
      title: "AI Creatives",
      short: "Explore new creative possibilities with AI.",
      text: "AI-assisted product visuals, campaign concepts, social creatives and visual storytelling ideas for modern brands.",
      tags: ["AI Visuals", "Concepts", "Campaigns"],
    },
    {
      number: "09",
      title: "WhatsApp Marketing",
      short: "Make customer communication easier.",
      text: "Use WhatsApp as a practical communication channel for enquiries, follow-ups and customer conversations.",
      tags: ["WhatsApp", "Leads", "Communication"],
    },
  ];

  return (
    <div className="inner-page">
      <SEO
        title="Digital Marketing Services"
        description="Explore AASHISH DIGITAL services including website development, SEO, social media marketing, Google Ads, Meta Ads, local SEO, graphic design, AI creatives and WhatsApp marketing."
        path="/services"
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="section-label">
              OUR SERVICES
            </div>

            <h1>
              Digital solutions
              <span> for modern businesses.</span>
            </h1>

            <p>
              From building your website to improving search
              visibility, social presence and advertising,
              AASHISH DIGITAL brings essential digital services
              together.
            </p>

            <div className="page-hero-actions">
              <Link
                to="/contact"
                className="button button-primary"
              >
                Discuss Your Project
                <span>↗</span>
              </Link>

              <Link
                to="/pricing"
                className="button button-secondary"
              >
                View Pricing
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="services-page-grid">
            {services.map((service) => (
              <article
                className="service-detail-card"
                key={service.number}
              >
                <div className="service-detail-top">
                  <span>
                    {service.number}
                  </span>

                  <span className="service-detail-arrow">
                    ↗
                  </span>
                </div>

                <h2>{service.title}</h2>

                <h3>{service.short}</h3>

                <p>{service.text}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to="/contact">
                  Get Started
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SOLUTION */}
      <section className="section">
        <div className="container">
          <div className="service-custom-box">
            <div>
              <div className="section-label">
                CUSTOM SOLUTION
              </div>

              <h2>
                Don't know which service
                <span> you need?</span>
              </h2>

              <p>
                That's okay. Tell us about your business,
                current situation and goals. We can discuss
                which digital services make sense for you.
              </p>
            </div>

            <Link
              to="/contact"
              className="button button-primary"
            >
              Talk About Your Business
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="inner-cta section">
        <div className="container">
          <div className="inner-cta-box">
            <div>
              <div className="section-label">
                START YOUR PROJECT
              </div>

              <h2>
                Let's build your
                <span> digital presence.</span>
              </h2>

              <p>
                Website, SEO, social media, advertising or
                creative work — start with a conversation.
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

export default Services;
