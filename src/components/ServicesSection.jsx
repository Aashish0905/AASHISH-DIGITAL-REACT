function ServicesSection() {
  return (
    <section className="section services-section">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-label">
            ✦ WHAT WE DO
          </div>

          <h2 className="section-title">
            Digital Services That
            <br />
            <span>Grow Your Business.</span>
          </h2>

          <p className="section-description">
            Everything your business needs to build a strong
            online presence, reach more people and get more
            customers.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">

          {/* 01 */}
          <div className="card">
            <div className="service-icon">🌐</div>

            <h3>Website Development</h3>

            <p>
              Modern, fast and mobile-friendly websites
              designed to build trust and convert visitors
              into customers.
            </p>
          </div>

          {/* 02 */}
          <div className="card">
            <div className="service-icon">🔍</div>

            <h3>SEO</h3>

            <p>
              Improve your Google visibility and attract
              customers who are actively searching for
              your products or services.
            </p>
          </div>

          {/* 03 */}
          <div className="card">
            <div className="service-icon">📱</div>

            <h3>Social Media Marketing</h3>

            <p>
              Build a professional social media presence
              with engaging content, strategy and consistent
              brand communication.
            </p>
          </div>

          {/* 04 */}
          <div className="card">
            <div className="service-icon">🎯</div>

            <h3>Meta Ads</h3>

            <p>
              Reach the right customers on Facebook and
              Instagram with targeted advertising campaigns
              designed for results.
            </p>
          </div>

          {/* 05 */}
          <div className="card">
            <div className="service-icon">🚀</div>

            <h3>Google Ads</h3>

            <p>
              Generate high-intent leads through
              professionally managed Google advertising
              campaigns.
            </p>
          </div>

          {/* 06 */}
          <div className="card">
            <div className="service-icon">📍</div>

            <h3>Google Business Profile</h3>

            <p>
              Help local customers discover your business
              on Google Search and Google Maps with local
              SEO optimization.
            </p>
          </div>

          {/* 07 */}
          <div className="card">
            <div className="service-icon">🎨</div>

            <h3>Graphic Design</h3>

            <p>
              Create professional social media posts,
              promotional creatives and visual designs that
              make your brand stand out.
            </p>
          </div>

          {/* 08 */}
          <div className="card">
            <div className="service-icon">🤖</div>

            <h3>AI Creatives</h3>

            <p>
              Create modern AI-powered visuals, campaign
              concepts and creative content for your
              business.
            </p>
          </div>

          {/* 09 */}
          <div className="card">
            <div className="service-icon">💬</div>

            <h3>WhatsApp Marketing</h3>

            <p>
              Connect directly with customers and generate
              enquiries through WhatsApp communication and
              marketing campaigns.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "55px",
          }}
        >
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "20px",
            }}
          >
            Looking for a complete digital growth solution?
          </p>

          <a
            href="/services"
            className="btn btn-primary"
          >
            View All Services
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;