const services = [
  {
    number: "01",
    title: "Kadeřnictví",
    text: "Dámské, pánské i dětské střihy, styling a společenské účesy s důrazem na přirozený výsledek.",
    tag: "Vlasy & styling",
  },
  {
    number: "02",
    title: "Nehtové studio",
    text: "Precizní gelová modeláž a péče o ruce v klidném prostředí a s dlouholetou praxí.",
    tag: "Nehty & manikúra",
  },
  {
    number: "03",
    title: "Pedikúra",
    text: "Profesionální péče o chodidla, která spojuje estetiku, pohodlí a příjemný pocit po návštěvě.",
    tag: "Péče & komfort",
  },
  {
    number: "04",
    title: "Kosmetika",
    text: "Kosmetická péče a relaxační procedury zaměřené na zdravý vzhled pleti a chvíli jen pro vás.",
    tag: "Pleť & relax",
  },
];

const contacts = [
  { role: "Kadeřnictví", name: "Jana Pelnářová", phone: "+420 774 173 811", href: "tel:+420774173811" },
  { role: "Kadeřnictví", name: "Ivana Matýs", phone: "+420 723 643 044", href: "tel:+420723643044" },
  { role: "Nehtové studio", name: "Alena Strejcová", phone: "+420 724 247 446", href: "tel:+420724247446" },
  { role: "Nehtové studio", name: "Vladimíra Hrdinová", phone: "+420 606 292 826", href: "tel:+420606292826" },
  { role: "Pedikúra & nehtový design", name: "Eva Černá", phone: "+420 774 536 824", href: "tel:+420774536824" },
  { role: "Kosmetika", name: "Martina Dvořáková, DiS.", phone: "+420 603 100 425", href: "tel:+420603100425" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Salon Bílé nároží – úvod">
          <span className="brand-mark">BN</span>
          <span className="brand-copy">
            <strong>Bílé nároží</strong>
            <small>beauty salon · Plzeň</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#salon">Salon</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="header-cta" href="#kontakt">Objednat se</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Salon krásy v srdci Plzně</p>
          <h1>Krása, která působí <em>přirozeně.</em></h1>
          <p className="hero-lead">
            Jeden salon. Více profesionálních služeb. Místo, kde si dopřejete péči, klid a čas pro sebe.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#kontakt">Vybrat specialistku</a>
            <a className="text-link" href="#sluzby">Prohlédnout služby <span>↗</span></a>
          </div>
          <div className="hero-meta">
            <div><strong>Centrum</strong><span>Plzně</span></div>
            <div><strong>4</strong><span>oblasti péče</span></div>
            <div><strong>Po–Pá</strong><span>8:00–18:00</span></div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-card hero-card-main">
            <span className="hero-card-kicker">Bílé nároží</span>
            <span className="hero-card-word">BEAUTY</span>
            <span className="hero-card-script">your moment</span>
          </div>
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-badge">PLZEŇ<br />CENTRUM</div>
        </div>
      </section>

      <section className="intro" id="salon">
        <p className="section-label">01 · O salonu</p>
        <div className="intro-grid">
          <h2>Nejen služba.<br />Pocit, ke kterému se chcete vracet.</h2>
          <div className="intro-copy">
            <p>
              Salon Bílé nároží spojuje kadeřnictví, nehtové studio, pedikúru a kosmetiku na jednom místě v centru Plzně.
            </p>
            <p>
              Každá služba má svou specialistku, vlastní zkušenost a společný cíl — abyste odcházeli spokojení a rádi se vraceli.
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="section-heading">
          <div>
            <p className="section-label">02 · Služby</p>
            <h2>Vyberte si péči,<br />kterou právě potřebujete.</h2>
          </div>
          <p className="section-note">Objednání probíhá přímo u konkrétní specialistky.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-top"><span>{service.number}</span><span>↗</span></div>
              <div>
                <p className="service-tag">{service.tag}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <p>SELF CARE · CONFIDENCE · DETAIL · RELAX ·</p>
        <h2>Chvíle pro sebe není luxus.<br /><em>Je to dobrý zvyk.</em></h2>
      </section>

      <section className="contact" id="kontakt">
        <div className="contact-heading">
          <p className="section-label light">03 · Objednání</p>
          <h2>Najděte svou<br />specialistku.</h2>
          <p>Pro nejrychlejší domluvu volejte přímo podle služby, o kterou máte zájem.</p>
        </div>
        <div className="contact-list">
          {contacts.map((contact) => (
            <a className="contact-row" href={contact.href} key={`${contact.role}-${contact.name}`}>
              <span className="contact-role">{contact.role}</span>
              <strong>{contact.name}</strong>
              <span>{contact.phone}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="visit">
        <div>
          <p className="section-label">04 · Kde nás najdete</p>
          <h2>V centru Plzně.<br />Blízko, a přitom v klidu.</h2>
        </div>
        <div className="visit-details">
          <div>
            <span>Adresa</span>
            <strong>Prešovská 318/20<br />301 00 Plzeň</strong>
            <small>1. patro</small>
          </div>
          <div>
            <span>Provozní doba</span>
            <strong>Po–Pá<br />8:00–18:00</strong>
            <small>Dle objednávek lze po domluvě i večer nebo o víkendu.</small>
          </div>
          <div>
            <span>Kontakt</span>
            <a href="mailto:bilenarozi@gmail.com">bilenarozi@gmail.com</a>
            <a href="https://www.facebook.com/bilenarozi/" target="_blank" rel="noreferrer">Facebook ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">Bílé nároží</div>
        <p>Salon krásy · Prešovská · Plzeň</p>
        <p>© {new Date().getFullYear()} Salon Bílé nároží</p>
      </footer>
    </main>
  );
}
