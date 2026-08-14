const services = [
  {
    title: "Kadeřnictví",
    subtitle: "STŘIH · BARVA · STYLING",
    text: "Moderní střihy, barvení, melírování a péče o vlasy na míru vašemu stylu.",
    href: "/kadernictvi",
    icon: "✂",
    image: "https://d64gsuwffb70l.cloudfront.net/696d3cd59f5e94dec9b69ba3_1768767628070_e696168d.jpg",
    features: ["Dámské, pánské a dětské střihy", "Barvení, melírování a BOND PLUS", "Společenské a svatební účesy"],
  },
  {
    title: "Nehtové studio",
    subtitle: "KRÁSA · PÉČE · DOKONALOST",
    text: "Gelová modeláž a profesionální péče o ruce s důrazem na elegantní a přirozený vzhled.",
    href: "/nehtove-studio",
    icon: "◇",
    image: "https://nailtheglam.com/wp-content/uploads/2025/02/one-color-nail-ideas-1.jpeg",
    features: ["Gelová modeláž nehtů", "Kvalitní profesionální materiály", "Precizní a dlouhotrvající výsledek"],
  },
  {
    title: "Pedikúra",
    subtitle: "ZDRAVÍ · POHODLÍ · LEHKOST",
    text: "Komplexní péče o chodidla pro pohodlí, upravený vzhled a příjemný pocit po návštěvě.",
    href: "/pedikura",
    icon: "♧",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=85",
    features: ["Kompletní pedikérské ošetření", "Péče o nehty a pokožku", "Peeling, maska a relaxační masáž"],
  },
  {
    title: "Kosmetika",
    subtitle: "PLEŤ · PROCEDURY · RELAX",
    text: "Kosmetická péče, masáže a moderní procedury pro svěží vzhled pleti a chvíli opravdového klidu.",
    href: "/kosmetika",
    icon: "♡",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    features: ["Kosmetické ošetření pleti", "Mikrojehličkování a péče o obočí", "Masáže a relaxační procedury"],
  },
];

const benefits = [
  ["✦", "Profesionální přístup", "Zkušený tým a pravidelné vzdělávání"],
  ["◇", "Kvalitní kosmetika", "Profesionální produkty a šetrné postupy"],
  ["♡", "Individuální péče", "Každá klientka i klient jsou pro nás jedineční"],
  ["▣", "Snadné objednání", "Přímo u vybrané specialistky"],
];

const contacts = [
  ["Kadeřnictví", "Jana Pelnářová", "+420 774 173 811", "tel:+420774173811"],
  ["Kadeřnictví", "Ivana Matýs", "+420 723 643 044", "tel:+420723643044"],
  ["Nehtové studio", "Alena Strejcová", "+420 724 247 446", "tel:+420724247446"],
  ["Nehtové studio", "Vladimíra Hrdinová", "+420 606 292 826", "tel:+420606292826"],
  ["Pedikúra", "Eva Černá", "+420 774 536 824", "tel:+420774536824"],
  ["Kosmetika", "Martina Dvořáková, DiS.", "+420 603 100 425", "tel:+420603100425"],
];

export default function Home() {
  return (
    <main className="new-home" id="top">
      <header className="lux-header">
        <a className="lux-logo" href="#top"><strong>BÍLÉ NÁROŽÍ</strong><span>SALON</span></a>
        <nav>
          <a href="#top">Domů</a><a href="/kadernictvi">Kadeřnictví</a><a href="/nehtove-studio">Nehtové studio</a><a href="/pedikura">Pedikúra</a><a href="/kosmetika">Kosmetika</a><a href="#onas">O nás</a><a href="#kontakt">Kontakt</a>
        </nav>
        <a className="lux-book" href="#kontakt">▣ Objednat se</a>
      </header>

      <section className="service-overview" id="sluzby">
        <div className="overview-heading">
          <p>✣ &nbsp; NAŠE SLUŽBY &nbsp; ✣</p>
          <h1>Komplexní péče o <em>vaši krásu</em></h1>
          <span>Profesionální služby, individuální přístup a výsledky, které vám dodají sebevědomí.</span>
        </div>

        <div className="visual-service-grid">
          {services.map((service, index) => (
            <a className={`visual-card card-${index + 1}`} href={service.href} key={service.title}>
              <div className="visual-photo"><img src={service.image} alt="" /></div>
              <div className="visual-copy">
                <div className="visual-title"><span className="visual-icon">{service.icon}</span><div><h2>{service.title}</h2><p>{service.subtitle}</p></div></div>
                <div className="short-rule" />
                <p className="visual-description">{service.text}</p>
                <ul>{service.features.map((f) => <li key={f}><span>✓</span>{f}</li>)}</ul>
                <span className="visual-button">Prohlédnout službu <b>›</b></span>
              </div>
              <div className="botanical" aria-hidden="true">⌇</div>
            </a>
          ))}
        </div>

        <div className="benefit-strip">
          {benefits.map(([icon,title,text]) => <div className="benefit" key={title}><span>{icon}</span><div><strong>{title}</strong><small>{text}</small></div></div>)}
        </div>
      </section>

      <section className="about-lux" id="onas">
        <p className="lux-kicker">SALON BÍLÉ NÁROŽÍ · PLZEŇ</p>
        <h2>Místo, kam se nechodí jen za službou.<br/><em>Chodí se sem pro dobrý pocit.</em></h2>
        <p>V samotném centru Plzně spojujeme kadeřnictví, nehtové studio, pedikúru a kosmetiku. Každou oblast zajišťuje konkrétní specialistka a objednání probíhá přímo podle služby.</p>
      </section>

      <section className="contact-lux" id="kontakt">
        <div className="contact-lux-heading"><p className="lux-kicker">OBJEDNÁNÍ</p><h2>Vyberte si svou<br/><em>specialistku.</em></h2><p>Pro nejrychlejší domluvu volejte přímo podle služby, o kterou máte zájem.</p></div>
        <div className="contact-lux-list">{contacts.map(([role,name,phone,href]) => <a href={href} key={`${role}-${name}`}><span>{role}</span><strong>{name}</strong><b>{phone}</b></a>)}</div>
      </section>

      <section className="where-lux">
        <div><p className="lux-kicker">KDE NÁS NAJDETE</p><h2>V centru Plzně.</h2></div>
        <div className="where-grid"><div><span>Adresa</span><strong>Prešovská 318/20<br/>301 00 Plzeň</strong><small>1. patro</small></div><div><span>Provozní doba salonu</span><strong>Po–Pá 8:00–18:00</strong><small>Jednotlivé služby dle objednávek.</small></div><div><span>Kontakt</span><a href="mailto:bilenarozi@gmail.com">bilenarozi@gmail.com</a><a href="https://www.facebook.com/bilenarozi/" target="_blank" rel="noreferrer">Facebook</a></div></div>
      </section>

      <footer className="lux-footer"><strong>BÍLÉ NÁROŽÍ</strong><span>Salon krásy · Prešovská · Plzeň</span><span>© {new Date().getFullYear()}</span></footer>

      <style>{`
        .new-home{background:#fbf8f3;color:#1e1a17;min-height:100vh}.lux-header{height:96px;padding:0 4vw;display:grid;grid-template-columns:260px 1fr 190px;align-items:center;border-bottom:1px solid #eadfd6;background:rgba(251,248,243,.96);position:sticky;top:0;z-index:30;backdrop-filter:blur(16px)}.lux-logo{display:flex;flex-direction:column;width:max-content}.lux-logo strong{font-family:var(--font-display),Georgia,serif;font-size:28px;letter-spacing:.015em}.lux-logo span{font-size:9px;letter-spacing:.42em;text-align:center;margin-top:4px}.lux-header nav{display:flex;justify-content:center;gap:28px;font-size:12px}.lux-header nav a{transition:.2s}.lux-header nav a:hover{color:#ad6851}.lux-book{justify-self:end;background:#ad6851;color:white;border-radius:12px;padding:16px 22px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}.service-overview{padding:32px 4vw 62px}.overview-heading{text-align:center;margin:0 auto 28px}.overview-heading>p,.lux-kicker{font-size:10px;font-weight:800;letter-spacing:.18em;color:#ad6851}.overview-heading h1{font-family:var(--font-display),Georgia,serif;font-size:clamp(44px,4.2vw,72px);line-height:.95;margin:10px 0 14px;font-weight:600}.overview-heading h1 em,.about-lux h2 em,.contact-lux h2 em{color:#ad6851;font-weight:500}.overview-heading>span{font-size:14px;opacity:.7}.visual-service-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;max-width:1420px;margin:auto}.visual-card{position:relative;min-height:318px;border:1px solid #eadfd6;border-radius:18px;background:#fffdf9;box-shadow:0 10px 35px rgba(70,44,32,.07);overflow:hidden;display:grid;grid-template-columns:42% 58%;transition:transform .25s,box-shadow .25s}.visual-card:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(70,44,32,.12)}.visual-card:nth-child(even){grid-template-columns:58% 42%}.visual-card:nth-child(even) .visual-photo{grid-column:2;grid-row:1}.visual-card:nth-child(even) .visual-copy{grid-column:1;grid-row:1}.visual-photo{height:100%;overflow:hidden;position:relative}.visual-photo:after{content:'';position:absolute;right:-42px;top:-7%;width:82px;height:114%;border-radius:50%;background:#fffdf9}.visual-card:nth-child(even) .visual-photo:after{right:auto;left:-42px}.visual-photo img{width:100%;height:100%;object-fit:cover;display:block}.visual-copy{padding:28px 30px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:2}.visual-title{display:flex;gap:17px;align-items:flex-start}.visual-icon{width:56px;height:56px;border:1px solid #bd806a;color:#ad6851;border-radius:50%;display:grid;place-items:center;font-size:24px;flex:none}.visual-title h2{font-family:var(--font-display),Georgia,serif;font-size:34px;line-height:.95;margin:2px 0 7px;font-weight:650}.visual-title p{font-size:9px;font-weight:800;letter-spacing:.16em;color:#ad6851;margin:0}.short-rule{width:24px;height:1px;background:#d7b5a8;margin:15px 0 12px 73px}.visual-description{font-size:12px;line-height:1.65;margin:0 0 12px 73px;opacity:.78}.visual-copy ul{list-style:none;padding:0;margin:0 0 16px 73px;display:grid;gap:7px}.visual-copy li{font-size:11px;display:flex;gap:9px;align-items:center}.visual-copy li span{color:#ad6851;font-weight:900}.visual-button{margin-left:73px;width:max-content;padding:10px 15px;border:1px solid #d7a996;border-radius:7px;text-transform:uppercase;font-size:9px;font-weight:800;letter-spacing:.05em;color:#9d5e49}.visual-button b{font-size:16px;margin-left:12px}.botanical{position:absolute;bottom:-14px;left:39%;font-family:Georgia,serif;font-size:100px;color:#d9a995;opacity:.34;transform:rotate(26deg);pointer-events:none}.visual-card:nth-child(even) .botanical{left:auto;right:39%}.benefit-strip{max-width:1420px;margin:20px auto 0;border:1px solid #eadfd6;border-radius:16px;background:#fffdf9;display:grid;grid-template-columns:repeat(4,1fr);padding:20px}.benefit{display:flex;gap:15px;padding:0 22px;border-right:1px solid #eadfd6;align-items:center}.benefit:last-child{border:0}.benefit>span{font-size:34px;color:#ad6851}.benefit div{display:flex;flex-direction:column;gap:3px}.benefit strong{font-family:var(--font-display),Georgia,serif;font-size:16px}.benefit small{font-size:10px;opacity:.68;line-height:1.45}.about-lux{padding:110px 8vw;text-align:center;background:#f3ebe3}.about-lux h2,.contact-lux h2,.where-lux h2{font-family:var(--font-display),Georgia,serif;font-size:clamp(44px,5vw,76px);line-height:.94;margin:18px 0 28px;font-weight:550}.about-lux>p:last-child{max-width:760px;margin:auto;font-size:14px;line-height:1.9;opacity:.72}.contact-lux{display:grid;grid-template-columns:.8fr 1.2fr;gap:7vw;padding:100px 7vw;background:#241f1b;color:#fff}.contact-lux-heading>p:last-child{max-width:400px;font-size:13px;line-height:1.8;opacity:.62}.contact-lux-list{border-top:1px solid rgba(255,255,255,.15)}.contact-lux-list a{display:grid;grid-template-columns:1fr 1.4fr 1fr;gap:18px;align-items:center;padding:20px 0;border-bottom:1px solid rgba(255,255,255,.15)}.contact-lux-list span{font-size:9px;text-transform:uppercase;letter-spacing:.12em;opacity:.5}.contact-lux-list strong{font-family:var(--font-display),Georgia,serif;font-size:20px;font-weight:500}.contact-lux-list b{font-size:11px;font-weight:500;opacity:.7}.where-lux{padding:90px 7vw;display:grid;grid-template-columns:1fr 1.25fr;gap:7vw}.where-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;align-self:center}.where-grid div{display:flex;flex-direction:column;gap:8px}.where-grid span{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#ad6851}.where-grid strong,.where-grid a{font-size:12px;line-height:1.65}.where-grid small{font-size:10px;opacity:.55}.lux-footer{padding:42px 5vw;border-top:1px solid #eadfd6;display:grid;grid-template-columns:1fr auto auto;gap:35px;align-items:end}.lux-footer strong{font-family:var(--font-display),Georgia,serif;font-size:32px}.lux-footer span{font-size:9px;text-transform:uppercase;letter-spacing:.1em;opacity:.55}@media(max-width:1050px){.lux-header{grid-template-columns:1fr auto}.lux-header nav{display:none}.visual-service-grid{grid-template-columns:1fr}.benefit-strip{grid-template-columns:1fr 1fr;gap:20px}.benefit:nth-child(2){border-right:0}.contact-lux,.where-lux{grid-template-columns:1fr}.where-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:680px){.lux-header{height:76px;padding:0 18px;grid-template-columns:1fr auto}.lux-logo strong{font-size:21px}.lux-logo span{font-size:7px}.lux-book{padding:12px 13px;font-size:9px}.service-overview{padding:28px 14px 50px}.overview-heading h1{font-size:43px}.overview-heading>span{font-size:12px}.visual-card,.visual-card:nth-child(even){display:flex;flex-direction:column;min-height:0}.visual-photo,.visual-card:nth-child(even) .visual-photo{height:230px;order:0}.visual-photo:after,.visual-card:nth-child(even) .visual-photo:after{display:none}.visual-copy,.visual-card:nth-child(even) .visual-copy{order:1;padding:24px 20px}.visual-title h2{font-size:31px}.visual-description,.visual-copy ul,.visual-button,.short-rule{margin-left:0}.short-rule{margin-top:15px}.botanical{display:none}.benefit-strip{grid-template-columns:1fr;padding:20px}.benefit{border-right:0;border-bottom:1px solid #eadfd6;padding:16px 6px}.benefit:last-child{border-bottom:0}.about-lux,.contact-lux,.where-lux{padding:72px 20px}.contact-lux-list a{grid-template-columns:1fr 1fr}.contact-lux-list b{grid-column:1/-1}.where-grid{grid-template-columns:1fr}.lux-footer{grid-template-columns:1fr;gap:10px;padding:35px 20px}}
      `}</style>
    </main>
  );
}
