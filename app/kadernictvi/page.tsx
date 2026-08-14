import SalonHeader from "../components/SalonHeader";

export const metadata = {
  title: "Kadeřnictví Plzeň | Bílé nároží",
  description: "Kadeřnictví v centru Plzně – střihy, barvení, melírování, prodlužování vlasů a společenské účesy.",
};

const services = [
  ["Dámské, pánské a dětské střihy", "Střih přizpůsobený typu vlasů, stylu a osobnosti."],
  ["Barvení a melírování", "Barva, tónování a melír s důrazem na přirozený výsledek."],
  ["BOND PLUS", "Prodlužování a zhušťování vlasů pro plnější a delší účes."],
  ["Stříhání horkou břitvou", "Precizní technika pro hladký a upravený vzhled vlasů."],
  ["Společenské a svatební účesy", "Účesy pro výjimečné příležitosti včetně možnosti líčení."],
  ["Permanentní styling", "Tvar a objem vlasů s dlouhodobějším efektem."],
  ["Poradenství a domácí péče", "Doporučení profesionální vlasové kosmetiky podle potřeb vlasů."],
];

export default function Kadernictvi() {
  return (
    <main className="lux-page theme-hair">
      <SalonHeader active="Kadeřnictví" />

      <section className="lux-hero">
        <div className="lux-hero-copy">
          <p className="lux-kicker">Kadeřnictví · Plzeň</p>
          <h1>Vlasy, které budou<br /><em>opravdu vaše.</em></h1>
          <p>Střih, barva a styling s důrazem na osobní přístup, kvalitu práce a výsledek, který vám sedí.</p>
          <div className="lux-actions">
            <a className="lux-btn primary" href="#objednani">Objednat se</a>
            <a className="lux-btn secondary" href="tel:+420774173811">Zavolat do salonu</a>
          </div>
        </div>
        <div
          className="lux-visual"
          aria-hidden="true"
          style={{
            backgroundImage: "linear-gradient(120deg, rgba(44,28,22,.08), rgba(44,28,22,.34)), url('https://images.unsplash.com/photo-1755240637139-349a7e34b43b?auto=format&fit=crop&w=1600&q=88')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="visual-frame" style={{background:"linear-gradient(160deg,rgba(255,255,255,.18),rgba(255,255,255,.02))",backdropFilter:"blur(2px)"}}><span>HAIR</span><strong>BÍLÉ<br/>NÁROŽÍ</strong></div>
        </div>
      </section>

      <section className="benefit-strip">
        <div><span>01</span><strong>Osobní přístup</strong><small>Účes podle vás, ne podle šablony.</small></div>
        <div><span>02</span><strong>Kvalita & zkušenosti</strong><small>Profesionální techniky a pravidelné vzdělávání.</small></div>
        <div><span>03</span><strong>Péče o vlasy</strong><small>Důraz na zdravý vzhled a vhodnou domácí péči.</small></div>
        <div><span>04</span><strong>Dárkové poukazy</strong><small>Poukazy v libovolné hodnotě.</small></div>
      </section>

      <section className="lux-content">
        <div className="lux-services">
          <p className="lux-kicker">Naše služby</p>
          <h2>Od střihu po kompletní proměnu.</h2>
          <div className="lux-service-list">
            {services.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>

        <aside className="lux-sidebar" id="objednani">
          <p className="lux-kicker">Náš tým</p>
          <article className="person-card">
            <div className="person-monogram">JP</div>
            <div><h3>Jana Pelnářová</h3><p>Vlasová stylistka</p><a href="tel:+420774173811">+420 774 173 811</a><a href="mailto:kadernictvi.pelnarova@gmail.com">kadernictvi.pelnarova@gmail.com</a><small>IČO 74249461</small></div>
          </article>
          <article className="person-card">
            <div className="person-monogram">IM</div>
            <div><h3>Ivana Matýs</h3><p>Vlasová stylistka</p><a href="tel:+420723643044">+420 723 643 044</a><small>IČO 7648115</small></div>
          </article>
          <div className="hours-card"><span>Otevírací doba</span><p><strong>Po–Čt</strong> 9:00–17:00</p><p><strong>Pá</strong> 9:00–13:00</p><p><strong>So–Ne</strong> dle objednávek</p></div>
          <div className="brand-card"><span>Profesionální péče</span><h3>ALCINA</h3><p>Profesionální vlasová kosmetika a poradenství pro domácí péči.</p></div>
        </aside>
      </section>

      <section className="lux-cta">
        <div><p className="lux-kicker light">Těšíme se na vás</p><h2>Dopřejte svým vlasům péči,<br/>kterou si zaslouží.</h2></div>
        <div className="lux-actions"><a className="lux-btn primary" href="tel:+420774173811">Objednat u Jany</a><a className="lux-btn outline-light" href="tel:+420723643044">Objednat u Ivany</a></div>
      </section>
    </main>
  );
}
