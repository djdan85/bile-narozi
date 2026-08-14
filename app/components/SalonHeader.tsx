export default function SalonHeader({ active }: { active?: string }) {
  const links = [
    ["Domů", "/"],
    ["Kadeřnictví", "/kadernictvi"],
    ["Nehtové studio", "/nehtove-studio"],
    ["Pedikúra", "/pedikura"],
    ["Kosmetika", "/kosmetika"],
  ];

  return (
    <header className="salon-header">
      <a className="salon-logo" href="/">
        <strong>BÍLÉ NÁROŽÍ</strong>
        <span>SALON</span>
      </a>
      <nav className="salon-nav" aria-label="Hlavní navigace">
        {links.map(([label, href]) => (
          <a className={active === label ? "active" : ""} href={href} key={href}>{label}</a>
        ))}
        <a href="/#salon">O nás</a>
        <a href="/#kontakt">Kontakt</a>
      </nav>
      <a className="salon-book" href="#objednani">Objednat se</a>
    </header>
  );
}
