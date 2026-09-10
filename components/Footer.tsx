const primaryLinks = ["Leistungen", "Referenzen", "Mission"];
const secondaryLinks = ["nexxt level", "Linkedin", "Impressum", "Datenschutz"];

function FooterLinks() {
  return (
    <nav className="footer__links" aria-label="Footer navigation">
      <div>
        {primaryLinks.map((link) => (
          <a href="#" key={link}>{link}</a>
        ))}
      </div>
      <div>
        {secondaryLinks.map((link) => (
          <a href="#" key={link}>{link}</a>
        ))}
      </div>
    </nav>
  );
}

function FooterAddress() {
  return (
    <div className="footer__address">
      <img src="/logo-vita-m.svg" alt="Vita Health Media" />
      <p>
        Vita Health Media GmbH
        <br />
        Büro Hamburg: Jessenstraße 4–6, 22767 Hamburg
        <br />
        Büro München: Thierschstraße 25, 80538 München
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <FooterAddress />
        <FooterLinks />
      </div>
      <p className="footer__copyright">© 2026 Vita Health Media GmbH</p>
    </footer>
  );
}