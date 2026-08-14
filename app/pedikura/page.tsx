import SalonHeader from "../components/SalonHeader";

export const metadata = { title: "Pedikúra Plzeň | Bílé nároží", description: "Pedikúra a nehtový design v salonu Bílé nároží v centru Plzně." };

const services = [
  ["Diagnostika chodidel", "Základní posouzení stavu pokožky a nehtů před ošetřením."],
  ["Relaxační koupel", "Příjemná příprava chodidel před samotnou péčí."],
  ["Péče o zrohovatělou kůži", "Šetrné odstranění otlaků, prasklin a ztvrdlé pokožky."],
  ["Úprava nehtů", "Ošetření nehtů a jejich okolí pro čistý a upravený vzhled."],
  ["Peeling a regenerace", "Peeling, maska a výživná kosmetika pro jemnější pokožku."],
  ["Relaxační masáž", "Závěrečná péče pro pocit lehkosti a pohodlí."],
];

export default function Pedikura(){return <main className="lux-page theme-feet"><SalonHeader active="Pedikúra" />
<section className="lux-hero"><div className="lux-hero-copy"><p className="lux-kicker">Pedikúra · Plzeň</p><h1>Lehký krok.<br/><em>Pěstěný detail.</em></h1><p>Komplexní péče o chodidla zaměřená na pohodlí, zdravý vzhled a příjemný pocit po každé návštěvě.</p><div className="lux-actions"><a className="lux-btn primary" href="#objednani">Objednat se</a><a className="lux-btn secondary" href="tel:+420774536824">Zavolat pedikérce</a></div></div><div className="lux-visual" aria-hidden="true" style={{backgroundImage:"linear-gradient(120deg, rgba(44,28,22,.04), rgba(44,28,22,.26)), url('https://images.unsplash.com/photo-1707725238063-0c54fb6963d1?auto=format&fit=crop&w=1600&q=88')",backgroundSize:"cover",backgroundPosition:"center"}}><div className="visual-frame" style={{background:"linear-gradient(160deg,rgba(255,255,255,.18),rgba(255,255,255,.02))",backdropFilter:"blur(2px)"}}><span>CARE</span><strong>LIGHT<br/>STEP</strong></div></div></section>
<section className="benefit-strip"><div><span>01</span><strong>Komplexní péče</strong><small>Od nehtů až po pokožku chodidel.</small></div><div><span>02</span><strong>Pohodlí</strong><small>Ošetření přizpůsobené aktuální potřebě.</small></div><div><span>03</span><strong>Regenerace</strong><small>Peeling, maska a výživná kosmetika.</small></div><div><span>04</span><strong>Relaxace</strong><small>Péče zakončená příjemnou masáží.</small></div></section>
<section className="lux-content"><div className="lux-services"><p className="lux-kicker">Naše péče</p><h2>Péče od nehtů až po chodidla.</h2><div className="price-pill"><span>Základní ošetření</span><strong>490 Kč</strong></div><div className="lux-service-list">{services.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
<aside className="lux-sidebar" id="objednani"><p className="lux-kicker">Objednání</p><article className="person-card"><div className="person-monogram">EČ</div><div><h3>Eva Černá</h3><p>Pedikérka · nehtový design</p><a href="tel:+420774536824">+420 774 536 824</a><small>IČO 17926653</small></div></article><div className="hours-card"><span>Provozní doba</span><p><strong>Termíny</strong> dle objednávek</p><p>Rozsah ošetření se přizpůsobuje aktuálním potřebám klienta.</p></div><div className="brand-card"><span>Pravidelná péče</span><h3>Pohodlí každý den</h3><p>Pravidelná pedikúra pomáhá udržovat chodidla v upraveném a pohodlném stavu.</p></div></aside></section>
<section className="lux-cta"><div><p className="lux-kicker light">Čas pro vaše nohy</p><h2>Dopřejte chodidlům<br/>péči a lehkost.</h2></div><div className="lux-actions"><a className="lux-btn primary" href="tel:+420774536824">Objednat pedikúru</a></div></section></main>}
