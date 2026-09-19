import { Link, createFileRoute } from "@tanstack/react-router";
import { Clock3, Github, Linkedin, Mail } from "lucide-react";
import "../william.css";

const portraitPhoto = { url: "/william-baitz-portrait.webp" };

const LINKEDIN = "https://www.linkedin.com/in/william-baitz-06233b196/";
const GITHUB = "https://github.com/william-baitz99";
const EMAIL = "info@william-baitz.de";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "William Baitz – Freelancer für E-Commerce" },
      {
        name: "description",
        content:
          "William Baitz ist Freelancer für SEO, GEO, Conversion-Optimierung und Shopify-Entwicklung.",
      },
      { property: "og:title", content: "William Baitz – Freelancer für E-Commerce" },
      {
        property: "og:description",
        content:
          "Berufliches Profil und Tätigkeitsfelder von William Baitz.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="wb-page">
      <header className="wb-header">
        <nav className="wb-nav wb-wrap" aria-label="Hauptnavigation">
          <a className="wb-logo" href="#start" aria-label="Zur Startseite">
            <span className="wb-logo-mark">wb</span>
            <span>William Baitz</span>
          </a>
          <Link className="wb-nav-cta" to="/kontakt">
            Kontakt
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>

      <main className="wb-bento wb-wrap" id="start">
        <div className="wb-bento-grid">
          <section className="wb-bento-card wb-bento-intro">
            <div className="wb-eyebrow">Freelancer · E-Commerce</div>
            <h1>William Baitz</h1>
            <p>Freelancer für CRO & Shopify-Entwicklung + Projektmanagement für SEO/GEO</p>
            <div className="wb-intro-edge">
              <span>Selbstständig tätig</span>
              <span>Direkter Ansprechpartner</span>
            </div>
            <span className="wb-intro-symbol" aria-hidden="true">
              W
            </span>
          </section>

          <aside className="wb-bento-card wb-bento-profile" aria-label="Persönliche Vorstellung von William Baitz">
            <img className="wb-portrait-photo" src={portraitPhoto.url} alt="William Baitz" width={768} height={1024} />
            <div className="wb-profile-name-box">William Baitz</div>
          </aside>

          <section className="wb-bento-stats" aria-label="Erfahrung und Projekte">
            <div className="wb-stats-intro">
              <div className="wb-eyebrow">Leistungen</div>
              <p>CRO, Shopify, SEO &amp; GEO</p>
            </div>
            <div className="wb-stat-card">
              <strong>7</strong>
              <span>Jahre Erfahrung</span>
            </div>
            <div className="wb-stat-card">
              <strong>125</strong>
              <span>Projekte betreut</span>
            </div>
            <div className="wb-stat-card">
              <strong>1</strong>
              <span>eigener Onlineshop</span>
            </div>
          </section>

          <Link className="wb-bento-card wb-bento-service wb-service-cro" id="leistungen" to="/conversion-rate-optimierung">
            <div className="wb-eyebrow">01 · Leistung</div>
            <span className="wb-card-arrow">↗</span>
            <h2>Conversion Rate Optimierung</h2>
            <p>Analyse von Produktseite, Warenkorb und Checkout.</p>
            <img
              className="wb-card-illustration"
              src="/assets/cro-visual.svg"
              alt="Abstrakte Visualisierung einer steigenden Conversion Rate"
            />
          </Link>

          <Link className="wb-bento-card wb-bento-service wb-service-shopify" to="/shopify-entwicklung">
            <div className="wb-eyebrow">02 · Leistung</div>
            <span className="wb-card-arrow">↗</span>
            <h2>Shopify Entwicklung</h2>
            <p>Theme-Anpassungen und technische Umsetzung.</p>
            <img
              className="wb-card-illustration wb-shopify-logo"
              src="https://cdn.simpleicons.org/shopify/F4F0E8"
              alt="Shopify Logo"
            />
          </Link>

          <a className="wb-bento-card wb-bento-service wb-service-wolf" href="https://wolf-of-seo.de/" target="_blank" rel="noopener noreferrer">
            <div className="wb-eyebrow">03 · Rolle</div>
            <span className="wb-card-arrow">↗</span>
            <h2>Wolf of SEO</h2>
            <p>Meine Tätigkeit im SEO- und GEO-Projektmanagement.</p>
            <img
              className="wb-card-illustration"
              src="/assets/seo-geo-visual.svg"
              alt="Abstrakte Visualisierung für Suchmaschinen und globale Sichtbarkeit"
            />
          </a>

          <section className="wb-bento-card wb-bento-shop" id="shop">
            <div className="wb-eyebrow">Eigener Online Shop</div>
            <h2>
              E-Commerce aus Betreiber<em>perspektive.</em>
            </h2>
            <p>Zusätzlich zu meiner Arbeit als Freelancer betreibe ich einen eigenen Shop für Babykleidung.</p>
            <img
              className="wb-card-illustration wb-shop-illustration"
              src="/assets/baby-clothes-visual.svg"
              alt="Illustration eines Babybodys"
            />
          </section>

          <section className="wb-bento-card wb-bento-about" id="ueber-mich">
            <div className="wb-eyebrow">Über mich</div>
            <h2>Stationen</h2>
            <ol className="wb-timeline">
              <li>
                <span className="wb-timeline-dot" aria-hidden="true" />
                <div>
                  <strong>Wolf of SEO</strong>
                  <span>Seit 7 Jahren Projektmanager</span>
                </div>
              </li>
              <li>
                <span className="wb-timeline-dot" aria-hidden="true" />
                <div>
                  <strong>AB Alchemie</strong>
                  <span>CRO-Agentur – zahlreiche Projekte betreut</span>
                </div>
              </li>
              <li>
                <span className="wb-timeline-dot" aria-hidden="true" />
                <div>
                  <strong>Bachelor of Science</strong>
                  <span>Volkswirtschaftslehre</span>
                </div>
              </li>
              <li>
                <span className="wb-timeline-dot" aria-hidden="true" />
                <div>
                  <strong>Thaiboxen</strong>
                  <span>Privates Hobby</span>
                </div>
              </li>
            </ol>
          </section>

          <Link className="wb-bento-card wb-bento-analysis" to="/kontakt" aria-label="Shop-Check per Loom – Ablauf und Kontakt">
            <div className="wb-eyebrow">Ersteinschätzung</div>
            <h2>Shop-Check per Loom</h2>
            <p>Auf Wunsch gebe ich in einem kurzen Loom-Video erste Hinweise zu CRO und SEO.</p>
            <span className="wb-analysis-link">Ablauf und Kontakt ↗</span>
            <span className="wb-analysis-mark" aria-hidden="true">
              ↗
            </span>
          </Link>

          <section className="wb-bento-card wb-bento-direct" aria-labelledby="direct-contact-heading">
            <div className="wb-eyebrow">Direkter Kontakt</div>
            <h2 id="direct-contact-heading">Kontakt und Projektanfragen.</h2>
            <div className="wb-home-contact-list">
              <a href={`mailto:${EMAIL}`}><Mail aria-hidden="true" /><span><small>E-Mail</small>{EMAIL}</span></a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" /><span><small>LinkedIn</small>William Baitz</span></a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /><span><small>GitHub</small>william-baitz99</span></a>
              <a className="is-placeholder" aria-disabled="true"><Clock3 aria-hidden="true" /><span><small>Calendly</small>Noch einzutragen</span></a>
            </div>
          </section>

        </div>
      </main>

      <footer className="wb-footer">
        <div className="wb-wrap">
          <div className="wb-footer-bottom">
            <span>© 2026 William Baitz</span>
            <div>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <Linkedin aria-hidden="true" /> LinkedIn
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" /> GitHub
              </a>
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
