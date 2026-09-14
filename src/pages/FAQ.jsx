import { useState } from "react";
import { Link } from "react-router-dom";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Website banne mein kitna time lagta hai?",
      answer:
        "Website ka time project ke size, pages, content, features aur requirements par depend karta hai. Simple business websites comparatively jaldi complete ho sakti hain, jabki larger projects ko zyada time lag sakta hai.",
    },
    {
      question: "Domain aur hosting kaun provide karega?",
      answer:
        "Aap apna domain aur hosting khud purchase kar sakte hain, ya setup process mein guidance le sakte hain. Existing domain aur hosting ho to uske saath bhi website setup ki ja sakti hai.",
    },
    {
      question: "Kya website mobile par properly chalegi?",
      answer:
        "Haan. Websites ko responsive aur mobile-first approach ke saath design kiya jayega, taaki desktop, tablet aur mobile devices par experience consistent rahe.",
    },
    {
      question: "SEO mein result kitne time mein aata hai?",
      answer:
        "SEO ka result fixed timeline mein guarantee nahi kiya ja sakta. Competition, website condition, content, technical SEO, authority aur industry jaise factors par progress depend karti hai.",
    },
    {
      question: "Kya Google par first rank guarantee hai?",
      answer:
        "Nahi. Koi bhi genuine SEO service Google ki first position guarantee nahi kar sakti. Hum strong technical, on-page, content aur local SEO foundation par focus karte hain.",
    },
    {
      question: "Meta Ads ke liye kitna budget chahiye?",
      answer:
        "Ad budget business, target audience, location, competition aur campaign objective par depend karta hai. Service fee aur advertising budget ko alag samajhna important hai.",
    },
    {
      question: "Kya WhatsApp par directly baat kar sakte hain?",
      answer:
        "Haan. Project discussion aur basic communication ke liye WhatsApp available hai. Aap apni requirement directly share kar sakte hain.",
    },
    {
      question: "Kya custom package ban sakta hai?",
      answer:
        "Haan. Listed packages starting options hain. Agar aapko multiple services combine karni hain ya specific requirements hain, to custom plan discuss kiya ja sakta hai.",
    },
    {
      question: "Kya existing website ko improve kar sakte hain?",
      answer:
        "Haan. Existing website ko review karke design, responsiveness, content structure, SEO foundation aur user experience mein required improvements identify kiye ja sakte hain.",
    },
    {
      question: "Project start karne ke liye kya chahiye?",
      answer:
        "Sabse pehle business details, requirements aur goals discuss kiye jaate hain. Uske baad project scope, required content, assets aur next steps decide kiye jaate hain.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="inner-page">

      {/* HERO */}

      <section className="page-hero faq-page-hero">

        <div className="container">

          <div className="page-hero-content">

            <div className="section-label">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h1>
              Questions?
              <span>We've got answers.</span>
            </h1>

            <p>
              Find answers to common questions about websites,
              SEO, advertising, digital marketing and working
              with AASHISH DIGITAL.
            </p>

            <div className="page-hero-actions">

              <Link
                to="/contact"
                className="button button-primary"
              >
                Ask Your Question
                <span>↗</span>
              </Link>

              <Link
                to="/services"
                className="button button-secondary"
              >
                Explore Services
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* FAQ */}

      <section className="faq-section section">

        <div className="container">

          <div className="faq-layout">

            <div className="faq-intro">

              <div className="section-label">
                HAVE A QUESTION?
              </div>

              <h2>
                Everything you need
                <span>to know before starting.</span>
              </h2>

              <p>
                Still can't find the answer? Send your question
                directly and we'll discuss it with you.
              </p>

              <a
                href="https://wa.me/919074755317"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Ask on WhatsApp
                <span>↗</span>
              </a>

            </div>


            <div className="faq-list">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    className={`faq-item ${
                      isOpen ? "open" : ""
                    }`}
                    key={faq.question}
                  >

                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >

                      <span className="faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="faq-question-text">
                        {faq.question}
                      </span>

                      <span className="faq-icon">
                        {isOpen ? "−" : "+"}
                      </span>

                    </button>


                    <div
                      className="faq-answer"
                      aria-hidden={!isOpen}
                    >

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* QUICK LINKS */}

      <section className="faq-links-section section">

        <div className="container">

          <div className="faq-links-box">

            <div>

              <div className="section-label">
                STILL EXPLORING?
              </div>

              <h2>
                Find the right
                <span>place to start.</span>
              </h2>

            </div>


            <div className="faq-links">

              <Link to="/services">
                <span>Services</span>
                <span>↗</span>
              </Link>

              <Link to="/pricing">
                <span>Pricing</span>
                <span>↗</span>
              </Link>

              <Link to="/portfolio">
                <span>Portfolio</span>
                <span>↗</span>
              </Link>

              <Link to="/how-it-works">
                <span>How It Works</span>
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="inner-cta section">

        <div className="container">

          <div className="inner-cta-box">

            <div>

              <div className="section-label">
                HAVE MORE QUESTIONS?
              </div>

              <h2>
                Let's talk about
                <span>your business.</span>
              </h2>

              <p>
                You don't need to figure everything out before
                contacting us. Start with a simple conversation.
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

export default FAQ;