const services = [
  {
    number: "01",
    title: "Kadeřnictví",
    text: "Střih, barva i kompletní proměna s důrazem na přirozený výsledek a osobní styl.",
    tag: "Vlasy & styling",
    href: "/kadernictvi",
    accent: "HAIR",
    features: ["Střihy", "Barvení & melír", "BOND PLUS", "Společenské účesy"],
  },
  {
    number: "02",
    title: "Nehtové studio",
    text: "Precizní gelová modeláž v elegantním provedení, které působí čistě, upraveně a vydrží.",
    tag: "Nehty & manikúra",
    href: "/nehtove-studio",
    accent: "NAILS",
    features: ["Gelová modeláž", "Přirozený vzhled", "Profesionální gely", "Individuální design"],
  },
  {
    number: "03",
    title: "Pedikúra",
    text: "Komplexní péče o chodidla, která spojuje pohodlí, upravený vzhled a příjemný pocit po návštěvě.",
    tag: "Péče & komfort",
    href: "/pedikura",
    accent: "CARE",
    features: ["Kompletní ošetření", "Peeling & maska", "Péče o nehty", "Relaxační masáž"],
  },
  {
    number: "04",
    title: "Kosmetika",
    text: "Péče o pleť, relaxace a moderní procedury sestavené podle toho, co vaše pokožka právě potřebuje.",
    tag: "Pleť & relax",
    href: "/kosmetika",
    accent: "SKIN",
    features: ["Ošetření pleti", "Mikrojehličkování", "Obočí & řasy", "Masáže & relax"],
  },
];

const contacts = [
  { role: "Kadeřnictví", name: "Jana Pelnářová", phone: "+420 774 173 811", href: "tel:+420774173811", note: "Po–Čt 9:00–17:00 · Pá 9:00–13:00 · víkend dle objednávek" },
  { role: "Kadeřnictví", name: "Ivana Matýs", phone: "+420 723 643 044", href: "tel:+420723643044", note: "Provozní doba dle objednávek" },
  { role: "Nehtové studio", name: "Alena Strejcová", phone: "+420 724 247 446", href: "tel:+420724247446", note: "Po–Pá dle objednávek" },
  { role: "Nehtové studio", name: "Vladimíra Hrdinová", phone: "+420 606 292 826", href: "tel:+420606292826", note: "Po–Pá dle objednávek" },
  { role: "Pedikúra & nehtový design", name: "Eva Černá", phone: "+420 774 536 824", href: "tel:+420774536824", note: "Provozní doba dle objednávek" },
  { role: "Kosmetika", name: "Martina Dvořáková, DiS.", phone: "+420 603 100 425", href: "tel:+420603100425", note: "Provozní doba dle objednávek" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Salon Bílé nároží – úvod">
          <span className="brand-mark">BN</span>
          <span className="brand-copy"><strong>Bílé nároží</strong><small>beauty salon · Plzeň</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Hlavní navigace"><a href="#sluzby">Služby</a><a href="#salon">Salon</a><a href="#kontakt">Kontakt</a></nav>
        <a className="header-cta" href="#kontakt">Objednat se</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Salon krásy v srdci Plzně</p>
          <h1>Krása, která působí <em>přirozeně.</em></h1>
          <p className="hero-lead">Kadeřnictví, nehtové studio, pedikúra a kosmetika na jednom místě v centru Plzně. Dopřejte si profesionální péči, klid a čas jen pro sebe.</p>
          <div className="hero-actions"><a className="button button-dark" href="#kontakt">Vybrat specialistku</a><a className="text-link" href="#sluzby">Prohlédnout služby <span>↗</span></a></div>
          <div className="hero-meta"><div><strong>Centrum</strong><span>Plzně</span></div><div><strong>4</strong><span>oblasti péče</span></div><div><strong>Po–Pá</strong><span>8:00–18:00</span></div></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="hero-card hero-card-main"><span className="hero-card-kicker">Bílé nároží</span><span className="hero-card-word">BEAUTY</span><span className="hero-card-script">your moment</span></div><div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" /><div className="hero-badge">PLZEŇ<br />CENTRUM</div></div>
      </section>

      <section className="intro" id="salon">
        <p className="section-label">01 · O salonu</p>
        <div className="intro-grid"><h2>Nejen služba.<br />Pocit, ke kterému se chcete vracet.</h2><div className="intro-copy"><p>Salon Bílé nároží najdete v Prešovské ulici v samotném centru Plzně. Na jednom místě zde funguje kadeřnictví, nehtové studio, pedikúra a kosmetické studio.</p><p>Jednotlivé služby zajišťují samostatné specialistky s dlouholetou praxí. Objednání proto probíhá přímo u konkrétní osoby podle služby, o kterou máte zájem.</p></div></div>
      </section>

      <section className="services services-premium" id="sluzby">
        <div className="section-heading">
          <div><p className="section-label">02 · Služby</p><h2>Čtyři světy péče.<br />Jedno výjimečné místo.</h2></div>
          <p className="section-note">Každá karta je vstupem do samostatné služby. Otevřete detail, prohlédněte nabídku a vyberte si specialistku.</p>
        </div>
        <div className="service-showcase">
          {services.map((service) => (
            <a className="service-panel" href={service.href} key={service.title}>
              <div className="service-panel-head"><span>{service.number}</span><span>{service.tag}</span></div>
              <div className="service-watermark" aria-hidden="true">{service.accent}</div>
              <div className="service-panel-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-features">{service.features.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="service-panel-foot"><strong>Prohlédnout službu</strong><span>↗</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="statement"><p>SELF CARE · CONFIDENCE · DETAIL · RELAX ·</p><h2>Chvíle pro sebe není luxus.<br /><em>Je to dobrý zvyk.</em></h2></section>

      <section className="contact" id="kontakt">
        <div className="contact-heading"><p className="section-label light">03 · Objednání</p><h2>Najděte svou<br />specialistku.</h2><p>Pro nejrychlejší domluvu volejte přímo podle služby, o kterou máte zájem. Provozní doba jednotlivých služeb se řídí objednávkami.</p></div>
        <div className="contact-list">{contacts.map((contact) => <a className="contact-row" href={contact.href} key={`${contact.role}-${contact.name}`} title={contact.note}><span className="contact-role">{contact.role}</span><strong>{contact.name}</strong><span>{contact.phone}</span><span className="arrow">↗</span></a>)}</div>
      </section>

      <section className="visit">
        <div><p className="section-label">04 · Kde nás najdete</p><h2>V centru Plzně.<br />Snadno pěšky, MHD i autem.</h2></div>
        <div className="visit-details">
          <div><span>Adresa</span><strong>Prešovská 318/20<br />301 00 Plzeň-Vnitřní Město</strong><small>Salon se nachází v 1. patře.</small></div>
          <div><span>Provozní doba salonu</span><strong>Po–Pá 8:00–18:00<br />So–Ne zavřeno</strong><small>Provozní doba jednotlivých služeb se liší dle objednávek. Po domluvě lze některé termíny sjednat i večer nebo o víkendu.</small></div>
          <div><span>MHD</span><strong>Sady Pětatřicátníků</strong><small>Salon je dostupný hlavními spoji MHD. Od zastávky je to jen několik minut pěšky.</small></div>
          <div><span>Parkování</span><strong>Plaza · Nové divadlo · Sady Pětatřicátníků</strong><small>V okolí je několik možností parkování v docházkové vzdálenosti od salonu.</small></div>
          <div><span>Kontakt</span><a href="mailto:bilenarozi@gmail.com">bilenarozi@gmail.com</a><a href="https://www.facebook.com/bilenarozi/" target="_blank" rel="noreferrer">Facebook ↗</a></div>
        </div>
      </section>

      <footer><div className="footer-brand">Bílé nároží</div><p>Salon krásy · Prešovská · Plzeň</p><p>© {new Date().getFullYear()} Salon Bílé nároží</p></footer>

      <style>{`
        .services-premium { background: #e9dfd3; }
        .service-showcase { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
        .service-panel { position: relative; min-height: 520px; padding: 32px; overflow: hidden; border: 1px solid rgba(29,27,24,.14); border-radius: 28px; background: rgba(255,253,249,.46); display: flex; flex-direction: column; justify-content: space-between; transition: transform .35s ease, box-shadow .35s ease, background .35s ease, color .35s ease; isolation: isolate; }
        .service-panel::before { content: ''; position: absolute; inset: auto -10% -36% auto; width: 58%; aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle, rgba(154,113,93,.22), rgba(154,113,93,0) 68%); z-index: -1; transition: transform .45s ease; }
        .service-panel:hover { transform: translateY(-7px); background: #1d1b18; color: #fffdf9; box-shadow: 0 30px 70px rgba(49,36,29,.16); }
        .service-panel:hover::before { transform: scale(1.22); }
        .service-panel-head { display: flex; justify-content: space-between; gap: 20px; font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; opacity: .55; }
        .service-watermark { position: absolute; right: -8px; top: 78px; font-family: var(--font-display), Georgia, serif; font-size: clamp(70px, 10vw, 150px); line-height: .8; letter-spacing: -.07em; color: rgba(154,113,93,.13); pointer-events: none; transition: color .35s ease, transform .35s ease; }
        .service-panel:hover .service-watermark { color: rgba(255,255,255,.07); transform: translateX(-10px); }
        .service-panel-body { position: relative; z-index: 1; max-width: 82%; margin-top: auto; padding-top: 150px; }
        .service-panel h3 { margin: 0 0 22px; font-family: var(--font-display), Georgia, serif; font-size: clamp(48px, 5vw, 78px); line-height: .88; font-weight: 500; letter-spacing: -.045em; }
        .service-panel-body > p { max-width: 520px; margin: 0; font-size: 14px; line-height: 1.75; opacity: .68; }
        .service-features { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .service-features span { padding: 8px 12px; border: 1px solid currentColor; border-radius: 100px; font-size: 9px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; opacity: .56; }
        .service-panel-foot { display: flex; justify-content: space-between; align-items: center; margin-top: 42px; padding-top: 22px; border-top: 1px solid currentColor; font-size: 10px; letter-spacing: .13em; text-transform: uppercase; opacity: .75; }
        .service-panel-foot span { display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid currentColor; border-radius: 50%; font-size: 16px; transition: transform .3s ease; }
        .service-panel:hover .service-panel-foot span { transform: rotate(45deg); }
        @media (max-width: 900px) { .service-showcase { grid-template-columns: 1fr; } .service-panel { min-height: 460px; } }
        @media (max-width: 560px) { .service-panel { min-height: 430px; padding: 24px; border-radius: 22px; } .service-panel-body { max-width: 100%; padding-top: 115px; } .service-panel h3 { font-size: 50px; } .service-watermark { top: 70px; font-size: 82px; } }
      `}</style>
    </main>
  );
}
