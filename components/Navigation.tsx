"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import Button from "./Button";

const menuIcon =
  "https://www.figma.com/api/mcp/asset/53d16ffb-8baf-45e7-9a3f-054f4b9f6678.svg";

const links = ["Home", "Mission", "Leistung", "Projekte", "Next Level", "Team", "Aktuelles"];

function VitaLogo() {
  return (
    <span className="navigation__logo" aria-label="Vita Health Media">
      <img className="navigation__logo--large" src="/logo-vita-l.svg" alt="" />
      <img className="navigation__logo--small" src="/logo-vita-xs.svg" alt="" />
    </span>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navigation${isScrolled ? " navigation--sticky" : ""}`}>
      <VitaLogo />
      <nav className="navigation__links" aria-label="Main navigation">
        {links.map((link) => (
          <a href={`#${link.toLowerCase().replace(" ", "-")}`} key={link}>
            {link}
          </a>
        ))}
        <Button variant="secondary" size="small" iconRight={<Send size={12} />}>
          Kontakt
        </Button>
      </nav>
      <button className="navigation__menu" type="button" aria-label="Open menu">
        <img src={menuIcon} alt="" />
      </button>
    </header>
  );
}