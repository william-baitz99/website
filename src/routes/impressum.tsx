import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Github, Linkedin, Youtube } from "lucide-react";
import "../william.css";

const LINKEDIN = "https://www.linkedin.com/in/william-baitz-06233b196/";
const GITHUB = "https://github.com/william-baitz99";
const YOUTUBE = "https://www.youtube.com/@william-baitz-ab-alchemie";
const EMAIL = "info@william-baitz.de";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – William Baitz" },
      {
        name: "description",
        content: "Impressum und rechtliche Angaben von William Baitz.",
      },
      { property: "og:title", content: "Impressum – William Baitz" },
      {
        property: "og:description",
        content: "Impressum und rechtliche Angaben von William Baitz.",
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
  component: Impressum,
});

function Impressum() {
  return (
    <div className="wb-page wb-legal-page">
      <header className="wb-header">
        <nav className="wb-nav wb-wrap" aria-label="Hauptnavigation">
          <Link className="wb-logo" to="/" aria-label="Zur Startseite">
            <span className="wb-logo-mark">wb</span>
            <span>William Baitz</span>
          </Link>
          <Link className="wb-back-link" to="/">
            <ArrowLeft aria-hidden="true" /> Zurück
          </Link>
        </nav>
      </header>

      <main className="wb-legal-main wb-wrap">
        <div className="wb-legal-header">
          <h1>Impressum</h1>
        </div>

        <div className="wb-legal-grid">
          <section className="wb-legal-card" aria-labelledby="impressum-owner">
            <h2 id="impressum-owner">Verantwortlich</h2>
            <p>
              <strong>William Baitz</strong>
              <br />
              Business Park 5557
              <br />
              Al Jazeera Al Hamra
            </p>
          </section>

          <section className="wb-legal-card" aria-labelledby="impressum-contact">
            <h2 id="impressum-contact">Kontakt</h2>
            <p>
              E-Mail: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <br />
              LinkedIn:{" "}
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <Linkedin aria-hidden="true" /> William Baitz
              </a>
              <br />
              GitHub:{" "}
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" /> william-baitz99
              </a>
              <br />
              YouTube:{" "}
              <a href={YOUTUBE} target="_blank" rel="noopener noreferrer">
                <Youtube aria-hidden="true" /> William Baitz
              </a>
            </p>
          </section>

          <section className="wb-legal-card wb-legal-full" aria-labelledby="impressum-note">
            <h2 id="impressum-note">Hinweis</h2>
            <p>
              Diese Website dient der beruflichen Selbstdarstellung. Die Angaben wurden nach bestem Wissen erstellt. Die Telefonnummer wird ergänzt, sobald sie feststeht.
            </p>
          </section>
        </div>
      </main>

      <footer className="wb-footer">
        <div className="wb-wrap">
          <div className="wb-footer-bottom">
            <span>© 2026 William Baitz</span>
            <div>
              <Link to="/">Startseite</Link>
              <Link to="/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
