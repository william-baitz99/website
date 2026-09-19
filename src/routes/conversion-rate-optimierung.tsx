import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleAlert,
  Eye,
  Github,
  Linkedin,
  MessageSquareText,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import "../william.css";

const LINKEDIN = "https://www.linkedin.com/in/william-baitz-06233b196/";
const GITHUB = "https://github.com/william-baitz99";

const processSteps = [
  {
    title: "Shop-Analyse",
    text: "Prüfung von Produktseiten, Warenkorb und Checkout auf mögliche Reibungspunkte.",
    icon: Search,
  },
  {
    title: "Konkurrenzanalyse",
    text: "Vergleich von Angebot, Nutzerführung und Vertrauenselementen mit relevanten Wettbewerbern.",
    icon: BarChart3,
  },
  {
    title: "Voice of Customer",
    text: "Auswertung von Bewertungen, Supportfragen und vorhandenem Kundenfeedback.",
    icon: MessageSquareText,
  },
  {
    title: "Microsoft Clarity",
    text: "Auswertung von Aufzeichnungen und Heatmaps zur Nutzung des Shops.",
    icon: Eye,
  },
  {
    title: "Umsetzung in Shopify",
    text: "Umsetzung abgestimmter Änderungen direkt im Shopify-Theme.",
    icon: ShoppingBag,
  },
];

const faqs = [
  {
    question: "Was ist in einer ersten Einschätzung enthalten?",
    answer: "Je nach Anfrage gebe ich eine kurze Einschätzung per Nachricht oder in einem Loom-Video und benenne mögliche nächste Schritte.",
  },
  {
    question: "Für welche Shops ist eine laufende Betreuung sinnvoll?",
    answer: "Vor allem für Shops mit regelmäßigen Aufgaben sowie ausreichend Besuchern oder Bestellungen, um Veränderungen auswerten zu können.",
  },
  {
    question: "Kannst du die Empfehlungen direkt in Shopify umsetzen?",
    answer: "Ja. Nach Abstimmung kann ich die vorgesehenen Änderungen direkt im bestehenden Shopify-Theme umsetzen.",
  },
  {
    question: "Wann lohnt sich ein A/B-Test mit ABlyft?",
    answer: "Wenn ausreichend Traffic und Conversions vorhanden sind, damit Varianten belastbar verglichen werden können. Ob das bei deinem Shop sinnvoll ist, klären wir anhand deiner Zahlen.",
  },
  {
    question: "Wie beginnt eine Zusammenarbeit?",
    answer: "Nach einer Anfrage klären wir Aufgabe, Umfang, Zugänge und einen realistischen Zeitrahmen.",
  },
];

export const Route = createFileRoute("/conversion-rate-optimierung")({
  head: () => ({
    meta: [
      { title: "Conversion Rate Optimierung für Shopify – William Baitz" },
      {
        name: "description",
        content: "Conversion-Optimierung für Shopify durch Analyse, Kundenfeedback, Clarity-Auswertung und technische Umsetzung.",
      },
      { property: "og:title", content: "Conversion Rate Optimierung für Shopify – William Baitz" },
      {
        property: "og:description",
        content: "Arbeitsweise und Leistungen von William Baitz im Bereich Conversion-Optimierung für Shopify.",
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
  component: ConversionRateOptimierung,
});

function ConversionRateOptimierung() {
  return (
    <div className="wb-page wb-cro-page">
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

        <section className="wb-cro-hero">
          <div className="wb-eyebrow">Conversion Rate Optimierung</div>
          <h1>
             Conversion-Optimierung für <em>Shopify-Shops.</em>
          </h1>
          <p>
            Ich untersuche die Nutzung von Produktseiten, Warenkorb und Checkout und setze abgestimmte Änderungen in Shopify um.
          </p>
          <div className="wb-cro-hero-actions">
            <Link className="wb-cro-primary-link" to="/kontakt">
              Projekt anfragen <ArrowUpRight aria-hidden="true" />
            </Link>
            <span>Analyse · Priorisierung · Umsetzung</span>
          </div>
          <span className="wb-cro-hero-mark" aria-hidden="true">%</span>
        </section>

        <section className="wb-cro-split" aria-label="Prüffelder und Vorgehen">
          <article className="wb-cro-problem">
            <div className="wb-eyebrow"><CircleAlert aria-hidden="true" /> Typische Prüffelder</div>
            <h2>Bereiche der Analyse.</h2>
            <ul>
              <li>Produktseiten beantworten wichtige Fragen nicht.</li>
              <li>Besucher brechen im Warenkorb oder Checkout ab.</li>
              <li>Vertrauen, Orientierung und Kaufargumente fehlen.</li>
              <li>Optimierungen entstehen aus Bauchgefühl statt Daten.</li>
            </ul>
          </article>
          <article className="wb-cro-solution">
            <div className="wb-eyebrow"><Sparkles aria-hidden="true" /> Vorgehen</div>
            <h2>Von der Beobachtung zur Änderung.</h2>
            <ul>
              <li><Check aria-hidden="true" /> Beobachtungen und vorhandene Daten zusammenführen</li>
              <li><Check aria-hidden="true" /> Aufgaben nach Aufwand und Relevanz ordnen</li>
              <li><Check aria-hidden="true" /> Abgestimmte Änderungen in Shopify umsetzen</li>
              <li><Check aria-hidden="true" /> Ergebnisse nach der Umsetzung auswerten</li>
            </ul>
          </article>
        </section>

        <section className="wb-cro-process" aria-labelledby="process-heading">
          <div className="wb-cro-section-heading">
            <div>
              <div className="wb-eyebrow">Mein Prozess</div>
              <h2 id="process-heading">Von der Diagnose bis zur Umsetzung.</h2>
            </div>
            <p>Die einzelnen Schritte werden je nach Shop, Datenlage und Aufgabenstellung ausgewählt.</p>
          </div>
          <ol className="wb-cro-process-grid">
            {processSteps.map((step, index) => {
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
          <aside className="wb-cro-testing">
            <div>
              <div className="wb-eyebrow">Bei genügend Traffic</div>
              <h3>A/B-Tests als optionaler Arbeitsschritt.</h3>
            </div>
            <p>Bei ausreichender Datengrundlage können Varianten vor einer dauerhaften Änderung mit ABlyft verglichen werden.</p>
            <span>ABlyft</span>
          </aside>
        </section>

        <section className="wb-cro-references" aria-labelledby="references-heading">
          <div className="wb-cro-section-heading">
            <div>
              <div className="wb-eyebrow">Referenzen</div>
              <h2 id="references-heading">Vorgesehene Referenzübersicht.</h2>
            </div>
            <p>Die echten Kundenlogos folgen. Bis dahin markieren diese Felder die geplante Referenzfläche.</p>
          </div>
          <div className="wb-cro-logo-grid" aria-label="Platzhalter für Kundenlogos">
            {['KUNDE 01', 'KUNDE 02', 'KUNDE 03', 'KUNDE 04', 'KUNDE 05'].map((name) => (
              <div key={name}><span>wb /</span>{name}</div>
            ))}
          </div>
        </section>

        <section className="wb-cro-pricing" aria-labelledby="pricing-heading">
          <div className="wb-cro-section-heading">
            <div>
              <div className="wb-eyebrow">Zusammenarbeit</div>
              <h2 id="pricing-heading">Formen der Zusammenarbeit.</h2>
            </div>
          </div>
          <div className="wb-cro-pricing-grid">
            <article className="wb-cro-price-card">
              <div className="wb-eyebrow">Ersteinschätzung</div>
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
              <div className="wb-eyebrow">Laufende Betreuung</div>
              <h3>CRO Standard</h3>
              <div className="wb-cro-price">ab 750 € <small>/ Monat</small></div>
              <p>Regelmäßige Analyse, Priorisierung und Umsetzung vereinbarter Aufgaben.</p>
              <ul>
                <li><Check aria-hidden="true" /> Klarer Optimierungsplan</li>
                <li><Check aria-hidden="true" /> Clarity &amp; Kundensignale</li>
                <li><Check aria-hidden="true" /> Umsetzung in Shopify</li>
              </ul>
              <Link to="/kontakt">Betreuung anfragen <ArrowUpRight aria-hidden="true" /></Link>
            </article>
            <article className="wb-cro-price-card">
              <div className="wb-eyebrow">Individueller Bedarf</div>
              <h3>Beratung nach Maß</h3>
              <div className="wb-cro-price">Auf Anfrage</div>
              <p>Für besondere Fragestellungen, größere Vorhaben oder ein individuelles Setup.</p>
              <ul>
                <li><Check aria-hidden="true" /> Flexibler Leistungsumfang</li>
                <li><Check aria-hidden="true" /> A/B-Testing mit ABlyft</li>
                <li><Check aria-hidden="true" /> Persönliche Begleitung</li>
              </ul>
              <Link to="/kontakt">Projekt besprechen <ArrowUpRight aria-hidden="true" /></Link>
            </article>
          </div>
        </section>

        <section className="wb-cro-faq" aria-labelledby="faq-heading">
          <div className="wb-cro-section-heading">
            <div>
              <div className="wb-eyebrow">FAQ</div>
              <h2 id="faq-heading">Häufige Fragen.</h2>
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

        <section className="wb-cro-final-cta">
          <div className="wb-eyebrow">Kontakt</div>
          <h2>CRO-Projekt besprechen.</h2>
          <Link to="/kontakt" aria-label="CRO-Projekt anfragen">
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
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}