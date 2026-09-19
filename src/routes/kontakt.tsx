import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Clock3, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../william.css";

const portraitPhoto = { url: "/william-baitz-portrait.webp" };

const LINKEDIN = "https://www.linkedin.com/in/william-baitz-06233b196/";
const GITHUB = "https://github.com/william-baitz99";
const EMAIL = "info@william-baitz.de";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – William Baitz" },
      {
        name: "description",
        content: "Kontakt zu William Baitz für Anfragen zu SEO, GEO, Conversion-Optimierung und Shopify-Entwicklung.",
      },
      { property: "og:title", content: "Kontakt – William Baitz" },
      {
        property: "og:description",
        content: "Projektanfragen und direkter Kontakt zu William Baitz.",
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
  component: Kontakt,
});

function Kontakt() {
  return (
    <div className="wb-page wb-contact-page">
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

      <main className="wb-contact-main wb-wrap">
        <section className="wb-contact-top" aria-label="Kontakt">
          <div className="wb-contact-top-copy">
            <div className="wb-eyebrow">Kontakt</div>
            <h1>
              Anfrage zu einem <em>E-Commerce-Projekt.</em>
            </h1>
          </div>
          <ul className="wb-diagnosis-facts" aria-label="Mögliche Themen">
            <li><Clock3 aria-hidden="true" /><span>Loom auf Wunsch</span></li>
            <li><Check aria-hidden="true" /><span>CRO, SEO &amp; Shopify</span></li>
            <li><Check aria-hidden="true" /><span>Projektanfrage</span></li>
          </ul>
        </section>

        <section className="wb-contact-content" aria-labelledby="diagnose-form-heading">
          <div className="wb-diagnosis-form-wrap">
            <div className="wb-form-heading">
              <img
                className="wb-form-avatar"
                src={portraitPhoto.url}
                alt="William Baitz"
                width={96}
                height={96}
              />
              <div>
                <div className="wb-eyebrow">Anfrage</div>
                <h2 id="diagnose-form-heading">Worum geht es?</h2>
              </div>
            </div>
            <form className="wb-diagnosis-form" onSubmit={(event) => event.preventDefault()}>
              <div className="wb-field-row">
                <label>
                  Dein Name
                  <input name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Vor- und Nachname" />
                </label>
                <label>
                  Deine E-Mail
                  <input name="email" type="email" autoComplete="email" required maxLength={255} placeholder="name@unternehmen.de" />
                </label>
              </div>
              <label>
                Website oder Shop
                <input name="shopUrl" type="url" inputMode="url" required maxLength={500} placeholder="https://dein-shop.de" />
              </label>
              <fieldset>
                <legend>Themenbereich</legend>
                <div className="wb-focus-options">
                  <label><input type="checkbox" name="focus" value="CRO" /> <span>CRO</span></label>
                  <label><input type="checkbox" name="focus" value="SEO" /> <span>SEO</span></label>
                  <label><input type="checkbox" name="focus" value="Shopify" /> <span>Shopify</span></label>
                </div>
              </fieldset>
              <label>
                Kurze Beschreibung
                <textarea name="message" rows={5} required maxLength={1500} placeholder="Ausgangslage, Aufgabe und gewünschter Zeitraum" />
              </label>
              <label className="wb-consent">
                <input type="checkbox" required />
                <span>Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden.</span>
              </label>
              <Button className="wb-submit-button" type="submit" disabled>
                Anfrage senden <ArrowUpRight aria-hidden="true" />
              </Button>
              <p className="wb-form-note">Das Formular wird freigeschaltet, sobald Google Sheets verbunden ist.</p>
            </form>
          </div>

          <aside className="wb-contact-sidebar">
            <div className="wb-next-step">
              <span className="wb-step-number">02</span>
              <div className="wb-eyebrow">Ersteinschätzung</div>
              <h2>Bei Bedarf antworte ich mit einem kurzen Loom-Video.</h2>
            </div>
            <div className="wb-direct-contact">
              <div className="wb-eyebrow">Direkter Kontakt</div>
              <a href={`mailto:${EMAIL}`}><Mail aria-hidden="true" /><span><small>E-Mail</small>{EMAIL}</span></a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" /><span><small>LinkedIn</small>William Baitz</span></a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /><span><small>GitHub</small>william-baitz99</span></a>
              <a className="is-placeholder" aria-disabled="true"><Clock3 aria-hidden="true" /><span><small>Calendly</small>Noch einzutragen</span></a>
            </div>
          </aside>
        </section>
      </main>

      <footer className="wb-footer">
        <div className="wb-wrap">
          <div className="wb-footer-bottom">
            <span>© 2026 William Baitz</span>
            <div>
              <Link to="/">Startseite</Link>
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
