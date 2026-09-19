import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Blocks,
  Check,
  ChevronDown,
  Code2,
  Gauge,
  Github,
  LayoutTemplate,
  Linkedin,
  Youtube,
} from "lucide-react";
import "../william.css";

const LINKEDIN = "https://www.linkedin.com/in/william-baitz-06233b196/";
const GITHUB = "https://github.com/william-baitz99";
const YOUTUBE = "https://www.youtube.com/@william-baitz-ab-alchemie";

const developmentSteps = [
  {
    title: "Anforderungen klären",
    text: "Gemeinsame Klärung der gewünschten Funktion und des Umfangs der Anpassung.",
    icon: LayoutTemplate,
  },
  {
    title: "Shop prüfen",
    text: "Prüfung von Theme, Apps, vorhandenen Funktionen und technischen Abhängigkeiten.",
    icon: Gauge,
  },
  {
    title: "Lösung planen",
    text: "Abstimmung von Vorgehen, Prioritäten und voraussichtlichem Aufwand.",
    icon: Blocks,
  },
  {
    title: "Direkt umsetzen",
    text: "Umsetzung der vereinbarten Änderungen direkt in Shopify.",
    icon: Code2,
  },
  {
    title: "Prüfen & übergeben",
    text: "Kontrolle von Darstellung und Funktion vor der Veröffentlichung.",
    icon: Check,
  },
];

const faqs = [
  {
    question: "Übernimmst du auch kleinere Shopify-Anpassungen?",
    answer: "Ja. Auch klar abgegrenzte Änderungen an einem bestehenden Theme sind möglich. Nach einer Prüfung lässt sich der Aufwand einschätzen.",
  },
  {
    question: "Kannst du bestehende Shopify-Themes weiterentwickeln?",
    answer: "Ja. Ich arbeite auf Basis des vorhandenen Themes und prüfe zuerst, welche Funktionen bereits vorhanden sind und wo eine individuelle Anpassung nötig ist.",
  },
  {
    question: "Hilfst du auch bei einem langsamen Shop?",
    answer: "Ja. Ich prüfe mögliche Bremsen im Theme und bei eingebundenen Apps. Welche Verbesserungen sinnvoll sind, hängt vom bestehenden Setup ab.",
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer: "Nach der Anfrage klären wir Ziel und Umfang. Du erhältst einen konkreten Vorschlag, bevor ich mit der Umsetzung im Shop beginne.",
  },
  {
    question: "Kannst du Entwicklung und Conversion-Optimierung verbinden?",
    answer: "Ja. Wenn eine Conversion-Analyse konkrete Änderungen ergibt, können diese direkt in Shopify umgesetzt werden. So bleiben Analyse und Umsetzung in einer Hand.",
  },
];

export const Route = createFileRoute("/shopify-entwicklung")({
  head: () => ({
    meta: [
      { title: "Shopify Entwicklung für Onlineshops – William Baitz" },
      {
        name: "description",
        content: "Shopify-Entwicklung durch William Baitz: Theme-Anpassungen, eigene Sektionen, Apps und Fehlerbehebung.",
      },
      { property: "og:title", content: "Shopify Entwicklung für Onlineshops – William Baitz" },
      {
        property: "og:description",
        content: "Arbeitsweise und Leistungen von William Baitz im Bereich Shopify-Entwicklung.",
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
  component: ShopifyEntwicklung,
});

function ShopifyEntwicklung() {
  return (
    <div className="wb-page wb-cro-page wb-shopify-page">
      <header className="wb-header">
        <nav className="wb-nav wb-wrap" aria-label="Hauptnavigation">
          <Link className="wb-logo" to="/" aria-label="Zur Startseite">
            <span className="wb-logo-mark">wb</span>
            <span>William Baitz</span>
          </Link>
          <Link className="wb-nav-cta" to="/kontakt">
            Kontakt <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>

      <main className="wb-cro-main wb-wrap">
        <Link className="wb-back-link wb-cro-back" to="/">
          <ArrowLeft aria-hidden="true" /> Alle Leistungen
        </Link>

        <section className="wb-cro-hero wb-shopify-hero">
          <h1>
            Entwicklung und Pflege von <em>Shopify-Shops.</em>
          </h1>
          <p>
            Ich passe bestehende Themes an, entwickle einzelne Funktionen und betreue technische Aufgaben in Shopify.
          </p>
          <div className="wb-cro-hero-actions">
            <Link className="wb-cro-primary-link" to="/kontakt">
              Projekt anfragen <ArrowUpRight aria-hidden="true" />
            </Link>
            <span>Planung · Entwicklung · Prüfung</span>
          </div>
          <img
            className="wb-shopify-hero-logo"
            src="https://cdn.simpleicons.org/shopify/F4F0E8"
            alt="Shopify Logo"
            width={220}
            height={220}
          />
        </section>

        <section className="wb-cro-split" aria-label="Typische Aufgaben und Vorgehen">
          <article className="wb-cro-problem">
            <h2>Arbeiten am bestehenden Shop.</h2>
            <ul>
              <li>Wichtige Inhalte lassen sich nicht flexibel pflegen.</li>
              <li>Zu viele Apps machen Abläufe unnötig kompliziert.</li>
              <li>Darstellung oder Funktionen brechen auf einzelnen Geräten.</li>
              <li>Kleine Änderungen werden zu langen Abstimmungsprojekten.</li>
            </ul>
          </article>
          <article className="wb-cro-solution">
            <h2>Prüfen, abstimmen und umsetzen.</h2>
            <ul>
              <li><Check aria-hidden="true" /> Anforderungen vor der Umsetzung priorisieren</li>
              <li><Check aria-hidden="true" /> Vorhandene Shopify-Funktionen berücksichtigen</li>
              <li><Check aria-hidden="true" /> Individuelle Funktionen bei Bedarf ergänzen</li>
              <li><Check aria-hidden="true" /> Änderungen im Shop umsetzen und prüfen</li>
            </ul>
          </article>
        </section>

        <section className="wb-cro-process" aria-labelledby="shopify-process-heading">
          <div className="wb-cro-section-heading">
            <div>
              <h2 id="shopify-process-heading">Ablauf eines Projekts.</h2>
            </div>
            <p>Der genaue Ablauf richtet sich nach Theme, Aufgabe und bestehender technischer Struktur.</p>
          </div>
          <ol className="wb-cro-process-grid">
            {developmentSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <span className="wb-cro-process-number">0{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="wb-cro-pricing" aria-labelledby="shopify-pricing-heading">
          <div className="wb-cro-section-heading">
            <div>
              <h2 id="shopify-pricing-heading">Formen der Zusammenarbeit.</h2>
            </div>
          </div>
          <div className="wb-cro-pricing-grid">
            <article className="wb-cro-price-card">
              <h3>Ersteinschätzung</h3>
              <div className="wb-cro-price">Nach Anfrage</div>
              <p>Eine kurze Einordnung der Anfrage und möglicher nächster Schritte.</p>
              <ul>
                <li><Check aria-hidden="true" /> Rund 10 Minuten Video</li>
                <li><Check aria-hidden="true" /> Erste Beobachtungen</li>
                <li><Check aria-hidden="true" /> Einordnung des Umfangs</li>
              </ul>
              <Link to="/kontakt">Anfrage stellen <ArrowUpRight aria-hidden="true" /></Link>
            </article>
            <article className="wb-cro-price-card is-featured">
              <h3>Shopify Standard</h3>
              <div className="wb-cro-price">ab 750 € <small>/ Monat</small></div>
              <p>Regelmäßige Weiterentwicklung und technische Pflege eines Shopify-Shops.</p>
              <ul>
                <li><Check aria-hidden="true" /> Theme-Anpassungen</li>
                <li><Check aria-hidden="true" /> Technische Wartung</li>
                <li><Check aria-hidden="true" /> Shopify-eigene Tools</li>
              </ul>
              <Link to="/kontakt">Betreuung anfragen <ArrowUpRight aria-hidden="true" /></Link>
            </article>
            <article className="wb-cro-price-card">
              <h3>Beratung nach Maß</h3>
              <div className="wb-cro-price">Auf Anfrage</div>
              <p>Für besondere Fragestellungen, größere Vorhaben oder ein individuelles Shopify-Setup.</p>
              <ul>
                <li><Check aria-hidden="true" /> Flexibler Leistungsumfang</li>
                <li><Check aria-hidden="true" /> Individuelle Entwicklung</li>
                <li><Check aria-hidden="true" /> Persönliche Begleitung</li>
              </ul>
              <Link to="/kontakt">Projekt besprechen <ArrowUpRight aria-hidden="true" /></Link>
            </article>
          </div>
        </section>

        <section className="wb-cro-faq" aria-labelledby="shopify-faq-heading">
          <div className="wb-cro-section-heading">
            <div>
              <h2 id="shopify-faq-heading">Häufige Fragen.</h2>
            </div>
          </div>
          <div className="wb-cro-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<ChevronDown aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="wb-cro-final-cta wb-shopify-final-cta">
          <h2>Shopify-Projekt besprechen.</h2>
          <Link to="/kontakt" aria-label="Shopify-Projekt anfragen">
            Anfrage stellen <ArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </main>

      <footer className="wb-footer">
        <div className="wb-wrap">
          <div className="wb-footer-bottom">
            <span>© 2026 William Baitz</span>
            <div>
              <Link to="/">Startseite</Link>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /> GitHub</a>
              <a href={YOUTUBE} target="_blank" rel="noopener noreferrer"><Youtube aria-hidden="true" /> YouTube</a>
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
