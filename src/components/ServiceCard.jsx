function ServiceCard({
  icon,
  title,
  description,
  features = [],
  price,
}) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <div className="service-icon">
          {icon}
        </div>

        <span className="service-arrow">↗</span>
      </div>

      <h3 className="service-title">{title}</h3>

      <p className="service-description">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>
              <span>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {price && (
        <div className="service-price">
          Starting from <strong>{price}</strong>
        </div>
      )}

      <a
        href="/contact"
        className="service-button"
      >
        Get Started
        <span>↗</span>
      </a>
    </article>
  );
}

export default ServiceCard;