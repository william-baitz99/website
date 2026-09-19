import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import "../william.css";

const EMAIL = "info@william-baitz.de";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – William Baitz" },
      {
        name: "description",
        content: "Datenschutzerklärung der Website von William Baitz.",
      },
      { property: "og:title", content: "Datenschutz – William Baitz" },
      {
        property: "og:description",
        content: "Datenschutzerklärung der Website von William Baitz.",
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
  component: Datenschutz,
});

function Datenschutz() {
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
          <h1>Datenschutzerklärung</h1>
        </div>

        <div className="wb-legal-grid">
          <section className="wb-legal-card" aria-labelledby="privacy-owner">
            <h2 id="privacy-owner">Verantwortlicher</h2>
            <p>
              <strong>William Baitz</strong>
              <br />
              Business Park 5557
              <br />
              Al Jazeera Al Hamra
              <br />
              E-Mail: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </section>

          <section className="wb-legal-card" aria-labelledby="privacy-overview">
            <h2 id="privacy-overview">Übersicht</h2>
            <p>
              Diese Website verarbeitet personenbezogene Daten nur, wenn das technisch oder für die Kommunikation mit dir nötig ist. Es werden keine Daten an Werbenetzwerke weitergegeben.
            </p>
          </section>

          <section className="wb-legal-card" aria-labelledby="privacy-hosting">
            <h2 id="privacy-hosting">Hosting und Server-Logs</h2>
            <p>
              Beim Aufruf der Website werden technische Daten wie IP-Adresse, Browsertyp, Datum und Uhrzeit sowie aufgerufene Seiten vom Hosting-Anbieter verarbeitet. Das ist erforderlich, um die Seite auszuliefern und Stabilität sowie Sicherheit zu gewährleisten.
            </p>
          </section>

          <section className="wb-legal-card" aria-labelledby="privacy-contact">
            <h2 id="privacy-contact">Kontaktformular</h2>
            <p>
              Die im Kontaktformular eingegebenen Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet. Die Verarbeitung erfolgt technisch über ein Google Apps Script: Deine Angaben werden dabei in einem Google Sheet gespeichert und per E-Mail an mich weitergeleitet. Eine darüber hinausgehende Weitergabe an Dritte erfolgt nicht.
            </p>
          </section>

          <section className="wb-legal-card" aria-labelledby="privacy-cookies">
            <h2 id="privacy-cookies">Cookies</h2>
            <p>
              Die Website verwendet keine eigenen Tracking-Cookies. Externe Schriften und Icons können beim Laden technische Informationen an die jeweiligen Anbieter übermitteln.
            </p>
          </section>

          <section className="wb-legal-card" aria-labelledby="privacy-thirdparty">
            <h2 id="privacy-thirdparty">Eingebundene Dienste</h2>
            <p>
              Auf der Website werden Google Fonts und externe Icons (Simple Icons) geladen. Dabei kann deine IP-Adresse an die Server dieser Anbieter übertragen werden. Weitere Informationen findest du in den Datenschutzhinweisen der jeweiligen Anbieter.
            </p>
          </section>

          <section className="wb-legal-card" aria-labelledby="privacy-rights">
            <h2 id="privacy-rights">Deine Rechte</h2>
            <p>
              Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner personenbezogenen Daten sowie ein Widerspruchsrecht. Anfragen dazu richtest du bitte an die oben genannte Kontaktadresse.
            </p>
          </section>

          <section className="wb-legal-card wb-legal-full" aria-labelledby="privacy-update">
            <h2 id="privacy-update">Aktualisierung</h2>
            <p>
              Diese Datenschutzerklärung wird fortlaufend an rechtliche oder technische Änderungen angepasst. Stand: September 2026.
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
              <Link to="/impressum">Impressum</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
