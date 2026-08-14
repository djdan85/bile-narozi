const services = [
  {
    number: "01",
    title: "Kadeřnictví",
    text: "Dámské, pánské a dětské střihy, barvení, melírování, prodlužování a zhušťování vlasů metodou BOND PLUS, střih horkou břitvou, permanentní styling i svatební a společenské účesy včetně líčení.",
    tag: "Vlasy & styling",
  },
  {
    number: "02",
    title: "Nehtové studio",
    text: "Gelová modeláž nehtů s důrazem na přirozený vzhled, precizní zpracování a dlouhodobou výdrž. Studio pracuje s profesionálními materiály a kvalitními gely.",
    tag: "Nehty & manikúra",
  },
  {
    number: "03",
    title: "Pedikúra",
    text: "Kompletní péče o chodidla — diagnostika, relaxační koupel, odstranění zrohovatělé kůže, otlaků a prasklin, úprava nehtů, peeling, maska, výživná kosmetika a relaxační masáž chodidel.",
    tag: "Péče & komfort",
  },
  {
    number: "04",
    title: "Kosmetika",
    text: "Kompletní kosmetická péče, mikrojehličkování, protivráskové a problematické ošetření pleti, úprava a barvení obočí, masáže, lymfodrenáže, depilace i další relaxační procedury.",
    tag: "Pleť & relax",
  },
];

const contacts = [
  {
    role: "Kadeřnictví",
    name: "Jana Pelnářová",
    phone: "+420 774 173 811",
    href: "tel:+420774173811",
    note: "Po–Čt 9:00–17:00 · Pá 9:00–13:00 · víkend dle objednávek",
  },
  {
    role: "Kadeřnictví",
    name: "Ivana Matýs",
    phone: "+420 723 643 044",
    href: "tel:+420723643044",
    note: "Provozní doba dle objednávek",
  },
  {
    role: "Nehtové studio",
    name: "Alena Strejcová",
    phone: "+420 724 247 446",
    href: "tel:+420724247446",
    note: "Po–Pá dle objednávek",
  },
  {
    role: "Nehtové studio",
    name: "Vladimíra Hrdinová",
    phone: "+420 606 292 826",
    href: "tel:+420606292826",
    note: "Po–Pá dle objednávek",
  },
  {
    role: "Pedikúra & nehtový design",
    name: "Eva Černá",
    phone: "+420 774 536 824",
    href: "tel:+420774536824",
    note: "Provozní doba dle objednávek",
  },
  {
    role: "Kosmetika",
    name: "Martina Dvořáková, DiS.",
    phone: "+420 603 100 425",
    href: "tel:+420603100425",
    note: "Provozní doba dle objednávek",
  },
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
            Kadeřnictví, nehtové studio, pedikúra a kosmetika na jednom místě v centru Plzně. Dopřejte si profesionální péči, klid a čas jen pro sebe.
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
              Salon Bílé nároží najdete v Prešovské ulici v samotném centru Plzně. Na jednom místě zde funguje kadeřnictví, nehtové studio, pedikúra a kosmetické studio.
            </p>
            <p>
              Jednotlivé služby zajišťují samostatné specialistky s dlouholetou praxí. Objednání proto probíhá přímo u konkrétní osoby podle služby, o kterou máte zájem.
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
          <p>Pro nejrychlejší domluvu volejte přímo podle služby, o kterou máte zájem. Provozní doba jednotlivých služeb se řídí objednávkami.</p>
        </div>
        <div className="contact-list">
          {contacts.map((contact) => (
            <a className="contact-row" href={contact.href} key={`${contact.role}-${contact.name}`} title={contact.note}>
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
          <h2>V centru Plzně.<br />Snadno pěšky, MHD i autem.</h2>
        </div>
        <div className="visit-details">
          <div>
            <span>Adresa</span>
            <strong>Prešovská 318/20<br />301 00 Plzeň-Vnitřní Město</strong>
            <small>Salon se nachází v 1. patře.</small>
          </div>
          <div>
            <span>Provozní doba salonu</span>
            <strong>Po–Pá 8:00–18:00<br />So–Ne zavřeno</strong>
            <small>Provozní doba jednotlivých služeb se liší dle objednávek. Po domluvě lze některé termíny sjednat i večer nebo o víkendu.</small>
          </div>
          <div>
            <span>MHD</span>
            <strong>Sady Pětatřicátníků</strong>
            <small>Salon je dostupný hlavními spoji MHD. Od zastávky je to jen několik minut pěšky.</small>
          </div>
          <div>
            <span>Parkování</span>
            <strong>Plaza · Nové divadlo · Sady Pětatřicátníků</strong>
            <small>V okolí je několik možností parkování v docházkové vzdálenosti od salonu.</small>
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
