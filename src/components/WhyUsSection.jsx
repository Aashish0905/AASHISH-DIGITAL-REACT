function WhyUsSection() {
  const reasons = [
    {
      icon: "⚡",
      number: "01",
      title: "Fast Delivery",
      description:
        "We focus on clear communication and fast execution so your project can go online without unnecessary delays.",
    },
    {
      icon: "📱",
      number: "02",
      title: "Mobile-First",
      description:
        "Your website is designed to look professional and work smoothly across phones, tablets and desktops.",
    },
    {
      icon: "🔍",
      number: "03",
      title: "SEO Focused",
      description:
        "We build with search visibility in mind so your business has a stronger foundation for Google growth.",
    },
    {
      icon: "💰",
      number: "04",
      title: "Affordable Pricing",
      description:
        "Professional digital solutions designed for startups, local businesses and growing brands.",
    },
    {
      icon: "📍",
      number: "05",
      title: "Local + Online Support",
      description:
        "Work with us locally in Chhatarpur or remotely from anywhere in India.",
    },
    {
      icon: "💬",
      number: "06",
      title: "Direct WhatsApp Communication",
      description:
        "Quick communication directly through WhatsApp whenever you need an update or have a question.",
    },
  ];

  return (
    <section className="section why-us-section">
      <div className="container">

        <div className="section-header">
          <div className="section-label">
            ✦ WHY AASHISH DIGITAL
          </div>

          <h2 className="section-title">
            Why Businesses
            <br />
            <span>Choose Us.</span>
          </h2>

          <p className="section-description">
            We combine creative design, practical strategy and
            digital marketing to help businesses build a stronger
            online presence.
          </p>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason) => (
            <div
              className="why-us-card"
              key={reason.number}
            >
              <div className="why-us-top">
                <div className="why-us-icon">
                  {reason.icon}
                </div>

                <span className="why-us-number">
                  {reason.number}
                </span>
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

              <div className="why-us-line"></div>
            </div>
          ))}
        </div>

        <div className="why-us-cta">
          <div>
            <span className="section-label">
              ✦ READY TO GROW?
            </span>

            <h3>
              Let's build something
              <span> amazing together.</span>
            </h3>
          </div>

          <a
            href="/contact"
            className="btn btn-primary"
          >
            Get Started
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default WhyUsSection;