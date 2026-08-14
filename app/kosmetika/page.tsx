import SalonHeader from "../components/SalonHeader";

export const metadata = { title: "Kosmetika Plzeň | Bílé nároží", description: "Kosmetické studio Bílé nároží v centru Plzně – péče o pleť, obočí, řasy, masáže a relaxační procedury." };

const services = [
  ["Kompletní ošetření pleti", "Péče přizpůsobená aktuálním potřebám a typu pleti."],
  ["Protivráskový program", "Kosmetická péče zaměřená na hydrataci, komfort a svěží vzhled pleti."],
  ["Mikrojehličkování dermapenem", "Intenzivnější procedura pro cílenou kosmetickou péči."],
  ["Obočí a řasy", "Úprava a barvení obočí, barvení řas a zvýraznění přirozených rysů."],
  ["Masáže a lymfatická péče", "Lymfatická masáž obličeje a krku, mikromasáž očního okolí a relaxační masáž hlavy."],
  ["Depilace a doplňkové procedury", "Depilace voskem, baňkování, reflexní terapie, tejpování těla a beauty tejpování."],
];

export default function Kosmetika(){return <main className="lux-page theme-skin"><SalonHeader active="Kosmetika" />
<section className="lux-hero"><div className="lux-hero-copy"><p className="lux-kicker">Kosmetika · Plzeň</p><h1>Péče, která je<br/><em>vidět i cítit.</em></h1><p>Individuální kosmetická péče, relaxační procedury a chvíle klidu zaměřená na svěží vzhled a dobrý pocit.</p><div className="lux-actions"><a className="lux-btn primary" href="#objednani">Objednat se</a><a className="lux-btn secondary" href="tel:+420603100425">Zavolat kosmetičce</a></div></div><div className="lux-visual" aria-hidden="true" style={{backgroundImage:"linear-gradient(120deg, rgba(44,28,22,.05), rgba(44,28,22,.24)), url('https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1600&q=88')",backgroundSize:"cover",backgroundPosition:"center"}}><div className="visual-frame" style={{background:"linear-gradient(160deg,rgba(255,255,255,.18),rgba(255,255,255,.02))",backdropFilter:"blur(2px)"}}><span>SKIN</span><strong>YOUR<br/>MOMENT</strong></div></div></section>
<section className="benefit-strip"><div><span>01</span><strong>Individuální péče</strong><small>Procedura podle aktuálního stavu pleti.</small></div><div><span>02</span><strong>Relaxace</strong><small>Chvíle klidu v příjemném prostředí.</small></div><div><span>03</span><strong>Široká nabídka</strong><small>Od klasické kosmetiky po speciální procedury.</small></div><div><span>04</span><strong>Osobní přístup</strong><small>Výběr vhodné péče po vzájemné domluvě.</small></div></section>
<section className="lux-content"><div className="lux-services"><p className="lux-kicker">Kosmetická péče</p><h2>Čas věnovaný jen vám.</h2><div className="lux-service-list">{services.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
<aside className="lux-sidebar" id="objednani"><p className="lux-kicker">Objednání</p><article className="person-card"><div className="person-monogram">MD</div><div><h3>Martina Dvořáková, DiS.</h3><p>Kosmetička</p><a href="tel:+420603100425">+420 603 100 425</a><small>IČO 65539508</small></div></article><div className="hours-card"><span>Provozní doba</span><p><strong>Termíny</strong> dle objednávek</p><p>Délka a rozsah jednotlivých procedur se mohou přizpůsobit konkrétním potřebám klienta.</p></div><div className="brand-card"><span>Doporučení</span><h3>Péče na míru</h3><p>Pokud si nejste jistí výběrem procedury, vhodné ošetření lze domluvit přímo s kosmetičkou.</p></div></aside></section>
<section className="lux-cta"><div><p className="lux-kicker light">Dopřejte si chvíli pro sebe</p><h2>Svěží pleť.<br/>Klidnější chvíle.</h2></div><div className="lux-actions"><a className="lux-btn primary" href="tel:+420603100425">Objednat kosmetiku</a></div></section></main>}
